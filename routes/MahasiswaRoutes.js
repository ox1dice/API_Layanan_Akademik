const express = require('express');
const router = express.Router();
const MahasiswaService = require('../services/MahasiswaService');

// Create a new Mahasiswa
router.post('/api/mahasiswa', async (req, res, next) => {
    const data = req.body;
    const { success, result } = await MahasiswaService.add_mahasiswa(data);
    return res.json({ success, result });
});

// Get All Mahasiswa
router.get('/api/mahasiswa', async (req, res, next) => {
    const { success, result } = await MahasiswaService.get_all_mahasiswa();
    return res.json({ success, result });
});

// Get Mahasiswa by ID
router.get('/api/mahasiswa/:id', async (req, res, next) => {
    const id_mahasiswa = req.params.id;
    const { success, result } = await MahasiswaService.get_mahasiswa(id_mahasiswa);
    return res.json({ success, result });
});

// Update Mahasiswa by ID
router.put('/api/mahasiswa/:id', async (req, res, next) => {
    const id_mahasiswa = req.params.id;
    const data = req.body;
    const { success, result } = await MahasiswaService.update_mahasiswa(data, id_mahasiswa);
    return res.json({ success, result });
});

// Delete Mahasiswa by ID
router.delete('/api/mahasiswa/:id', async (req, res, next) => {
    const id_mahasiswa = req.params.id;
    const { success, result } = await MahasiswaService.delete_mahasiswa(id_mahasiswa);
    return res.json({ success, result });
});

module.exports = router;