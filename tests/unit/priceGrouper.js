const { expect } = require('chai');

const priceGrouper = require('../../backEnd/lib/priceGrouper.js');

const rawPrices = [
  { x: 1, y: 10, price: 10000 },
  { x: 2, y: 20, price: 100000 },
  { x: 3, y: 30, price: 1000000 },
  { x: 4, y: 40, price: 5000000 },
  { x: 5, y: 50, price: 10000000 },
];

describe('Price grouper', () => {
  let pricesWithGroups;
  let groups;
  before(async () => {
    pricesWithGroups = await priceGrouper.addGroups(JSON.parse(JSON.stringify(rawPrices)));
    groups = priceGrouper.key;
  });

  it('adds an additional "group" parameter to each element', () => {
    pricesWithGroups.every((i) => expect(i).to.have.any.keys('group'));
  });

  it('adds the expected group to each price', () => {
    expect(pricesWithGroups.every(
      ({ price, group }) => expect(price).to.be.within(groups[group][0], groups[group][1]),
    ));
  });

  it('leaves the price and co-ordinates unchanged', () => {
    const filteredKeys = pricesWithGroups.map(({ price, x, y }) => ({ price, x, y }));
    expect(filteredKeys).to.deep.equal(rawPrices);
  });
});
