const express = require("express");
const router = express.Router();
const {
  getAllDoctors,
  getDoctorById,
  searchDoctors,
} = require("../models/doctorModels");

router.use(express.json());

router.get("/", async (req, res) => {
  try {
    const doctors = await getAllDoctors();
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const doctorId = req.params.id;
  try {
    const doctor = await getDoctorById(doctorId);
    res.json(doctor);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.get("/search/:query", async (req, res) => {
  const searchQuery = req.params.query;
  try {
    const doctors = await searchDoctors(searchQuery);
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
