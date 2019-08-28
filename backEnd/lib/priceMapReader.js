const readline = require('readline');
const fs = require('fs');

const readPriceMap = (fileName) => new Promise((resolve, reject) => {
  const fileStream = readline.createInterface({
    input: fs.createReadStream(fileName),
  });

  const priceData = [];

  fileStream.on('line', (line) => {
    const [x, y, price] = line.split(' ');
    priceData.push({ x, y, price });
  });

  fileStream.on('close', () => {
    resolve(priceData);
  });

  fileStream.on('error', (error) => {
    reject(error);
  });
});


module.exports = readPriceMap;
