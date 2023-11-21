const PengajuanSkripsi = require('../models/PengajuanSkripsiModel');

module.exports = {
    createPengajuanSkripsi: async (pengajuanData) => {
        try {
            const createdPengajuan = await PengajuanSkripsi.create(pengajuanData);
            return { success: true, result: createdPengajuan };
        } catch (error) {
            return { success: false, result: error.message };
        }
    },

    findPengajuanSkripsiById: async (id) => {
        try {
            const foundPengajuan = await PengajuanSkripsi.findByPk(id);
            if (!foundPengajuan) {
                return { success: false, result: 'Pengajuan Skripsi not found' };
            }
            return { success: true, result: foundPengajuan };
        } catch (error) {
            return { success: false, result: error.message };
        }
    },

    updatePengajuanSkripsiById: async (id, pengajuanData) => {
        try {
            const [updatedRowsCount, updatedPengajuan] = await PengajuanSkripsi.update(pengajuanData, { where: { id: id } });
            if (updatedRowsCount === 0) {
                return { success: false, result: 'Pengajuan Skripsi not found or no changes applied' };
            }
            return { success: true, result: updatedPengajuan };
        } catch (error) {
            return { success: false, result: error.message };
        }
    },

    deletePengajuanSkripsiById: async (id) => {
        try {
            const deletedRowCount = await PengajuanSkripsi.destroy({ where: { id: id } });
            if (deletedRowCount === 0) {
                return { success: false, result: 'Pengajuan Skripsi not found' };
            }
            return { success: true, result: 'Pengajuan Skripsi deleted successfully' };
        } catch (error) {
            return { success: false, result: error.message };
        }
    },

    getAllPengajuanSkripsi: async () => {
        try {
            const allPengajuan = await PengajuanSkripsi.findAll();
            return { success: true, result: allPengajuan };
        } catch (error) {
            return { success: false, result: error.message };
        }
    }
};