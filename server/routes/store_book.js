module.exports = (app) => {
  const store_book = require("../controller/store_book");

  var router = require("express").Router();

  // Create a new store_book
  router.post("/", store_book.create);

  app.use("/api/store_book", router);
};
