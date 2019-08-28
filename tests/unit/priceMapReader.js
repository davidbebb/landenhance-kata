const { expect } = require('chai');
const readPriceMap = require('../../backEnd/lib/priceMapReader.js');

describe('Price map reader', () => {
  let readMap;
  before(async () => {
    readMap = await readPriceMap(`${__dirname}/sample-price-map.txt`);
  });

  it('includes all lines from the file', () => {
    expect(readMap.length).to.equal(25);
  });

  it('each lines contains the expected keys', () => {
    readMap.every(line => expect(line).to.contain.keys('x', 'y', 'price'));
  });
});
