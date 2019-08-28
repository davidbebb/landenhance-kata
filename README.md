# Landenhance: Price map proof of concept

### Brief:

Produce a map indicating the relative price of houses in an area.

Full brief [here](https://github.com/landtechnologies/technical-challenge/blob/master/sold-price-map.md)

### User stories

#### Price map service
```
Given the price map service
When I call the price map endpoint
Then I should recieve a 2-d map of prices
```
```
Given the price map service
When I get a 2-d price map
Then it should contain the co-ordinates, price, and price group
```
```
Given the price map service
When I get a 2-d price mao
Then it should return a key with the range for each price group
```

#### Price map page
```
Given the price map page
When a price map is retrieved
Then it should plot each point on the map grid, with a colour corresponding to its price group
```
```
Given the price map page
When a price map is plotted
Then it should display a key indicating each price group
```

### Proposed solution

As a proof of concept, the both the front end and backend solution are contained in the same repository. For convienience, these can both be run from `index.js` using npm (see below).

The backend consists of a single endpoint, which returns a JSON payload contaning the grid references, and price grouping for each property, as well as a key describing the price range for each group.

The frontend consists of a single page, which renders the map data on a 2D grid. Currently, this grid is oriented to use screen co-ordinates, with the origin in the top left.


### Build it

You will require NodeJS and npm.

1) Clone the repository
```
git clone --depth=1 https://github.com/davidbebb/landenhance-kata.git <project_name>
```
2) Install dependencies
```
cd <project_name>
npm install
```

### Run it

From within the project directory run
```
npm run start

open 'http://localhost:3000'
```

### Test it
From within the project directory run
```
npm run test
```

### Lint it
From within the project directory run
```
npm run lint
```
