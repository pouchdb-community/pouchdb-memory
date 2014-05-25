'use strict';

var leveldown = require('memdown');
leveldown.adapterName = 'memory';
leveldown.valid = function () {
  return true;
}
leveldown.usePrefix = false;

module.exports = leveldown;