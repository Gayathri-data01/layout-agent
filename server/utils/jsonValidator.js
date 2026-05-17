export function validateLayoutJson(layout) {
  if (!layout) return false;

  if (!layout.rootNodes) return false;

  if (!layout.nodes) return false;

  return true;
}