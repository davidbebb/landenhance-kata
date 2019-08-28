const request = require('supertest');
const { expect } = require('chai');

const app = require('../../backEnd/server.js');

const api = request(app);

describe('/api/pricemap', () => {
  let response;
  before((done) => {
    api.get('/api/pricemap')
      .end((err, res) => {
        if (err) done(err);
        response = res;
        done();
      });
  });

  it('returns a response', () => {
    expect(response.statusCode).to.eql(200);
  });

  it('returns an array of data', () => {
    expect(response.body.data).to.be.an('array');
  });

  it('returns an object with the expected params', () => {
    expect(response.body.data.shift()).to.have.all.keys('x', 'y', 'price', 'group');
  });

  it('returns a key containg 5 elements', () => {
    expect(response.body.key).to.be.an('array').of.length(5);
  });
});
