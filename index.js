const backEnd = require('./backEnd/server');
const frontEnd = require('./frontEnd/server');

frontEnd.listen(3000, () => {
  console.log('Front end listening on port 3000');
});
backEnd.listen(3001, () => {
  console.log('Back end listening on port 3001');
});

module.exports = {
  frontEnd,
  backEnd,
};
