const Mahasiswa = require('../models/MahasiswaModel');

module.exports = {
    createMahasiswa: async (mahasiswaData) => {
        try {
            const createdMahasiswa = await Mahasiswa.create(mahasiswaData);
            return { success: true, result: createdMahasiswa };
        } catch (error) {
            return { success: false, result: error.message };
        }
    },

    findMahasiswaById: async (id) => {
        try {
            const foundMahasiswa = await Mahasiswa.findByPk(id);
            if (!foundMahasiswa) {
                return { success: false, result: 'Mahasiswa not found' };
            }
            return { success: true, result: foundMahasiswa };
        } catch (error) {
            return { success: false, result: error.message };
        }
    },

    updateMahasiswaById: async (id, mahasiswaData) => {
        try {
            const [updatedRowsCount, updatedMahasiswa] = await Mahasiswa.update(mahasiswaData, { where: { id: id } });
            if (updatedRowsCount === 0) {
                return { success: false, result: 'Mahasiswa not found or no changes applied' };
            }
            return { success: true, result: updatedMahasiswa };
        } catch (error) {
            return { success: false, result: error.message };
        }
    },

    deleteMahasiswaById: async (id) => {
        try {
            const deletedRowCount = await Mahasiswa.destroy({ where: { id: id } });
            if (deletedRowCount === 0) {
                return { success: false, result: 'Mahasiswa not found' };
            }
            return { success: true, result: 'Mahasiswa deleted successfully' };
        } catch (error) {
            return { success: false, result: error.message };
        }
    },

    getAllMahasiswa: async () => {
        try {
            const allMahasiswa = await Mahasiswa.findAll();
            return { success: true, result: allMahasiswa };
        } catch (error) {
            return { success: false, result: error.message };
        }
    }
};