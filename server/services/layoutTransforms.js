export function applyInstruction(layout, instruction) {
  const updatedLayout = JSON.parse(JSON.stringify(layout));

  const artboard =
    updatedLayout.nodes[updatedLayout.rootNodes[0]];

  // Convert to 9:16
  if (instruction.toLowerCase().includes("9:16")) {
    artboard.width = 1080;
    artboard.height = 1920;
  }

  // Move headline to top
  if (instruction.toLowerCase().includes("headline to the top")) {
    Object.values(updatedLayout.nodes).forEach((node) => {
      if (
        node.type === "text" &&
        node.data?.content?.toLowerCase().includes("luxury")
      ) {
        node.y = 80;
      }
    });
  }

  // Make headline smaller
  if (instruction.toLowerCase().includes("headline smaller")) {
    Object.values(updatedLayout.nodes).forEach((node) => {
      if (
        node.type === "text" &&
        node.data?.content?.toLowerCase().includes("luxury")
      ) {
        node.style.visual.fontSize = 48;
      }
    });
  }

  // Move offer badge higher
  if (instruction.toLowerCase().includes("offer badge higher")) {
    Object.values(updatedLayout.nodes).forEach((node) => {
      if (
        node.type === "shape" ||
        node.data?.content?.includes("OFF")
      ) {
        node.y = node.y - 100;
      }
    });
  }

  return updatedLayout;
}