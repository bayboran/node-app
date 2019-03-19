var request = require('supertest');
var app = require('../index.js');

describe('GET /', function() {
 it('respond with selam dünyalı biz dostuz', function(done) {

 //navigate to root and check the the response is "selam dünyalı biz dostuz"
 request(app).get('/').expect('selam dünyalı biz dostuz', done);
 });
});