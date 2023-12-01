const Pengajuan = require('../models/PengajuanSkripsiModel');

module.exports = {
  create: async (data) => {
    try {
        let pengajuan = new Pengajuan(data);
        let result = await pengajuan.save();
        return { success: true, result: result };
    } catch (err) {
        return { success: false, result: err };
    }
},
  
  getAll: async () => {
      try {
          let pengajuan = await Pengajuan.findAll();
          return { success: true, result: pengajuan };
      } catch (err) {
          return { success: false, result: err };
      }
  },

  deleteById: async (id) => {
    try {
      const deletedpengajuan = await Pengajuan.destroy({
        where: { id_pengajuan: id }
      });

      if (deletedpengajuan > 0) {
        return { success: true, result: 'pengajuan deleted successfully' };
      } else {
        return { success: false, result: 'pengajuan not found' };
      }
    } catch (err) {
      return { success: false, result: err.message };
    }
  },

    getById: async (id) => {
      try {
          let pengajuan = await Pengajuan.findOne({
              where: { id_pengajuan: id }
          });

          if (pengajuan) {
              return { success: true, result: pengajuan };
          } else {
              return { success: false, result: 'pengajuan not found' };
          }
      } catch (err) {
          return { success: false, result: err };
      }
  },

    updateById: async (id, data) => {
      try {
          let pengajuan = await Pengajuan.update(data, {
              where: { id_pengajuan: id }
          });
          return { success: true, result: pengajuan };
      } catch (err) {
          return { success: false, result: err };
      }
  }

};