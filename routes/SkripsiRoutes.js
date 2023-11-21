const express = require('express');
const router = express.Router();
const SkripsiService = require('../services/SkripsiService');

/**
 * POST /api/skripsi/create
 * Create a new Skripsi
 */
router.post('/api/skripsi/create', async (req, res, next) => {
    const skripsiData = req.body;
    const result = await SkripsiService.add_skripsi(skripsiData);
    return res.json(result);
});

/**
 * DELETE /api/skripsi/delete/:id_skripsi
 * Delete a Skripsi by ID
 */
router.delete('/api/skripsi/delete/:id_skripsi', async (req, res, next) => {
    const skripsiId = req.params.id_skripsi;
    const result = await SkripsiService.delete_skripsi(skripsiId);
    return res.json(result);
});

/**
 * GET /api/skripsi/all
 * Get all Skripsi
 */
router.get('/api/skripsi/all', async (req, res, next) => {
    const result = await SkripsiService.get_all_skripsi();
    return res.json(result);
});

/**
 * GET /api/skripsi/:id_skripsi
 * Get a Skripsi by ID
 */
router.get('/api/skripsi/:id_skripsi', async (req, res, next) => {
    const skripsiId = req.params.id_skripsi;
    const result = await SkripsiService.get_skripsi(skripsiId);
    return res.json(result);
});

/**
 * PUT /api/skripsi/update/:id_skripsi
 * Update a Skripsi by ID
 */
router.put('/api/skripsi/update/:id_skripsi', async (req, res, next) => {
    const skripsiId = req.params.id_skripsi;
    const skripsiData = req.body;
    const result = await SkripsiService.update_skripsi(skripsiData, skripsiId);
    return res.json(result);
});

module.exports = router;