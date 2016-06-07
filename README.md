pouchdb-memory
=======

A purely in-memory PouchDB, as a custom build. Useful for things like quick unit tests where you don't want to write any data to disk.

Install
---

    npm install pouchdb-memory

Usage
----

```js
var PouchDB = require('pouchdb-memory');
var db = new PouchDB('mydb');
```

Description
----

This build combines the following plugins:

- `pouchdb-adapter-memory`
- `pouchdb-mapreduce`
- `pouchdb-replication`
- `pouchdb-find`

Feel free to add additional plugins on top of it, or just build your own – the source code is tiny!
