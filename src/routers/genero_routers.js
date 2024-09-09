const express = require("express");
const genero_controller = require("../controllers/genero_controllers.js");
const genero_router = express.Router();

genero_router.get("/", (req, res) => {
  res.json(genero_controller.index(req.query));
});

genero_router.get("/:id", (req, res) => {
  res.json(genero_controller.show(req.params.id));
});

genero_router.post("/", (req, res) => {
  const code = genero_controller.store(req.body);
  res.status(code).json();
});

genero_router.put("/:id", (req, res) => {
  const code = genero_controller.update(req.body, req.params.id);
  res.status(code).json();
});

genero_router.delete("/:id", (req, res) => {
  genero_controller.destroy(req.params.id);
  res.json();
});

module.exports = genero_router;
