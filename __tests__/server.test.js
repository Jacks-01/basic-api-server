'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const { db } = require('../src/models/');
const request = supertest(app);

beforeAll(async () => {
  await db.sync();
});

afterAll(async () => {
  await db.drop();
});

describe('Testing REST API', () => {
  test('Handles bad routes', async () => {
    const response = await request.get('/bad');
    expect(response.status).toEqual(404);
    expect(response.body.route).toEqual('/bad');
    expect(response.body.message).toEqual('Not Found');
  });

  test('Handles bad requests', async () => {
    const response = await request.post('/cats').send({ info: 'bad' });
    expect(response.status).toEqual(500);
  });

  //* cat testing

  test('Create a new cat', async () => {
    let response = await request.post('/cats').send({
      name: 'Kora',
      color: 'tortoiseshell',
      pronouns: 'she/her',
    });
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Kora');
    expect(response.body.color).toEqual('tortoiseshell');
    expect(response.body.pronouns).toEqual('she/her');
  });

  test('Read all cats', async () => {
    let response = await request.get('/cats');
    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('Kora');
    expect(response.body[0].color).toEqual('tortoiseshell');
    expect(response.body[0].pronouns).toEqual('she/her');
  });

  test('Read one cat', async () => {
    let response = await request.get('/cats/1');
    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('Kora');
    expect(response.body[0].color).toEqual('tortoiseshell');
    expect(response.body[0].pronouns).toEqual('she/her');
  });

  test('Update a cat', async () => {
    let response = await request.put('/cats/1').send({
      name: 'Milo',
      color: 'calico',
      pronouns: 'she/her',
    });
    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('Milo');
    expect(response.body[0].color).toEqual('calico');
    expect(response.body[0].pronouns).toEqual('she/her');
  });

  test('Delete a cat', async () => {
    let response = await request.delete('/cats/1');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual([]);
  });

  //* hat testing
  test('Create a new hat', async () => {
    let response = await request.post('/hats').send({
      name: 'tophat',
      color: 'purple',
    });
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('tophat');
    expect(response.body.color).toEqual('purple');
  });

  test('Read all hats', async () => {
    let response = await request.get('/hats');
    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('tophat');
    expect(response.body[0].color).toEqual('purple');
  });

  test('Read one hat', async () => {
    let response = await request.get('/hats/1');
    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('tophat');
    expect(response.body[0].color).toEqual('purple');
  });

  test('Update a hat', async () => {
    let response = await request.put('/hats/1').send({
      name: 'beanie',
      color: 'black',
    });
    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('beanie');
    expect(response.body[0].color).toEqual('black');
  });

  test('Delete a hat', async () => {
    let response = await request.delete('/hats/1');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual([]);
  });
});
