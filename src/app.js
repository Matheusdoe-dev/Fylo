const express = require("express");
const cors = require("cors");
const path = require("path");
// routes
const routes = require("./routes");

const app = express();

// set ejs as default template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "app", "views"));

app.use(cors());
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(routes);

module.exports = app;
