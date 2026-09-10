export function markComplete(completed, moduleId, levelId) {
  return new Set([...completed, `${moduleId}:${levelId}`]);
}

export function isComplete(completed, moduleId, levelId) {
  return completed.has(`${moduleId}:${levelId}`);
}

export function countComplete(completed, moduleId) {
  const prefix = `${moduleId}:`;
  return [...completed].filter(k => k.startsWith(prefix)).length;
}
