const Fasilitas = require('../models/FasilitasModel');

module.exports = {
  create: async (data) => {
    try {
        let fasilitas = new Fasilitas(data);
        let result = await fasilitas.save();
        return { success: true, result: result };
    } catch (err) {
        return { success: false, result: err };
    }
},
  
  getAll: async () => {
      try {
          let fasilitas = await Fasilitas.findAll();
          return { success: true, result: fasilitas };
      } catch (err) {
          return { success: false, result: err };
      }
  },

  deleteById: async (id) => {
    try {
      const deletedfasilitas = await Fasilitas.destroy({
        where: { id_fasilitas: id }
      });

      if (deletedfasilitas > 0) {
        return { success: true, result: 'fasilitas deleted successfully' };
      } else {
        return { success: false, result: 'fasilitas not found' };
      }
    } catch (err) {
      return { success: false, result: err.message };
    }
  },

    getById: async (id) => {
      try {
          let fasilitas = await Fasilitas.findOne({
              where: { id_fasilitas: id }
          });

          if (fasilitas) {
              return { success: true, result: fasilitas };
          } else {
              return { success: false, result: 'fasilitas not found' };
          }
      } catch (err) {
          return { success: false, result: err };
      }
  },

    updateById: async (id, data) => {
      try {
          let fasilitas = await Fasilitas.update(data, {
              where: { id_fasilitas: id }
          });
          return { success: true, result: fasilitas };
      } catch (err) {
          return { success: false, result: err };
      }
  }

};
