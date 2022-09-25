'use strict';

const express = require('express');
const { CatModel } = require('../models/');
const router = express.Router();
const errorHandler = require('../error-handlers/500');

//* getting all cats
router.get('/cats', async (req, res, next) => {
  try {
    console.log(`getting all cats...`);
    const cats = await CatModel.findAll();
    res.status(200).send(cats);
    next();
  } catch (error) {
    errorHandler(error, req, res);
  }
});

//* get a single cat
router.get('/cats/:id', async (req, res, next) => {
  try {
    console.log(`getting one cat`);
    let id = req.params.id;
    const cat = await CatModel.findAll({ where: { id } });
    res.status(200).send(cat);
    next();
  } catch (error) {
    errorHandler(error, req, res);
  }
});

//* creating a new cat
router.post('/cats', async (req, res, send) => {
  try {
    console.log('req body', req.body);
    const newCat = await CatModel.create(req.body);
    res.status(200).send(newCat);
  } catch (error) {
    errorHandler(error, req, res);
  }
});

//* updating a cat
router.put('/cats/:id', async (req, res, send) => {
  try {
    let id = req.params.id;
    await CatModel.update(req.body, { where: { id } });

    const updatedCat = await CatModel.findAll({ where: { id } });
    res.status(200).send(updatedCat);
  } catch (error) {
    errorHandler(error, req, res);
  }
});

//* deleting a cat
router.delete('/cats/:id', async (req, res, send) => {
  try {
    const id = req.params.id;
    await CatModel.destroy({ where: { id } });
    const deletedCat = await CatModel.findAll({ where: { id } });
    res.status(200).send(deletedCat);
  } catch (error) {
    errorHandler(error, req, res);
  }
});
module.exports = router;
