const { Sequelize, DataTypes } = require('sequelize');


const Cat = sequelize.define({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});