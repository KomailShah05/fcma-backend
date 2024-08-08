const mongoose = require("mongoose");

const PivotStateSchema = new mongoose.Schema({
  templateId: {
    type: String,
    required: true,
    unique: true,
  },
  state: {
    type: Object,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("PivotState", PivotStateSchema);
