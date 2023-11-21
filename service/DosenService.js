const Dosen = require('../models/DosenModel');

module.exports = {
    createDosen: async (dosenData) => {
        try {
            const createdDosen = await Dosen.create(dosenData);
            return { success: true, result: createdDosen };
        } catch (error) {
            return { success: false, result: error.message };
        }
    },

    findDosenByEmail: async (email) => {
        try {
            const foundDosen = await Dosen.findOne({ where: { email: email } });
            if (!foundDosen) {
                return { success: false, result: 'Dosen not found' };
            }
            return { success: true, result: foundDosen };
        } catch (error) {
            return { success: false, result: error.message };
        }
    },

    updateDosenById: async (id, dosenData) => {
        try {
            const [updatedRowsCount, updatedDosen] = await Dosen.update(dosenData, { where: { id: id } });
            if (updatedRowsCount === 0) {
                return { success: false, result: 'Dosen not found or no changes applied' };
            }
            return { success: true, result: updatedDosen };
        } catch (error) {
            return { success: false, result: error.message };
        }
    },

    deleteDosenById: async (id) => {
        try {
            const deletedRowCount = await Dosen.destroy({ where: { id: id } });
            if (deletedRowCount === 0) {
                return { success: false, result: 'Dosen not found' };
            }
            return { success: true, result: 'Dosen deleted successfully' };
        } catch (error) {
            return { success: false, result: error.message };
        }
    },

    getAllDosen: async () => {
        try {
            const allDosen = await Dosen.findAll();
            return { success: true, result: allDosen };
        } catch (error) {
            return { success: false, result: error.message };
        }
    }
};