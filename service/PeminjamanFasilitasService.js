const Peminjaman = require('../models/PeminjamanFasilitasModel');

module.exports = {
  create: async (data) => {
    try {
        let peminjaman = new Peminjaman(data);
        let result = await peminjaman.save();
        return { success: true, result: result };
    } catch (err) {
        return { success: false, result: err };
    }
},
  
  getAll: async () => {
      try {
          let peminjaman = await Peminjaman.findAll();
          return { success: true, result: peminjaman };
      } catch (err) {
          return { success: false, result: err };
      }
  },

  deleteById: async (id) => {
    try {
      const deletedpeminjaman = await Peminjaman.destroy({
        where: { id_peminjaman: id }
      });

      if (deletedpeminjaman > 0) {
        return { success: true, result: 'peminjaman deleted successfully' };
      } else {
        return { success: false, result: 'peminjaman not found' };
      }
    } catch (err) {
      return { success: false, result: err.message };
    }
  },

    getById: async (id) => {
      try {
          let peminjaman = await Peminjaman.findOne({
              where: { id_peminjaman: id }
          });

          if (peminjaman) {
              return { success: true, result: peminjaman };
          } else {
              return { success: false, result: 'peminjaman not found' };
          }
      } catch (err) {
          return { success: false, result: err };
      }
  },

    updateById: async (id, data) => {
      try {
          let peminjaman = await Peminjaman.update(data, {
              where: { id_peminjaman: id }
          });
          return { success: true, result: peminjaman };
      } catch (err) {
          return { success: false, result: err };
      }
  }

};