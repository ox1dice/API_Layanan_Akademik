const PeminjamanFasilitas = require('../models/PeminjamanFasilitasModel');

module.exports = {
    createPeminjamanFasilitas: async (peminjamanData) => {
        try {
            const createdPeminjaman = await PeminjamanFasilitas.create(peminjamanData);
            return { success: true, result: createdPeminjaman };
        } catch (error) {
            return { success: false, result: error.message };
        }
    },

    findPeminjamanFasilitasById: async (id) => {
        try {
            const foundPeminjaman = await PeminjamanFasilitas.findByPk(id);
            if (!foundPeminjaman) {
                return { success: false, result: 'Peminjaman Fasilitas not found' };
            }
            return { success: true, result: foundPeminjaman };
        } catch (error) {
            return { success: false, result: error.message };
        }
    },

    updatePeminjamanFasilitasById: async (id, peminjamanData) => {
        try {
            const [updatedRowsCount, updatedPeminjaman] = await PeminjamanFasilitas.update(peminjamanData, { where: { id: id } });
            if (updatedRowsCount === 0) {
                return { success: false, result: 'Peminjaman Fasilitas not found or no changes applied' };
            }
            return { success: true, result: updatedPeminjaman };
        } catch (error) {
            return { success: false, result: error.message };
        }
    },

    deletePeminjamanFasilitasById: async (id) => {
        try {
            const deletedRowCount = await PeminjamanFasilitas.destroy({ where: { id: id } });
            if (deletedRowCount === 0) {
                return { success: false, result: 'Peminjaman Fasilitas not found' };
            }
            return { success: true, result: 'Peminjaman Fasilitas deleted successfully' };
        } catch (error) {
            return { success: false, result: error.message };
        }
    },

    getAllPeminjamanFasilitas: async () => {
        try {
            const allPeminjaman = await PeminjamanFasilitas.findAll();
            return { success: true, result: allPeminjaman };
        } catch (error) {
            return { success: false, result: error.message };
        }
    }
};