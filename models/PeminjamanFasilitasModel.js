const { Sequelize } = require('sequelize');
const sequelize = require('../database');

const PeminjamanFasilitas = sequelize.define('peminjaman_fasilitas', {
    id_peminjaman: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    id_fasilitas: { type: Sequelize.INTEGER, allowNull: false },
    id_mahasiswa: { type: Sequelize.INTEGER, allowNull: false },
    status_peminjaman: { type: Sequelize.STRING, allowNull: false },
    tanggal_pengembalian: { type: Sequelize.DATE },
    tanggal_peminjaman: { type: Sequelize.DATE },
}, {
    comment: "This is the table for peminjaman fasilitas",
    freezeTableName: true,
    tableName: 'peminjaman_fasilitas',
    timestamps: false,
});

module.exports = PeminjamanFasilitas;