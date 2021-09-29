const fs = require('fs');
const rimraf = require('rimraf');
const getSize = require('get-folder-size');

const cachePath = 'node_modules/.cache/nx';
const maxCacheMb = 2048;

if (fs.existsSync(cachePath)) {
  getSize(cachePath, (err, size) => {
    if (err) {
      throw err;
    }

    const MBSize = (size / 1024 / 1024).toFixed(2);

    console.log(`*** NX cache size is ${MBSize} Megabytes`);
    if (MBSize > maxCacheMb) {
      console.log('*** CLEAR NX CACHE ***');
      rimraf.sync(cachePath);
    }
  });
}
