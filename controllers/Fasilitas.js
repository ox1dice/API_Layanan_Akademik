'use strict';

var utils = require('../utils/writer.js');
var Fasilitas = require('../service/FasilitasService');

module.exports.add_fasilitas = function add_fasilitas (req, res, next, body) {
  Fasilitas.add_fasilitas(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.delete_fasilitas = function delete_fasilitas (req, res, next, id_fasilitas) {
  Fasilitas.delete_fasilitas(id_fasilitas)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_all_fasilitas = function get_all_fasilitas (req, res, next) {
  Fasilitas.get_all_fasilitas()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_fasilitas = function get_fasilitas (req, res, next, id_fasilitas) {
  Fasilitas.get_fasilitas(id_fasilitas)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.update_fasilitas = function update_fasilitas (req, res, next, body, id_fasilitas) {
  Fasilitas.update_fasilitas(body, id_fasilitas)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
