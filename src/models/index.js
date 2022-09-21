'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const peopleSchema = require('./person/person.schema');
require('dotenv').config();

// 'postgres://localhost:5432/DATABASE_NAME 
// 'postgres://username:password@localhost:5432/DATABASE_NAME 
const DATABASE_URL = process.env.DATABASE_URL;

//instantiates our database
const db = new Sequelize(DATABASE_URL);

//create PeopleModel with our Schema
const PeopleModel = peopleSchema(db, DataTypes);


module.exports = { db, PeopleModel };