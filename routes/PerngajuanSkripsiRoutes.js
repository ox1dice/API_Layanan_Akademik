const express = require('express');
const router = express.Router();
const PengajuanSkripsiService = require('../services/PengajuanSkripsiService');

router.post('/api/pengajuan_skripsi/add', async (req, res, next) => {
    const body = req.body;
    const result = await PengajuanSkripsiService.add_pengajuan_skripsi(body);
    return res.json(result);
});

router.get('/api/pengajuan_skripsi/getAll', async (req, res, next) => {
    const result = await PengajuanSkripsiService.get_all_pengajuan_skripsi();
    return res.json(result);
});

router.get('/api/pengajuan_skripsi/:id', async (req, res, next) => {
    const id = req.params.id;
    const result = await PengajuanSkripsiService.get_pengajuan_skripsi(id);
    return res.json(result);
});

router.put('/api/pengajuan_skripsi/update/:id', async (req, res, next) => {
    const id = req.params.id;
    const body = req.body;
    const result = await PengajuanSkripsiService.update_pengajuan_skripsi(body, id);
    return res.json(result);
});

module.exports = router;