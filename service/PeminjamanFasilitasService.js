'use strict';


/**
 * Create a new Peminjaman Fasilitas
 * Creates a new Peminjaman Fasilitas data
 *
 * body PeminjamanFasilitas 
 * no response value expected for this operation
 **/
exports.add_peminjaman_fasilitas = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get All Peminjaman Fasilitas
 * Retrieves all Peminjaman Fasilitas's data
 *
 * no response value expected for this operation
 **/
exports.get_all_peminjaman_fasilitas = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a Peminjaman Fasilitas by ID
 * Retrieves a single Peminjaman Fasilitas data by ID
 *
 * id_peminjaman  ID of Peminjaman Fasilitas to retrieve
 * returns PeminjamanFasilitas
 **/
exports.get_peminjaman_fasilitas = function(id_peminjaman) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id_peminjaman" : "",
  "id_fasilitas" : "",
  "id_mahasiswa" : "",
  "status_peminjaman" : "",
  "tanggal_pengembalian" : "",
  "tanggal_peminjaman" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a Peminjaman Fasilitas by ID
 * Update a single Peminjaman Fasilitas's data by ID
 *
 * body PeminjamanFasilitas 
 * id_peminjaman  ID of Peminjaman Fasilitas to update
 * returns PeminjamanFasilitas
 **/
exports.update_peminjaman_fasilitas = function(body,id_peminjaman) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id_peminjaman" : "",
  "id_fasilitas" : "",
  "id_mahasiswa" : "",
  "status_peminjaman" : "",
  "tanggal_pengembalian" : "",
  "tanggal_peminjaman" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

