const express = require('express');
const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
  res.send('List of all doctors');
});

router.get('/:id', (req, res) => {
  const doctorId = req.params.id;
  res.send(`Doctor with ID ${doctorId}`);
});

module.exports = router;
