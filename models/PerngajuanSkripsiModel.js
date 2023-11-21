const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const PengajuanSkripsi = sequelize.define('PengajuanSkripsi', {
    id_pengajuan: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    id_skripsi: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status_pengajuan: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'PengajuanSkripsi', // Nama tabel di database
    timestamps: false // Untuk menonaktifkan kolom createdAt dan updatedAt
});

module.exports = PengajuanSkripsi;