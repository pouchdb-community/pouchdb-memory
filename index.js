'use strict';

var adapter = require('pouchdb-abstract-adapter');

var leveldown = require('memdown');
leveldown.adapterName = 'memory';
leveldown.valid = function () {
  return true;
}
leveldown.usePrefix = false;

module.exports = adapter(leveldown);