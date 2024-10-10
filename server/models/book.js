const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Book = sequelize.define("Book", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pages: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "author",
        key: "id",
      },
    },
  });
  return Book;
};
