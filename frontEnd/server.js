const express = require('express');
const path = require('path');

const assetsPath = path.join(__dirname, './public');

const frontEnd = express();

frontEnd.use(express.static(assetsPath));

module.exports = frontEnd;
