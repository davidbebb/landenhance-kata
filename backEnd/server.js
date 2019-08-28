const cors = require('cors');
const express = require('express');

const priceMapController = require('./controllers/priceMap');

const backEnd = express();
backEnd.use(cors());
backEnd.use('/api', priceMapController);

module.exports = backEnd;
