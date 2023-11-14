'use strict';

var utils = require('../utils/writer.js');
var Mahasiswa = require('../service/MahasiswaService');

module.exports.add_mahasiswa = function add_mahasiswa (req, res, next, body) {
  Mahasiswa.add_mahasiswa(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.delete_mahasiswa = function delete_mahasiswa (req, res, next, id_mahasiswa) {
  Mahasiswa.delete_mahasiswa(id_mahasiswa)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_all_mahasiswa = function get_all_mahasiswa (req, res, next) {
  Mahasiswa.get_all_mahasiswa()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_mahasiswa = function get_mahasiswa (req, res, next, id_mahasiswa) {
  Mahasiswa.get_mahasiswa(id_mahasiswa)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.update_mahasiswa = function update_mahasiswa (req, res, next, body, id_mahasiswa) {
  Mahasiswa.update_mahasiswa(body, id_mahasiswa)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
