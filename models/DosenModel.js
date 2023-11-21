const { Sequelize } = require('sequelize');
const sequelize = require('../database');

/**
 * @swagger
 * components:
 *   schemas:
 *     Dosen:
 *       type: object
 *       required:
 *         - nama_dosen
 *         - nidn
 *         - email
 *       properties:
 *         id_dosen:
 *           type: integer
 *           description: The ID of the dosen
 *         fakultas:
 *           type: string
 *           description: The faculty of the dosen
 *         nama_dosen:
 *           type: string
 *           description: The name of the dosen
 *         nidn:
 *           type: string
 *           description: The NIDN (Nomor Induk Dosen Nasional) of the dosen
 *         email:
 *           type: string
 *           format: email
 *           description: The email of the dosen
 *       example:
 *         id_dosen: 1
 *         fakultas: Teknik
 *         nama_dosen: John Doe
 *         nidn: "1234567890"
 *         email: johndoe@example.com
 */
const Dosen = sequelize.define('dosen', {
    id_dosen: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    fakultas: { type: Sequelize.STRING(100), allowNull: true },
    nama_dosen: { type: Sequelize.STRING(100), allowNull: false },
    nidn: { type: Sequelize.STRING(20), allowNull: false, unique: true },
    email: { type: Sequelize.STRING(100), allowNull: false, unique: true },
}, {
    comment: "This is the table for all dosen",
    timestamps: true,
    freezeTableName: true,
    tableName: 'dosen',
});

module.exports = Dosen;