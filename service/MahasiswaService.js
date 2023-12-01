const Mahasiswa = require('../models/MahasiswaModel');

module.exports = {
  create: async (data) => {
    try {
        let mahasiswa = new Mahasiswa(data);
        let result = await mahasiswa.save();
        return { success: true, result: result };
    } catch (err) {
        return { success: false, result: err };
    }
},
  
  getAll: async () => {
      try {
          let mahasiswa = await Mahasiswa.findAll();
          return { success: true, result: mahasiswa };
      } catch (err) {
          return { success: false, result: err };
      }
  },

  deleteById: async (id) => {
    try {
      const deletedmahasiswa = await Mahasiswa.destroy({
        where: { id_mahasiswa: id }
      });

      if (deletedmahasiswa > 0) {
        return { success: true, result: 'mahasiswa deleted successfully' };
      } else {
        return { success: false, result: 'mahasiswa not found' };
      }
    } catch (err) {
      return { success: false, result: err.message };
    }
  },

    getById: async (id) => {
      try {
          let mahasiswa = await Mahasiswa.findOne({
              where: { id_mahasiswa: id }
          });

          if (mahasiswa) {
              return { success: true, result: mahasiswa };
          } else {
              return { success: false, result: 'mahasiswa not found' };
          }
      } catch (err) {
          return { success: false, result: err };
      }
  },

    updateById: async (id, data) => {
      try {
          let mahasiswa = await Mahasiswa.update(data, {
              where: { id_mahasiswa: id }
          });
          return { success: true, result: mahasiswa };
      } catch (err) {
          return { success: false, result: err };
      }
  }

};