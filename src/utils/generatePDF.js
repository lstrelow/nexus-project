import { LEVEL_META } from "../data/levelMeta.js";

export async function generatePDF(stats, badges, moduleTitle) {
  if (!window.jspdf) {
    await new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const W = 210, H = 297;

  const col = {
    accent:  [237, 110,  69],
    second:  [142, 122, 101],
    dark:    [ 42,  31,  20],
    mid:     [107,  92,  74],
    light:   [168, 152, 128],
    warm:    [242, 235, 227],
    bg:      [250, 246, 242],
  };

  // Background
  doc.setFillColor(...col.bg);   doc.rect(0, 0, W, H, "F");
  doc.setFillColor(...col.accent); doc.rect(0, 0, W, 6, "F");
  doc.setFillColor(...col.second); doc.rect(0, 6, 3, H - 6, "F");
  doc.setFillColor(...col.warm);   doc.rect(3, 6, W - 3, 52, "F");

  // Header
  doc.setFont("helvetica", "bold"); doc.setFontSize(26); doc.setTextColor(...col.accent);
  doc.text("NEXUS Corp", 18, 28);
  doc.setFontSize(13); doc.setTextColor(...col.mid); doc.setFont("helvetica", "normal");
  doc.text("Lernzertifikat · Enterprise Information Systems", 18, 37);
  doc.setFontSize(11); doc.text(moduleTitle, 18, 45);
  const today = new Date().toLocaleDateString("de-DE", { day: "2-digit", month: "long", year: "numeric" });
  doc.setFontSize(9); doc.setTextColor(...col.light);
  doc.text(`Ausgestellt am ${today}`, W - 18, 45, { align: "right" });
  doc.setDrawColor(...col.accent); doc.setLineWidth(0.5); doc.line(18, 58, W - 18, 58);

  // Stats
  let y = 68;
  doc.setFont("helvetica", "bold"); doc.setFontSize(10); doc.setTextColor(...col.second);
  doc.text("LERNSTATISTIK", 18, y); y += 7;

  const statItems = [
    { label: "Gesamte XP",          value: stats.xp + " XP" },
    { label: "Abgeschlossene Level", value: stats.levelCount + " / 10" },
    { label: "Entscheidungen",       value: String(stats.decisions) },
    { label: "Korrekte Antworten",   value: stats.correct + " / " + stats.total },
  ];
  const colW = (W - 36) / 2;
  statItems.forEach((s, i) => {
    const x = 18 + (i % 2) * (colW + 8);
    const sy = y + Math.floor(i / 2) * 16;
    doc.setFillColor(255, 255, 255); doc.roundedRect(x, sy, colW, 12, 2, 2, "F");
    doc.setFont("helvetica", "bold"); doc.setFontSize(11); doc.setTextColor(...col.accent);
    doc.text(s.value, x + colW - 4, sy + 8, { align: "right" });
    doc.setFont("helvetica", "normal"); doc.setFontSize(8); doc.setTextColor(...col.mid);
    doc.text(s.label, x + 4, sy + 8);
  });
  y += 40;

  // Badges
  doc.setDrawColor(...col.warm); doc.setLineWidth(0.3); doc.line(18, y - 2, W - 18, y - 2); y += 4;
  doc.setFont("helvetica", "bold"); doc.setFontSize(10); doc.setTextColor(...col.second);
  doc.text("ERRUNGENSCHAFTEN", 18, y); y += 8;

  const levelIds = Array.from(badges);
  levelIds.forEach((lid, i) => {
    const meta = LEVEL_META[lid]; if (!meta) return;
    const bx = 18 + (i % 2) * (colW + 8);
    const by = y + Math.floor(i / 2) * 14;
    doc.setFillColor(255, 255, 255); doc.roundedRect(bx, by, colW, 11, 2, 2, "F");
    doc.setFontSize(9); doc.setFont("helvetica", "bold"); doc.setTextColor(...col.dark);
    doc.text(`L${lid}: ${meta.badge.replace(/[^\x00-\x7F]/g, "").trim()}`, bx + 4, by + 7);
  });
  y += Math.ceil(levelIds.length / 2) * 14 + 8;

  // Concepts
  doc.setDrawColor(...col.warm); doc.line(18, y - 2, W - 18, y - 2); y += 4;
  doc.setFont("helvetica", "bold"); doc.setFontSize(10); doc.setTextColor(...col.second);
  doc.text("BEHERRSCHTE KONZEPTE", 18, y); y += 8;

  const allConcepts = levelIds.flatMap(lid => LEVEL_META[lid]?.concepts || []);
  const cols = 3;
  const kColW = (W - 36 - (cols - 1) * 4) / cols;
  allConcepts.forEach((k, i) => {
    if (y > H - 30) return;
    const kx = 18 + (i % cols) * (kColW + 4);
    const ky = y + Math.floor(i / cols) * 9;
    doc.setFillColor(...col.warm); doc.roundedRect(kx, ky, kColW, 7, 1, 1, "F");
    doc.setFont("helvetica", "normal"); doc.setFontSize(7.5); doc.setTextColor(...col.mid);
    doc.text(k, kx + 3, ky + 5, { maxWidth: kColW - 6 });
  });

  // Footer
  doc.setFillColor(...col.warm); doc.rect(0, H - 18, W, 18, "F");
  doc.setFillColor(...col.accent); doc.rect(0, H - 18, 3, 18, "F");
  doc.setFont("helvetica", "normal"); doc.setFontSize(8); doc.setTextColor(...col.light);
  doc.text("NEXUS Corp · Lehrstuhl für Enterprise Systems, Plattformen und Architekturen", W / 2, H - 8, { align: "center" });

  doc.save("NEXUS_Zertifikat.pdf");
}
