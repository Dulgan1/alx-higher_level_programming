#!/usr/bin/node

const file = process.argv[2];
const data = process.argv[3];
const fs = require('fs');

fs.writeFile(file, data, 'utf8', (error) => {
  if (error) {
    console.log(error);
  }
});
