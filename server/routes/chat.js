import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {

  const { message, layout } = req.body;

  let updatedLayout = structuredClone(layout);

  const rootId = updatedLayout.rootNodes[0];

  const artboard = updatedLayout.nodes[rootId];

  // Convert to 9:16
  if (message.toLowerCase().includes("9:16")) {

    artboard.width = 1080;
    artboard.height = 1920;

    artboard.children.forEach((childId) => {

      const node = updatedLayout.nodes[childId];

      if (!node) return;

      node.x = node.nx * 1080;
      node.y = node.ny * 1920;

      node.width = node.nw * 1080;
      node.height = node.nh * 1920;
    });

    return res.json({
      explanation: "Converted layout to 9:16 format",
      updatedLayout
    });
  }
  // Make headline smaller
if (message.toLowerCase().includes("headline smaller")) {

  Object.values(updatedLayout.nodes).forEach((node) => {

    if (
      node.type === "text" &&
      node.data?.content?.includes("Luxury Comfort")
    ) {

      node.style.visual.fontSize = 50;
    }
  });

  return res.json({
    explanation: "Made headline smaller",
    updatedLayout
  });
}

// Move offer badge higher
if (message.toLowerCase().includes("offer badge higher")) {

  Object.values(updatedLayout.nodes).forEach((node) => {

    if (
      node.type === "shape"
    ) {

      node.y = node.y - 100;
      node.ny = node.y / artboard.height;
    }
  });

  return res.json({
    explanation: "Moved offer badge higher",
    updatedLayout
  });
}

  // Move headline to top
  if (message.toLowerCase().includes("headline")) {

    Object.values(updatedLayout.nodes).forEach((node) => {

      if (
        node.type === "text" &&
        node.data?.content?.includes("Luxury Comfort")
      ) {

        node.y = 80;
        node.ny = 80 / artboard.height;
      }
    });

    return res.json({
      explanation: "Moved headline to top",
      updatedLayout
    });
  }

  return res.json({
    explanation: "No changes applied",
    updatedLayout
  });

});

export default router;