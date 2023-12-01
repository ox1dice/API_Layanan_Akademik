const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const Mahasiswa = sequelize.define('Mahasiswa', {
    id_mahasiswa: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
    fakultas: { type: DataTypes.STRING(100), allowNull: false },
    nim: { type: DataTypes.STRING(20), allowNull: false, unique: true },
    nama_mahasiswa: { type: DataTypes.STRING(100), allowNull: false },
    angkatan: { type: DataTypes.INTEGER, allowNull: false },
    jurusan: { type: DataTypes.STRING(100), allowNull: false },
    email: { type: DataTypes.STRING(100), allowNull: false, unique: true },
}, {
    tableName: 'mahasiswa',
    comment: 'Table for Mahasiswa data',
    timestamps: false,
});

module.exports = Mahasiswa;