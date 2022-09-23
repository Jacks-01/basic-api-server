'use strict';

require('dotenv').config();

const { Sequelize, DataTypes } = require('sequelize');
const DATABASE_URL = process.env.DATABASE_URL;
console.log(DATABASE_URL);


const db = new Sequelize(DATABASE_URL);
const catSchema = require('./cat.schema');
const hatSchema = require('./hat.schema');