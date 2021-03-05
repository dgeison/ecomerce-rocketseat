const express = require("express");
const routes = express.Router();
const ProductController = require("./app/controllers/ProductController");

routes.get("/", function (req, res) {});

routes.get("/products/create", ProductController.create);
routes.post("/products", ProductController.post);

// ALIAS
routes.get("/ads/create", function (req, res) {
  return res.render("/products/create");
});

module.exports = routes;
