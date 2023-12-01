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
/**
 * Create a new Fasilitas
 * Creates a new Fasilitas data
 *
 * body Fasilitas 
 * returns Fasilitas
 **/
// exports.add_fasilitas = function(body) {
//   return new Promise(function(resolve, reject) {
//     var examples = {};
//     examples['application/json'] = {
//   "nama_fasilitas" : "",
//   "id_fasilitas" : "",
//   "status_fasilitas" : "",
//   "kapasitas_fasilitas" : "",
//   "deskripsi_fasilitas" : ""
// };
//     if (Object.keys(examples).length > 0) {
//       resolve(examples[Object.keys(examples)[0]]);
//     } else {
//       resolve();
//     }
//   });
// }


// /**
//  * Delete a Fasilitas by ID
//  * Deletes a single Fasilitas by ID
//  *
//  * id_fasilitas  ID of Fasilitas to retrieve
//  * no response value expected for this operation
//  **/
// exports.delete_fasilitas = function(id_fasilitas) {
//   return new Promise(function(resolve, reject) {
//     resolve();
//   });
// }


// /**
//  * Get All Fasilitas
//  * Retrieves all Fasilitas's data
//  *
//  * no response value expected for this operation
//  **/
// exports.get_all_fasilitas = function() {
//   return new Promise(function(resolve, reject) {
//     resolve();
//   });
// }


// /**
//  * Get a Fasilitas by ID
//  * Retrieves a single Fasilitas data by ID
//  *
//  * id_fasilitas  ID of Fasilitas to retrieve
//  * returns Fasilitas
//  **/
// exports.get_fasilitas = function(id_fasilitas) {
//   return new Promise(function(resolve, reject) {
//     var examples = {};
//     examples['application/json'] = {
//   "nama_fasilitas" : "",
//   "id_fasilitas" : "",
//   "status_fasilitas" : "",
//   "kapasitas_fasilitas" : "",
//   "deskripsi_fasilitas" : ""
// };
//     if (Object.keys(examples).length > 0) {
//       resolve(examples[Object.keys(examples)[0]]);
//     } else {
//       resolve();
//     }
//   });
// }


// /**
//  * Update a Fasilitas by ID
//  * Update a single Fasilitas's data by ID
//  *
//  * body Fasilitas 
//  * id_fasilitas  ID of Fasilitas to retrieve
//  * returns Fasilitas
//  **/
// exports.update_fasilitas = function(body,id_fasilitas) {
//   return new Promise(function(resolve, reject) {
//     var examples = {};
//     examples['application/json'] = {
//   "nama_fasilitas" : "",
//   "id_fasilitas" : "",
//   "status_fasilitas" : "",
//   "kapasitas_fasilitas" : "",
//   "deskripsi_fasilitas" : ""
// };
//     if (Object.keys(examples).length > 0) {
//       resolve(examples[Object.keys(examples)[0]]);
//     } else {
//       resolve();
//     }
//   });
// }

