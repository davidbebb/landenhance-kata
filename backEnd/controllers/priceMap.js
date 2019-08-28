const express = require('express');

const grouping = require('../lib/priceGrouper');
const readPriceMap = require('../lib/priceMapReader');

const router = express.Router();

const PATH_TO_SOLD_PRICE_DATA = `${process.cwd()}/sold-price-data.txt`;

router.get('/pricemap', (req, res, next) => {
  readPriceMap(PATH_TO_SOLD_PRICE_DATA)
    .then((rawPriceMap) => grouping.addGroups(rawPriceMap))
    .then((priceMap) => {
      res.json({
        data: priceMap,
        key: grouping.key,
      });
    })
    .catch((error) => next(error));
});


module.exports = router;
