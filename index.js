'use strict';

var adapter = require('memdown');
adapter.adapterName = 'memory';
adapter.valid = function () {
  return true;
}
adapter.usePrefix = false;

module.exports = adapter;
