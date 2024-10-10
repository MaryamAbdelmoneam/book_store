const express = require("express");
const cors = require("cors");
const db = require("./models/sequelize");
const store = require("./controller/store");

const app = express();

app.use(cors());
app.use(express.json());
db.sequelize.sync();

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/stores", store.findAll);

require("./routes/author")(app);
require("./routes/book")(app);
// require("./routes/store")(app);
require("./routes/store_book")(app);

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
