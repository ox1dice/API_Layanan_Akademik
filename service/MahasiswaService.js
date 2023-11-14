'use strict';


/**
 * Create a new Mahasiswa
 * Creates a new Mahasiswa data
 *
 * body Mahasiswa 
 * returns Mahasiswa
 **/
exports.add_mahasiswa = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "fakultas" : "",
  "nim" : "",
  "nama_mahasiswa" : "",
  "angkatan" : "",
  "jurusan" : "",
  "id_mahasiswa" : "",
  "email" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete Mahasiswa by ID
 * Deletes a single Mahasiswa by ID
 *
 * id_mahasiswa  Mahasiswa's ID to delete
 * no response value expected for this operation
 **/
exports.delete_mahasiswa = function(id_mahasiswa) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get All Mahasiswa
 * Retrieves all Mahasiswa's data
 *
 * no response value expected for this operation
 **/
exports.get_all_mahasiswa = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get Mahasiswa by ID
 * Retrieves a single Mahasiswa data by ID
 *
 * id_mahasiswa  ID of Mahasiswa to retrieve
 * returns Mahasiswa
 **/
exports.get_mahasiswa = function(id_mahasiswa) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "fakultas" : "",
  "nim" : "",
  "nama_mahasiswa" : "",
  "angkatan" : "",
  "jurusan" : "",
  "id_mahasiswa" : "",
  "email" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update Mahasiswa by ID
 * Update a single Mahasiswa's data by ID
 *
 * body Mahasiswa 
 * id_mahasiswa  Mahasiswa's ID to update
 * returns Mahasiswa
 **/
exports.update_mahasiswa = function(body,id_mahasiswa) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "fakultas" : "",
  "nim" : "",
  "nama_mahasiswa" : "",
  "angkatan" : "",
  "jurusan" : "",
  "id_mahasiswa" : "",
  "email" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

