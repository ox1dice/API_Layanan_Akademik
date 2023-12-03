const express = require('express');
const router = express.Router();



const DosenService = require('../service/DosenService');

// Route to create a new Dosen
router.post('/dosen', async (req, res) => {
  const data = req.body;

  try {
      const { success, result } = await DosenService.create(data);

      if (success) {
          return res.status(201).json({ success, result });
      } else {
          return res.status(400).json({ success, result });
      }
  } catch (error) {
      console.error('Error during Dosen creation:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to get all Dosen
router.get('/dosen', async (req, res) => {
  try {
    const allDosen = await DosenService.getAll();
    res.json(allDosen);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to delete a Dosen by ID
router.delete('/dosen/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const { success, result } = await DosenService.deleteById(id);

    if (success) {
      return res.status(200).json({ success, result });
    } else {
      return res.status(404).json({ success, result });
    }
  } catch (error) {
    console.error('Error during Dosen deletion:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});



// Route to get a Dosen by ID
router.get('/dosen/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const { success, result } = await DosenService.getById(id);

    if (success) {
      return res.status(200).json({ success, result });
    } else {
      return res.status(404).json({ success, result });
    }
  } catch (error) {
    console.error('Error during Get Dosen :', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});



// Route to update a Dosen by ID

// const updateData = {
//   fakultas: '',
//   nama_dosen: '',
//   nidn: '',
//   email: '',
// };

router.put('/dosen/:id', async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  
    const { success, result } = await DosenService.updateById(id, data);
    
    if (success) {
      return res.status(200).json({ success, result });
    } else {
      return res.status(404).json({ success, result });
    }
   
});

module.exports = router;