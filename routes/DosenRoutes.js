const express = require('express');
const router = express.Router();

// Controllers for Dosen operations (add, delete, get all, get by ID, update)
const DosenService = require('../service/DosenService');

// Route to create a new Dosen
router.post('/api/dosen', async (req, res) => {
  try {
    const newDosen = await DosenService.add_dosen(req.body);
    res.json(newDosen);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to delete a Dosen by ID
router.delete('/api/dosen/:id', async (req, res) => {
  const id_dosen = req.params.id;
  try {
    await DosenService.delete_dosen(id_dosen);
    res.status(204).end(); // No content response for successful deletion
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to get all Dosen
router.get('/api/dosen', async (req, res) => {
  try {
    const allDosen = await DosenService.get_all_dosen();
    res.json(allDosen);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to get a Dosen by ID
router.get('/api/dosen/:id', async (req, res) => {
  const id_dosen = req.params.id;
  try {
    const dosen = await DosenService.get_dosen(id_dosen);
    res.json(dosen);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to update a Dosen by ID
router.put('/api/dosen/:id', async (req, res) => {
  const id_dosen = req.params.id;
  try {
    const updatedDosen = await DosenService.update_dosen(req.body, id_dosen);
    res.json(updatedDosen);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;