module.exports = (app) => {
  const book = require("../controller/book");

  var router = require("express").Router();

  // Create a new book
  router.post("/", book.create);

  app.use("/api/book", router);
};
