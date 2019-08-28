const min = 10000;
const max = 10000000;

const percent = (max - min) / 100;
const groups = [
  [min + 0 * percent, min + 5 * percent],
  [min + 5 * percent, min + 25 * percent],
  [min + 25 * percent, min + 75 * percent],
  [min + 75 * percent, min + 95 * percent],
  [min + 95 * percent, min + 100 * percent],
];

const addGroups = (priceMap) => new Promise((resolve) => {
  priceMap.forEach((point) => {
    const { price } = point;
    groups.forEach((group, index) => {
      const [minPrice, maxPrice] = group;
      if (minPrice <= price && price <= maxPrice) {
        point.group = index;
      }
    });
  });
  resolve(priceMap);
});

module.exports = {
  addGroups,
  key: groups,
};
