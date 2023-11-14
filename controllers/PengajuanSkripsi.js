'use strict';

var utils = require('../utils/writer.js');
var PengajuanSkripsi = require('../service/PengajuanSkripsiService');

module.exports.add_pengajuan_skripsi = function add_pengajuan_skripsi (req, res, next, body) {
  PengajuanSkripsi.add_pengajuan_skripsi(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_all_pengajuan_skripsi = function get_all_pengajuan_skripsi (req, res, next) {
  PengajuanSkripsi.get_all_pengajuan_skripsi()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_pengajuan_skripsi = function get_pengajuan_skripsi (req, res, next, id_pengajuan) {
  PengajuanSkripsi.get_pengajuan_skripsi(id_pengajuan)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.update_pengajuan_skripsi = function update_pengajuan_skripsi (req, res, next, body, id_pengajuan) {
  PengajuanSkripsi.update_pengajuan_skripsi(body, id_pengajuan)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
