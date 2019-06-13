'use strict';

//* app.js
//* Accepts a filename as a command line parameter
//* Reads the file from the file system
//* Converts it's contents to upper case
//* Writes it back to the file system

const fs = require('fs');

const alterFile = (file) => {
  fs.readFile( file, (err, data) => {
    if(err) { throw err; }
    let text = data.toString().toUpperCase();
    fs.writeFile( file, Buffer.from(text), (err, data) => {
      if(err) { throw err; }
      console.log(`${file} saved`);
    });
  });
};

let file = process.argv.slice(2).shift();
alterFile(file);
