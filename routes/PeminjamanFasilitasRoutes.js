const express = require('express');
const router = express.Router();
const PeminjamanFasilitasService = require('../services/PeminjamanFasilitasService');

router.post('/api/peminjaman_fasilitas/add', async (req, res, next) => {
    const data = req.body;
    try {
        await PeminjamanFasilitasService.add_peminjaman_fasilitas(data);
        res.sendStatus(201); // Created
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/api/peminjaman_fasilitas/all', async (req, res, next) => {
    try {
        const result = await PeminjamanFasilitasService.get_all_peminjaman_fasilitas();
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/api/peminjaman_fasilitas/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        const result = await PeminjamanFasilitasService.get_peminjaman_fasilitas(id);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/api/peminjaman_fasilitas/:id/update', async (req, res, next) => {
    const id = req.params.id;
    const data = req.body;
    try {
        await PeminjamanFasilitasService.update_peminjaman_fasilitas(data, id);
        res.sendStatus(204); // No Content
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;