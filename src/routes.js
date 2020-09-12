const express = require("express");

const routes = express.Router();

// index page rotue
routes.get("/", (req, res, next) => {
  return res.render("index", {
    title: "Home",
  });
});

module.exports = routes;
