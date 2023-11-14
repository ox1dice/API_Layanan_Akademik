'use strict';

var utils = require('../utils/writer.js');
var Dosen = require('../service/DosenService');

module.exports.add_dosen = function add_dosen (req, res, next, body) {
  Dosen.add_dosen(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.delete_dosen = function delete_dosen (req, res, next, id_dosen) {
  Dosen.delete_dosen(id_dosen)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_all_dosen = function get_all_dosen (req, res, next) {
  Dosen.get_all_dosen()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_dosen = function get_dosen (req, res, next, id_dosen) {
  Dosen.get_dosen(id_dosen)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.update_dosen = function update_dosen (req, res, next, body, id_dosen) {
  Dosen.update_dosen(body, id_dosen)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
