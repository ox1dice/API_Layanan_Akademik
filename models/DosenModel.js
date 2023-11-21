const { Sequelize } = require('sequelize');
const sequelize = require('../database');

const Dosen = sequelize.define('dosen', {
    id_dosen: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    fakultas: { type: Sequelize.STRING(100), allowNull: true },
    nama_dosen: { type: Sequelize.STRING(100), allowNull: false },
    nidn: { type: Sequelize.STRING(20), allowNull: false, unique: true },
    email: { type: Sequelize.STRING(100), allowNull: false, unique: true },
}, {
    comment: "This is the table for all dosen",
    freezeTableName: true,
    tableName: 'dosen',
});

module.exports = Dosen;