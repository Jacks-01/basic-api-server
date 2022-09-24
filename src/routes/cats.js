'use strict';

const express = require('express');
const { CatModel } = require('../models/');

const router = express.Router();


router.post('/cats', async (req, res, send) => {
  console.log('req body', req.body);
  
  const newCat = await CatModel.create(req.body);
  res.status(200).send(newCat);
});
  
module.exports = router;