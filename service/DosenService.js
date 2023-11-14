'use strict';


/**
 * Create a new Dosen
 * Creates a new Dosen data
 *
 * body Dosen 
 * returns Dosen
 **/
exports.add_dosen = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id_dosen" : "",
  "fakultas" : "",
  "nama_dosen" : "",
  "nidn" : "",
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
 * Delete Dosen by ID
 * Deletes a single Dosen by ID
 *
 * id_dosen  ID of Dosen to delete
 * no response value expected for this operation
 **/
exports.delete_dosen = function(id_dosen) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get All Dosen
 * Retrieves all Dosen's data
 *
 * no response value expected for this operation
 **/
exports.get_all_dosen = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get Dosen by ID
 * Retrieves a single Dosen data by ID
 *
 * id_dosen  ID of Dosen to retrieve
 * returns Dosen
 **/
exports.get_dosen = function(id_dosen) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id_dosen" : "",
  "fakultas" : "",
  "nama_dosen" : "",
  "nidn" : "",
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
 * Update Dosen by ID
 * Update a single Dosen's data by ID
 *
 * body Dosen 
 * id_dosen  ID of Dosen to update
 * returns Dosen
 **/
exports.update_dosen = function(body,id_dosen) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id_dosen" : "",
  "fakultas" : "",
  "nama_dosen" : "",
  "nidn" : "",
  "email" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

