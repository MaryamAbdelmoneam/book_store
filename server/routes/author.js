module.exports = app => {
  const author = require("../controller/author");

  var router = require("express").Router();

  // Create a new author
  router.post("/", author.create);

  app.use('/api/author', router);
};