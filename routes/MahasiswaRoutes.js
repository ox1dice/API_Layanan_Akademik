const express = require('express');
const router = express.Router();
const MahasiswaService = require('../service/MahasiswaService');

// Create a new Mahasiswa
router.post('/mahasiswa', async (req, res) => {
    const data = req.body;
  
    try {
        const { success, result } = await MahasiswaService.create(data);
  
        if (success) {
            return res.status(201).json({ success, result });
        } else {
            return res.status(400).json({ success, result });
        }
    } catch (error) {
        console.error('Error during Mahasiswa creation:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// Get All Mahasiswa
router.get('/mahasiswa', async (req, res) => {
    try {
      const allMahasiswa = await MahasiswaService.getAll();
      res.json(allMahasiswa);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

// Get Mahasiswa by ID
router.get('/mahasiswa/:id', async (req, res) => {
    const id = req.params.id;
  
    try {
      const { success, result } = await MahasiswaService.getById(id);
  
      if (success) {
        return res.status(200).json({ success, result });
      } else {
        return res.status(404).json({ success, result });
      }
    } catch (error) {
      console.error('Error during Get Mahasiswa :', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// Update Mahasiswa by ID
router.put('/mahasiswa/:id', async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    
      const { success, result } = await MahasiswaService.updateById(id, data);
      
      if (success) {
        return res.status(200).json({ success, result });
      } else {
        return res.status(404).json({ success, result });
      }
     
  });

// Delete Mahasiswa by ID
router.delete('/mahasiswa/:id', async (req, res) => {
    const id = req.params.id;
  
    try {
      const { success, result } = await MahasiswaService.deleteById(id);
  
      if (success) {
        return res.status(200).json({ success, result });
      } else {
        return res.status(404).json({ success, result });
      }
    } catch (error) {
      console.error('Error during Mahasiswa deletion:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = router;