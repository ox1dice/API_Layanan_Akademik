'use strict';

var utils = require('../utils/writer.js');
var PeminjamanFasilitas = require('../service/PeminjamanFasilitasService');

module.exports.add_peminjaman_fasilitas = function add_peminjaman_fasilitas (req, res, next, body) {
  PeminjamanFasilitas.add_peminjaman_fasilitas(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_all_peminjaman_fasilitas = function get_all_peminjaman_fasilitas (req, res, next) {
  PeminjamanFasilitas.get_all_peminjaman_fasilitas()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_peminjaman_fasilitas = function get_peminjaman_fasilitas (req, res, next, id_peminjaman) {
  PeminjamanFasilitas.get_peminjaman_fasilitas(id_peminjaman)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.update_peminjaman_fasilitas = function update_peminjaman_fasilitas (req, res, next, body, id_peminjaman) {
  PeminjamanFasilitas.update_peminjaman_fasilitas(body, id_peminjaman)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
