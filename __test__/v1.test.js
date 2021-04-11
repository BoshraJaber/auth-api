'use strict';
require('dotenv').config()
// const superTest = require('supertest');;
const server = require('../src/server').server;
// const {server} = require('../src/auth/v1').router;
const models = require('../src/auth/v1').models;
const supergoose = require('@code-fellows/supergoose');

const request = supergoose(server);
let id;
let idClothes;
describe('API Server', () => {
    // checking for routes status code and returned value for Food
    //Create a record
    it('should create a record', async () => {
      const response = await request.post('/api/v1/clothes/').send({
        name: 'chicken',
        calories:'10' ,
        type: 'meat',
      });
console.log(models);
      expect(response.status).toEqual(201);
      // expect(response.body.type).toEqual('JunkyFood');
      // expect(response.body.price).toEqual('5');
      id = response.body._id;
    });
    // Update a record 
    it('Update a record', async () => {
      const response = await request.put(`/api/v1/food/${id}`).send({
        type :'fast food',
        // price : '6',
      });
      expect(response.status).toEqual(200);
      expect(response.body.type).toEqual('fast food');
      // expect(response.body.price).toEqual('6');
    });
    // Read a record
    it('Read a record', async () => {
      const response = await request.get(`/api/v1/food/${id}`);
      expect(response.status).toEqual(200);
      expect(response.body.type).toEqual('fast food');
      // expect(response.body.price).toEqual('6');
    });
    // Read all Records
    it('Read all record', async () => {
      const response = await request.get('/api/v1/food/');
      expect(response.status).toEqual(200);
      // console.log(response.body[0]);
      expect(response.body[0].type).toEqual('fast food');
      // expect(response.body[0].price).toEqual('5');
    });
    // // Delete a record
    it('Delete a record', async () => {
      const response = await request.delete(`/api/v1/food/${id}`);
      expect(response.status).toEqual(200);
      // console.log(response.body);
      // expect(response.body).toEqual(null);
    });   
  });