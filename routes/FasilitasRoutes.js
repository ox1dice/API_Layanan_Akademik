const express = require('express');
const router = express.Router();
const FasilitasService = require('../services/FasilitasService');

/**
 * @swagger
 * /api/fasilitas:
 *   post:
 *     summary: Create Fasilitas
 *     description: Create a new Fasilitas data
 *     tags: [Fasilitas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Fasilitas'
 *     responses:
 *       "200":
 *         description: A response body
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Fasilitas'
 */
router.post('/api/fasilitas', async (req, res, next) => {
    const data = req.body;
    const response = await FasilitasService.add_fasilitas(data);
    return res.json(response);
});

/**
 * @swagger
 * /api/fasilitas/{id}:
 *   get:
 *     summary: Get Fasilitas by ID
 *     description: Retrieve a single Fasilitas data by ID
 *     tags: [Fasilitas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the Fasilitas to retrieve
 *     responses:
 *       "200":
 *         description: A response body
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Fasilitas'
 */
router.get('/api/fasilitas/:id', async (req, res, next) => {
    const id = req.params.id;
    const response = await FasilitasService.get_fasilitas(id);
    return res.json(response);
});

// Implement other routes similarly for update and delete

module.exports = router;
