const db = require("../models/sequelize");
const StoreBook = db.store_book;

exports.create = (req, res) => {
  StoreBook.create(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the StoreBook.",
      });
    });
};
