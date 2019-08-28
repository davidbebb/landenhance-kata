const toCurrency = (price) => `${Number(price).toLocaleString('en-GB', { style: 'currency', currency: 'GBP', minimumFractionDigits: 0 })}`;
const priceGrid = document.getElementById('price-grid');
fetch('http://localhost:3001/api/pricemap')
  .then((response) => response.json())
  .then((json) => {
    json.data.forEach(({
      x, y, group, price,
    }) => {
      const gridArea = `${Number(y) + 1}/${Number(x) + 1}`;
      const priceSquare = document.createElement('span');
      priceSquare.className = `q${group} grid-element`;
      priceSquare.id = price;
      priceSquare.style['grid-area'] = gridArea;
      priceSquare.title = toCurrency(price);
      priceGrid.appendChild(priceSquare);
    });
    json.key.forEach(([min, max], index) => {
      const keyElement = document.getElementById(`q${index}-key`);
      keyElement.innerHTML = `${toCurrency(min)} to ${toCurrency(max)}`;
    });
  });
