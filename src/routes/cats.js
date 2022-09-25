'use strict';

const express = require('express');
const { CatModel } = require('../models/');

const router = express.Router();

//* getting all cats
router.get('/cats', async (req, res, next) => {
  console.log(`getting all cats...`);
  const cats = await CatModel.findAll();
  res.status(200).send(cats);
  next();
});

//* get a single cat
router.get('/cats/:id', async (req, res, next) => {
  console.log(`getting one cat`);
  let id = req.params.id;

  const cat = await CatModel.findAll({ where: { id } });

  res.status(200).send(cat);
  next();
});

//* creating a new cat
router.post('/cats', async (req, res, send) => {
  console.log('req body', req.body);

  const newCat = await CatModel.create(req.body);
  res.status(200).send(newCat);
});

//* updating a cat
router.put('/cats/:id', async (req, res, send) => {
  let id = req.params.id;
  await CatModel.update(req.body, { where: { id } });

  const updatedCat = await CatModel.findAll({ where: { id } });
  res.status(200).send(updatedCat);
});

//* deleting a cat
router.delete('/cats/:id', async (req, res, send) => {
  const id = req.params.id;
  await CatModel.destroy({ where: { id } });
  const deletedCat = await CatModel.findAll({ where: { id } });
  res.status(200).send(deletedCat);
});
module.exports = router;
