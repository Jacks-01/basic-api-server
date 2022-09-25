'use strict';

const logger = (req, res, next) => {
  let log = {
    method: req.method,
    path: req.path,
  };
    
  console.log(`Logger: ${JSON.stringify(log)}`);
  next();
};

module.exports = logger;