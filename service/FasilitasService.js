const Fasilitas = require('../models/FasilitasModel');

module.exports = {
    createFasilitas: async (fasilitasData) => {
        try {
            const createdFasilitas = await Fasilitas.create(fasilitasData);
            return { success: true, result: createdFasilitas };
        } catch (error) {
            return { success: false, result: error.message };
        }
    },

    findFasilitasById: async (id) => {
        try {
            const foundFasilitas = await Fasilitas.findByPk(id);
            if (!foundFasilitas) {
                return { success: false, result: 'Fasilitas not found' };
            }
            return { success: true, result: foundFasilitas };
        } catch (error) {
            return { success: false, result: error.message };
        }
    },

    updateFasilitasById: async (id, fasilitasData) => {
        try {
            const [updatedRowsCount, updatedFasilitas] = await Fasilitas.update(fasilitasData, { where: { id: id } });
            if (updatedRowsCount === 0) {
                return { success: false, result: 'Fasilitas not found or no changes applied' };
            }
            return { success: true, result: updatedFasilitas };
        } catch (error) {
            return { success: false, result: error.message };
        }
    },

    deleteFasilitasById: async (id) => {
        try {
            const deletedRowCount = await Fasilitas.destroy({ where: { id: id } });
            if (deletedRowCount === 0) {
                return { success: false, result: 'Fasilitas not found' };
            }
            return { success: true, result: 'Fasilitas deleted successfully' };
        } catch (error) {
            return { success: false, result: error.message };
        }
    },

    getAllFasilitas: async () => {
        try {
            const allFasilitas = await Fasilitas.findAll();
            return { success: true, result: allFasilitas };
        } catch (error) {
            return { success: false, result: error.message };
        }
    }
};