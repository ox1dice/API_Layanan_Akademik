const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const Fasilitas = sequelize.define('Fasilitas', {
    id_fasilitas: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    nama_fasilitas: { type: DataTypes.STRING(255), allowNull: false },
    status_fasilitas: { type: DataTypes.STRING(50), allowNull: true },
    kapasitas_fasilitas: { type: DataTypes.INTEGER, allowNull: true },
    deskripsi_fasilitas: { type: DataTypes.TEXT, allowNull: true }
}, {
    tableName: 'fasilitas',
    underscored: true,
});

module.exports = Fasilitas;
