'use strict';

const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const DATABASE_URL = process.env.DATABASE_URL;
console.log(DATABASE_URL);


const db = new Sequelize(DATABASE_URL);
const catSchema = require('./cat.schema');
const hatSchema = require('./hat.schema');

//create CatModel with our schema
const CatModel = catSchema(db, DataTypes);
//create HatModel with our schema
const HatModel = hatSchema(db, DataTypes);



module.exports = {
  db,
  CatModel,
  HatModel,
};