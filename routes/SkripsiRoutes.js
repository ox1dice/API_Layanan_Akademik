const express = require('express');
const router = express.Router();
const SkripsiService = require('../service/SkripsiService');

// Create a new Skripsi
router.post('/skripsi', async (req, res) => {
    const data = req.body;
  
    try {
        const { success, result } = await SkripsiService.create(data);
  
        if (success) {
            return res.status(201).json({ success, result });
        } else {
            return res.status(400).json({ success, result });
        }
    } catch (error) {
        console.error('Error during Skripsi creation:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// Get All Skripsi
router.get('/skripsi', async (req, res) => {
    try {
      const allSkripsi = await SkripsiService.getAll();
      res.json(allSkripsi);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

// Get Skripsi by ID
router.get('/skripsi/:id', async (req, res) => {
    const id = req.params.id;
  
    try {
      const { success, result } = await SkripsiService.getById(id);
  
      if (success) {
        return res.status(200).json({ success, result });
      } else {
        return res.status(404).json({ success, result });
      }
    } catch (error) {
      console.error('Error during Get Skripsi :', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// Update Skripsi by ID
router.put('/skripsi/:id', async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    
      const { success, result } = await SkripsiService.updateById(id, data);
      
      if (success) {
        return res.status(200).json({ success, result });
      } else {
        return res.status(404).json({ success, result });
      }
     
  });

// Delete Skripsi by ID
router.delete('/skripsi/:id', async (req, res) => {
    const id = req.params.id;
  
    try {
      const { success, result } = await SkripsiService.deleteById(id);
  
      if (success) {
        return res.status(200).json({ success, result });
      } else {
        return res.status(404).json({ success, result });
      }
    } catch (error) {
      console.error('Error during Skripsi deletion:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = router;