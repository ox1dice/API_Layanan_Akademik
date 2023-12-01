const express = require('express');
const router = express.Router();
const PengajuanSkripsiService = require('../service/PengajuanSkripsiService');

// Create a new Pengajuan Skripsi
router.post('/pengajuan_skripsi', async (req, res) => {
    const data = req.body;
  
    try {
        const { success, result } = await PengajuanSkripsiService.create(data);
  
        if (success) {
            return res.status(201).json({ success, result });
        } else {
            return res.status(400).json({ success, result });
        }
    } catch (error) {
        console.error('Error during Pengajuan Skripsi creation:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// Get All Pengajuan Skripsi
router.get('/pengajuan_skripsi', async (req, res) => {
    try {
      const allPengajuanSkripsi = await PengajuanSkripsiService.getAll();
      res.json(allPengajuanSkripsi);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

// Get Pengajuan Skripsi by ID
router.get('/pengajuan_skripsi/:id', async (req, res) => {
    const id = req.params.id;
  
    try {
      const { success, result } = await PengajuanSkripsiService.getById(id);
  
      if (success) {
        return res.status(200).json({ success, result });
      } else {
        return res.status(404).json({ success, result });
      }
    } catch (error) {
      console.error('Error during Get Pengajuan Skripsi :', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// Update Pengajuan Skripsi by ID
router.put('/pengajuan_skripsi/:id', async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    
      const { success, result } = await PengajuanSkripsiService.updateById(id, data);
      
      if (success) {
        return res.status(200).json({ success, result });
      } else {
        return res.status(404).json({ success, result });
      }
     
  });

// Delete Pengajuan Skripsi by ID
router.delete('/pengajuan_skripsi/:id', async (req, res) => {
    const id = req.params.id;
  
    try {
      const { success, result } = await PengajuanSkripsiService.deleteById(id);
  
      if (success) {
        return res.status(200).json({ success, result });
      } else {
        return res.status(404).json({ success, result });
      }
    } catch (error) {
      console.error('Error during Pengajuan Skripsi deletion:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });


module.exports = router;