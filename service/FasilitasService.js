'use strict';


/**
 * Create a new Fasilitas
 * Creates a new Fasilitas data
 *
 * body Fasilitas 
 * returns Fasilitas
 **/
exports.add_fasilitas = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "nama_fasilitas" : "",
  "id_fasilitas" : "",
  "status_fasilitas" : "",
  "kapasitas_fasilitas" : "",
  "deskripsi_fasilitas" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a Fasilitas by ID
 * Deletes a single Fasilitas by ID
 *
 * id_fasilitas  ID of Fasilitas to retrieve
 * no response value expected for this operation
 **/
exports.delete_fasilitas = function(id_fasilitas) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get All Fasilitas
 * Retrieves all Fasilitas's data
 *
 * no response value expected for this operation
 **/
exports.get_all_fasilitas = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a Fasilitas by ID
 * Retrieves a single Fasilitas data by ID
 *
 * id_fasilitas  ID of Fasilitas to retrieve
 * returns Fasilitas
 **/
exports.get_fasilitas = function(id_fasilitas) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "nama_fasilitas" : "",
  "id_fasilitas" : "",
  "status_fasilitas" : "",
  "kapasitas_fasilitas" : "",
  "deskripsi_fasilitas" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a Fasilitas by ID
 * Update a single Fasilitas's data by ID
 *
 * body Fasilitas 
 * id_fasilitas  ID of Fasilitas to retrieve
 * returns Fasilitas
 **/
exports.update_fasilitas = function(body,id_fasilitas) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "nama_fasilitas" : "",
  "id_fasilitas" : "",
  "status_fasilitas" : "",
  "kapasitas_fasilitas" : "",
  "deskripsi_fasilitas" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

