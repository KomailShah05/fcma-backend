const express = require("express");
const router = express.Router();

const {
  savePivotState,
  getPivotState,
} = require("../controllers/pivotStateController");

router.post("/save", savePivotState);
router.get("/:templateId", getPivotState);

module.exports = router;
