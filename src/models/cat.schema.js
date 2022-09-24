'use strict';

module.exports = (db, DataTypes) => {
  return db.define('Cat', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pronouns: {
      type: DataTypes.ENUM,
      values: ['he/him', 'she/her', 'they/them'],
      allowNull: true,
    },
  });

};