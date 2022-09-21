'use strict';


// requires from the model/index.js
const { db, PeopleModel } = require('./src/models');
const { start } = require('./src/server');


//create all associated tables and make sure connection is good
db.sync()
  .then(() => {
    console.log(`Successful Connection!`);
    // proof of life//danger//harcoded
    // PeopleModel.create({ name: 'Jack' });
  })
  .catch(err => console.error(err));

start();