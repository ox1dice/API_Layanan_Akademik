'use strict';


/**
 * Create a new Skripsi
 * Creates a new Skripsi data
 *
 * body Skripsi 
 * returns Skripsi
 **/
exports.add_skripsi = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "status_skripsi" : "",
  "id_dosen" : "",
  "id_skripsi" : "",
  "judul_skripsi" : "",
  "id_mahasiswa" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a Skripsi by ID
 * Deletes a single Skripsi by ID
 *
 * id_skripsi  ID of Skripsi to retrieve
 * no response value expected for this operation
 **/
exports.delete_skripsi = function(id_skripsi) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get All Skripsi
 * Retrieves all Skripsi's data
 *
 * no response value expected for this operation
 **/
exports.get_all_skripsi = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a Skripsi by ID
 * Retrieves a single Skripsi data by ID
 *
 * id_skripsi  ID of Skripsi to retrieve
 * returns Skripsi
 **/
exports.get_skripsi = function(id_skripsi) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "status_skripsi" : "",
  "id_dosen" : "",
  "id_skripsi" : "",
  "judul_skripsi" : "",
  "id_mahasiswa" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a Skripsi by ID
 * Update a single Skripsi's data by ID
 *
 * body Skripsi 
 * id_skripsi  ID of Skripsi to retrieve
 * returns Skripsi
 **/
exports.update_skripsi = function(body,id_skripsi) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "status_skripsi" : "",
  "id_dosen" : "",
  "id_skripsi" : "",
  "judul_skripsi" : "",
  "id_mahasiswa" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

