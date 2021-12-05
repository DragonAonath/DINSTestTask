var chai = require('chai');
var testCase = require('mocha').describe;
var chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);


/* 
testing https://jsonplaceholder.typicode.com
JSONPlaceholder is a free online REST service that you can use whenever you need some fake data.
You can refer to the website for the API documentation and examples.
*/

// test example for GET	/posts
testCase('/GET posts', function(){
      it('it should GET all the posts', (done) => {
        chai.request('https://jsonplaceholder.typicode.com')
            .get('/posts')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
      });
      it('get all users with id eq 4 and with title doloremque illum aliquid sunt', (done) => {
          chai.request('https://jsonplaceholder.typicode.com')
            .get('/posts')
            .query({
                userId: 4,
                title: 'doloremque illum aliquid sunt'
            })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                // we have 1 user with id eq 4 and with title doloremque illum aliquid sunt
                chai.expect(res.body).to.be.length(1);
                done();
            })
      })
      it('get all users with id eq 1-4 and with title dolorem dolore est ipsam and optio molestias id quia eum', (done) => {
        chai.request('https://jsonplaceholder.typicode.com')
          .get('/posts')
          .query({
              userId: [1, 2, 3, 4], 
              title: ['dolorem dolore est ipsam', 'optio molestias id quia eum']
          })
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('array');
              // get all users with id eq 1-4 and with title dolorem dolore est ipsam and optio molestias id quia eum
              chai.expect(res.body).to.be.length(2);
              done();
          })
    })
    it('get all users with id eq 10 and with title laboriosam dolor voluptates', (done) => {
        chai.request('https://jsonplaceholder.typicode.com')
          .get('/posts')
          .query({
              userId: 10, 
              title: 'laboriosam dolor voluptates'
          })
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('array');
              // get users with id eq 10 and with title laboriosam dolor voluptates
              chai.expect(res.body).to.be.length(1);
              done();
          })
    })
    it('get all users with id eq 8 and with title quam voluptatibus rerum veritatis', (done) => {
        chai.request('https://jsonplaceholder.typicode.com')
          .get('/posts')
          .query({
              userId: 8, 
              title: 'quam voluptatibus rerum veritatis'
          })
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('array');
              // get users with id eq 10 and with title quam voluptatibus rerum veritatis
              chai.expect(res.body).to.be.length(1);
              done();
          })
    })
  });
