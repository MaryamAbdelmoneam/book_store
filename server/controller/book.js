const Author = require("../models/author");
const StoreBook = require("../models/store_book");
const db = require("../models/sequelize");
const Book = db.book;

exports.create = (req, res) => {
  Book.create(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Book.",
      });
    });
};
exports.findAll = (req, res) => {
  Book.findAll({
    order: [["id", "DESC"]],
    include: [
      ,
      { model: Author, attributes: [] },
      { model: StoreBook, attributes: [] },
    ],
    attributes: ["name", "pages"],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving books.",
      });
    });
};
