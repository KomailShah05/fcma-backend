const PivotState = require("../models/PivotState");
const { v4: uuidv4 } = require("uuid"); // For generating unique IDs

// Save Pivot State
exports.savePivotState = async (req, res) => {
  try {
    const { state } = req.body;
    const templateId = uuidv4(); // Generate a unique template ID
    const pivotState = new PivotState({ templateId, state });
    await pivotState.save();
    res.status(201).json(pivotState);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get Pivot State
exports.getPivotState = async (req, res) => {
  try {
    const pivotState = await PivotState.findOne({
      templateId: req.params.templateId,
    });
    if (!pivotState) {
      return res.status(404).json({ error: "Pivot state not found" });
    }
    res.json(pivotState);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
