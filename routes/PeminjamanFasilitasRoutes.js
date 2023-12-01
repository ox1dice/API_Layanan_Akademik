const express = require('express');
const router = express.Router();
const PeminjamanFasilitasService = require('../service/PeminjamanFasilitasService');

// Create a new Peminjaman Fasilitas
router.post('/peminjaman_fasilitas', async (req, res) => {
    const data = req.body;
  
    try {
        const { success, result } = await PeminjamanFasilitasService.create(data);
  
        if (success) {
            return res.status(201).json({ success, result });
        } else {
            return res.status(400).json({ success, result });
        }
    } catch (error) {
        console.error('Error during Peminjaman Fasilitas creation:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// Get All Peminjaman Fasilitas
router.get('/peminjaman_fasilitas', async (req, res) => {
    try {
      const allPeminjamanFasilitas = await PeminjamanFasilitasService.getAll();
      res.json(allPeminjamanFasilitas);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

// Get Peminjaman Fasilitas by ID
router.get('/peminjaman_fasilitas/:id', async (req, res) => {
    const id = req.params.id;
  
    try {
      const { success, result } = await PeminjamanFasilitasService.getById(id);
  
      if (success) {
        return res.status(200).json({ success, result });
      } else {
        return res.status(404).json({ success, result });
      }
    } catch (error) {
      console.error('Error during Get Peminjaman Fasilitas :', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// Update Peminjaman Fasilitas by ID
router.put('/peminjaman_fasilitas/:id', async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    
      const { success, result } = await PeminjamanFasilitasService.updateById(id, data);
      
      if (success) {
        return res.status(200).json({ success, result });
      } else {
        return res.status(404).json({ success, result });
      }
     
  });

// Delete Peminjaman Fasilitas by ID
router.delete('/peminjaman_fasilitas/:id', async (req, res) => {
    const id = req.params.id;
  
    try {
      const { success, result } = await PeminjamanFasilitasService.deleteById(id);
  
      if (success) {
        return res.status(200).json({ success, result });
      } else {
        return res.status(404).json({ success, result });
      }
    } catch (error) {
      console.error('Error during Peminjaman Fasilitas deletion:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = router;