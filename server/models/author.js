const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Author = sequelize.define("author", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Author;
};
