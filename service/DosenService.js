
const Dosen = require('../models/DosenModel');

module.exports = {
  create: async (data) => {
    try {
        let dosen = new Dosen(data);
        let result = await dosen.save();
        return { success: true, result: result };
    } catch (err) {
        return { success: false, result: err };
    }
},
  
  getAll: async () => {
      try {
          let dosen = await Dosen.findAll();
          return { success: true, result: dosen };
      } catch (err) {
          return { success: false, result: err };
      }
  },

  deleteById: async (id) => {
    try {
      const deletedDosen = await Dosen.destroy({
        where: { id_dosen: id }
      });

      if (deletedDosen > 0) {
        return { success: true, result: 'Dosen deleted successfully' };
      } else {
        return { success: false, result: 'Dosen not found' };
      }
    } catch (err) {
      return { success: false, result: err.message };
    }
  },

    getById: async (id) => {
      try {
          let dosen = await Dosen.findOne({
              where: { id_dosen: id }
          });

          if (dosen) {
              return { success: true, result: dosen };
          } else {
              return { success: false, result: 'Dosen not found' };
          }
      } catch (err) {
          return { success: false, result: err };
      }
  },

    updateById: async (id, data) => {
      try {
          let dosen = await Dosen.update(data, {
              where: { id_dosen: id }
          });
          return { success: true, result: dosen };
      } catch (err) {
          return { success: false, result: err };
      }
  }



};


