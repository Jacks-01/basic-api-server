
module.exports = (db, DataTypes) => {
  db.define('Hat', {
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