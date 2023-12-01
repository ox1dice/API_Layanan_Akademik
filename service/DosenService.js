
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
// updateById: async (id, data) => {
//   try {
//     const [updatedRowsCount] = await Dosen.update(data, {
//       where: { id_dosen: id }
//     });

//     if (updatedRowsCount > 0) {
//       // Jika updatedRowsCount lebih besar dari 0, berarti ada baris yang diperbarui
//       const updatedDosen = await Dosen.findOne({ where: { id_dosen: id } });
//       return { success: true, result: updatedDosen };
//     } else {
//       // Tidak ada baris yang diperbarui
//       return { success: false, result: 'Dosen not found or no updates performed' };
//     }
//   } catch (err) {
//     return { success: false, result: err.message || 'Internal Server Error' };
//   }
// }


};
/**
 * Create a new Dosen
 * Creates a new Dosen data
 *
 * body Dosen 
 * returns Dosen
 **/
// exports.add_dosen = function(body) {
//   return new Promise(function(resolve, reject) {
//     var examples = {};
//     examples['application/json'] = {
//   "id_dosen" : "",
//   "fakultas" : "",
//   "nama_dosen" : "",
//   "nidn" : "",
//   "email" : ""
// };
//     if (Object.keys(examples).length > 0) {
//       resolve(examples[Object.keys(examples)[0]]);
//     } else {
//       resolve();
//     }
//   });
// }


// /**
//  * Delete Dosen by ID
//  * Deletes a single Dosen by ID
//  *
//  * id_dosen  ID of Dosen to delete
//  * no response value expected for this operation
//  **/
// exports.delete_dosen = function(id_dosen) {
//   return new Promise(function(resolve, reject) {
//     resolve();
//   });
// }


// /**
//  * Get All Dosen
//  * Retrieves all Dosen's data
//  *
//  * no response value expected for this operation
//  **/
// exports.get_all_dosen = function() {
//   return new Promise(function(resolve, reject) {
//     resolve();
//   });
// }


// /**
//  * Get Dosen by ID
//  * Retrieves a single Dosen data by ID
//  *
//  * id_dosen  ID of Dosen to retrieve
//  * returns Dosen
//  **/
// exports.get_dosen = function(id_dosen) {
//   return new Promise(function(resolve, reject) {
//     var examples = {};
//     examples['application/json'] = {
//   "id_dosen" : "",
//   "fakultas" : "",
//   "nama_dosen" : "",
//   "nidn" : "",
//   "email" : ""
// };
//     if (Object.keys(examples).length > 0) {
//       resolve(examples[Object.keys(examples)[0]]);
//     } else {
//       resolve();
//     }
//   });
// }


/**
 * Update Dosen by ID
 * Update a single Dosen's data by ID
 *
 * body Dosen 
 * id_dosen  ID of Dosen to update
 * returns Dosen
 **/
// exports.update_dosen = function(body,id_dosen) {
//   return new Promise(function(resolve, reject) {
//     var examples = {};
//     examples['application/json'] = {
//   "id_dosen" : "",
//   "fakultas" : "",
//   "nama_dosen" : "",
//   "nidn" : "",
//   "email" : ""
// };
//     if (Object.keys(examples).length > 0) {
//       resolve(examples[Object.keys(examples)[0]]);
//     } else {
//       resolve();
//     }
//   });
// }

