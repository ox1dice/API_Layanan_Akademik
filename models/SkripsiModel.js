'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const Skripsi = sequelize.define('skripsi', {
    id_skripsi: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    status_skripsi: { type: DataTypes.STRING },
    id_dosen: { type: DataTypes.INTEGER },
    judul_skripsi: { type: DataTypes.STRING },
    id_mahasiswa: { type: DataTypes.INTEGER }
}, {
    tableName: 'skripsi',
    timestamps: false,
});

module.exports = Skripsi;