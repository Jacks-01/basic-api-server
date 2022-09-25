'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const catSchema = require('./cat.schema');
const hatSchema = require('./hat.schema');

require('dotenv').config();
const DATABASE_URL =
  process.env.NODE_ENV === 'test' ? 'sqlite:memory' : process.env.DATABASE_URL;

//! Deployment
const db = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});
//! Uncomment this line and comment the block above for development purposes
// const db = new Sequelize(DATABASE_URL);

//create CatModel with our schema
//create HatModel with our schema
const CatModel = catSchema(db, DataTypes);
const HatModel = hatSchema(db, DataTypes);

module.exports = {
  db,
  CatModel,
  HatModel,
};
