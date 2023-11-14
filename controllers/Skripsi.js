'use strict';

var utils = require('../utils/writer.js');
var Skripsi = require('../service/SkripsiService');

module.exports.add_skripsi = function add_skripsi (req, res, next, body) {
  Skripsi.add_skripsi(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.delete_skripsi = function delete_skripsi (req, res, next, id_skripsi) {
  Skripsi.delete_skripsi(id_skripsi)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_all_skripsi = function get_all_skripsi (req, res, next) {
  Skripsi.get_all_skripsi()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_skripsi = function get_skripsi (req, res, next, id_skripsi) {
  Skripsi.get_skripsi(id_skripsi)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.update_skripsi = function update_skripsi (req, res, next, body, id_skripsi) {
  Skripsi.update_skripsi(body, id_skripsi)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
