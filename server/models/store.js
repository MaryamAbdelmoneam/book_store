const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Store = sequelize.define("Store", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Store;
};
