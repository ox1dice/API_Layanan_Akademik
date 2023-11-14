'use strict';


/**
 * Create a new Pengajuan Skripsi
 * Creates a new Pengajuan Skripsi data
 *
 * body PengajuanSkripsi 
 * no response value expected for this operation
 **/
exports.add_pengajuan_skripsi = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get All Pengajuan Skripsi
 * Retrieves all Pengajuan Skripsi's data
 *
 * no response value expected for this operation
 **/
exports.get_all_pengajuan_skripsi = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a Pengajuan Skripsi by ID
 * Retrieves a single Pengajuan Skripsi data by ID
 *
 * id_pengajuan  ID of Pengajuan Skripsi to retrieve
 * returns PengajuanSkripsi
 **/
exports.get_pengajuan_skripsi = function(id_pengajuan) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id_pengajuan" : "",
  "id_skripsi" : "",
  "status_pengajuan" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a Pengajuan Skripsi by ID
 * Update a single Pengajuan Skripsi's data by ID
 *
 * body PengajuanSkripsi 
 * id_pengajuan  ID of Pengajuan Skripsi to update
 * returns PengajuanSkripsi
 **/
exports.update_pengajuan_skripsi = function(body,id_pengajuan) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id_pengajuan" : "",
  "id_skripsi" : "",
  "status_pengajuan" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

