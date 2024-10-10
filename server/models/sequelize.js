const { Sequelize } = require("sequelize");
const config = require("../config");
const sequelize = new Sequelize(config);
const Store = require("./store.js");
const Book = require("./book.js");
const Author = require("./author.js");

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.author = require("./author.js")(sequelize, Sequelize);
db.book = require("./book.js")(sequelize, Sequelize);
db.store = require("./store.js")(sequelize, Sequelize);
db.store_book = require("./store_book.js")(sequelize, Sequelize);
module.exports = db;
