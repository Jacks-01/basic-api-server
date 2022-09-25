'use strict';

const express = require('express');
const router = express.Router();
const { HatModel } = require('../models/');
const errorHandler = require('../error-handlers/500');

//* getting all hats
router.get('/hats', async (req, res, next) => {
  try {
    console.log(`getting all hats...`);
    const hats = await HatModel.findAll();
    res.status(200).send(hats);
    next();
  } catch (error) {
    errorHandler(error, req, res);
  }
});

//* get a single hat
router.get('/hats/:id', async (req, res, next) => {
  try {
    console.log(`getting one hat`);
    let id = req.params.id;
    const hat = await HatModel.findAll({ where: { id } });
    res.status(200).send(hat);
    next();
  } catch (error) {
    errorHandler(error, req, res);
  }
});

//* creating a new hat
router.post('/hats', async (req, res, send) => {
  try {
    console.log('req body', req.body);
    const newHat = await HatModel.create(req.body);
    res.status(200).send(newHat);
  } catch (error) {
    errorHandler(error, req, res);
  }
});

//* updating a hat
router.put('/hats/:id', async (req, res, send) => {
  try {
    let id = req.params.id;
    await HatModel.update(req.body, { where: { id } });

    const updatedHat = await HatModel.findAll({ where: { id } });
    res.status(200).send(updatedHat);
  } catch (error) {
    errorHandler(error, req, res);
  }
});

//* deleting a hat
router.delete('/hats/:id', async (req, res, send) => {
  try {
    const id = req.params.id;
    await HatModel.destroy({ where: { id } });
    const deletedHat = await HatModel.findAll({ where: { id } });
    res.status(200).send(deletedHat);
  } catch (error) {
    errorHandler(error, req, res);
  }
});
module.exports = router;
