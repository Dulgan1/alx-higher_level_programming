#!/usr/bin/node

const Rectangle = require('./4-rectangle');

module.exports = class Square extends Rectangle {
  constructor (lenght) {
    super(lenght, lenght)
  }
};
