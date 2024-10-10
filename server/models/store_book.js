const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const StoreBook = sequelize.define("StoreBook", {
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    sold_out: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });
  return StoreBook;
};
