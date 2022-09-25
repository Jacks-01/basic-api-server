'use strict';

module.exports = (db, DataTypes) => {
  return db.define('Hat', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  });
};