'use strict';

<<<<<<< 77c7206e993c1ac95cf54546aadb488402777e8d
var leveldown = require('memdown');
leveldown.adapterName = 'memory';
leveldown.valid = function () {
  return true;
}
leveldown.usePrefix = false;

module.exports = leveldown;
=======
module.exports = require('pouchdb-core')
  .plugin(require('pouchdb-adapter-memory'))
  .plugin(require('pouchdb-mapreduce'))
  .plugin(require('pouchdb-replication'))
  .plugin(require('pouchdb-find'));
>>>>>>> initial commit
