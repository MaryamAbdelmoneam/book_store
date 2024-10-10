const db = require("../models/sequelize");
const Author = db.author;

exports.create = (req, res) => {
  Author.create(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Author.",
      });
    });
};
