const express = require('express');
const router = express.Router();
const FasilitasService = require('../service/FasilitasService');


// Route to create a new Fasilitas
router.post('/fasilitas', async (req, res) => {
    const data = req.body;
  
    try {
        const { success, result } = await FasilitasService.create(data);
  
        if (success) {
            return res.status(201).json({ success, result });
        } else {
            return res.status(400).json({ success, result });
        }
    } catch (error) {
        console.error('Error during Fasilitas creation:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Route to get all Fasilitas
  router.get('/fasilitas', async (req, res) => {
    try {
      const allFasilitas = await FasilitasService.getAll();
      res.json(allFasilitas);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // Route to delete a Fasilitas by ID
  router.delete('/fasilitas/:id', async (req, res) => {
    const id = req.params.id;
  
    try {
      const { success, result } = await FasilitasService.deleteById(id);
  
      if (success) {
        return res.status(200).json({ success, result });
      } else {
        return res.status(404).json({ success, result });
      }
    } catch (error) {
      console.error('Error during Fasilitas deletion:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  
  
  // Route to get a Fasilitas by ID
  router.get('/fasilitas/:id', async (req, res) => {
    const id = req.params.id;
  
    try {
      const { success, result } = await FasilitasService.getById(id);
  
      if (success) {
        return res.status(200).json({ success, result });
      } else {
        return res.status(404).json({ success, result });
      }
    } catch (error) {
      console.error('Error during Get Fasilitas :', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  
  
  // Route to update a Fasilitas by ID
  
  // const updateData = {
  //   fakultas: '',
  //   nama_Fasilitas: '',
  //   nidn: '',
  //   email: '',
  // };
  
  router.put('/fasilitas/:id', async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    
      const { success, result } = await FasilitasService.updateById(id, data);
      
      if (success) {
        return res.status(200).json({ success, result });
      } else {
        return res.status(404).json({ success, result });
      }
     
  });

module.exports = router;
