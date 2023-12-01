const Skripsi = require('../models/SkripsiModel');

module.exports = {
  create: async (data) => {
    try {
        let skripsi = new Skripsi(data);
        let result = await skripsi.save();
        return { success: true, result: result };
    } catch (err) {
        return { success: false, result: err };
    }
},
  
  getAll: async () => {
      try {
          let skripsi = await Skripsi.findAll();
          return { success: true, result: skripsi };
      } catch (err) {
          return { success: false, result: err };
      }
  },

  deleteById: async (id) => {
    try {
      const deletedskripsi = await Skripsi.destroy({
        where: { id_skripsi: id }
      });

      if (deletedskripsi > 0) {
        return { success: true, result: 'skripsi deleted successfully' };
      } else {
        return { success: false, result: 'skripsi not found' };
      }
    } catch (err) {
      return { success: false, result: err.message };
    }
  },

    getById: async (id) => {
      try {
          let skripsi = await Skripsi.findOne({
              where: { id_skripsi: id }
          });

          if (skripsi) {
              return { success: true, result: Skripsi };
          } else {
              return { success: false, result: 'skripsi not found' };
          }
      } catch (err) {
          return { success: false, result: err };
      }
  },

    updateById: async (id, data) => {
      try {
          let skripsi = await Skripsi.update(data, {
              where: { id_skripsi: id }
          });
          return { success: true, result: skripsi };
      } catch (err) {
          return { success: false, result: err };
      }
  }

};