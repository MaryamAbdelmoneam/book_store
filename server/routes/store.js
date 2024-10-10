module.exports = (app) => {
  const store = require("../controller/store");

  var router = require("express").Router();

  // Create a new store
  router.post("/", store.create);

  router.get("/", store.findAll);

  app.use("/api/store", router);
};
