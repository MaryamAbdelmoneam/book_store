const db = require("../models/sequelize");
const Store = db.store;

exports.create = (req, res) => {
  Store.create(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Store.",
      });
    });
};

exports.findAll = (req, res) => {
  Store.findAll({ order: [["id", "DESC"]] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving stores.",
      });
    });
};

exports.findOne = (req, res) => {
  const name = req.params.name;

  Store.findOne({ where: { name } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Store with name=" + name,
      });
    });
};
