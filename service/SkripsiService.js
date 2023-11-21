const Skripsi = require('../models/SkripsiModel');

module.exports = {
    createSkripsi: async (skripsiData) => {
        try {
            const createdSkripsi = await Skripsi.create(skripsiData);
            return { success: true, result: createdSkripsi };
        } catch (error) {
            return { success: false, result: error.message };
        }
    },

    findSkripsiById: async (id) => {
        try {
            const foundSkripsi = await Skripsi.findByPk(id);
            if (!foundSkripsi) {
                return { success: false, result: 'Skripsi not found' };
            }
            return { success: true, result: foundSkripsi };
        } catch (error) {
            return { success: false, result: error.message };
        }
    },

    updateSkripsiById: async (id, skripsiData) => {
        try {
            const [updatedRowsCount, updatedSkripsi] = await Skripsi.update(skripsiData, { where: { id: id } });
            if (updatedRowsCount === 0) {
                return { success: false, result: 'Skripsi not found or no changes applied' };
            }
            return { success: true, result: updatedSkripsi };
        } catch (error) {
            return { success: false, result: error.message };
        }
    },

    deleteSkripsiById: async (id) => {
        try {
            const deletedRowCount = await Skripsi.destroy({ where: { id: id } });
            if (deletedRowCount === 0) {
                return { success: false, result: 'Skripsi not found' };
            }
            return { success: true, result: 'Skripsi deleted successfully' };
        } catch (error) {
            return { success: false, result: error.message };
        }
    },

    getAllSkripsi: async () => {
        try {
            const allSkripsi = await Skripsi.findAll();
            return { success: true, result: allSkripsi };
        } catch (error) {
            return { success: false, result: error.message };
        }
    }
};