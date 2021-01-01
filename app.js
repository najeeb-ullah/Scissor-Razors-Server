const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { MONGOURI } = require("./keys");

mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on("connected", () => {
  console.log("connected to mongoose");
});

mongoose.connection.on("error", (err) => {
  console.log("connecting", err);
});

require("./models/user");
require("./models/haircare");
require("./models/beardCare");
require("./models/skinCare");
require("./models/beardService");
require("./models/hairService");
require("./models/skinService");
require("./models/deal");
require("./models/review");
require("./models/appointment");
require("./models/employee");

app.use(express.json());
app.use(require("./routes/auth"));
app.use(require("./routes/post"));
const port = process.env.PORT || "5000";
app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
