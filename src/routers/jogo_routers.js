const express = require("express");
const jogo_controller = require("../controllers/jogo_controllers.js");
const jogo_router = express.Router();

jogo_router.get("/", (req, res) => {
  res.json(jogo_controller.index());
});

jogo_router.get("/:id", (req, res) => {
  res.json(jogo_controller.show(req.params.id));
});

jogo_router.post("/", (req, res) => {
  const code = jogo_controller.store(req.body);
  res.status(code).json();
});

jogo_router.put("/:id", (req, res) => {
  const code = jogo_controller.update(req.body, req.params.id);
  res.status(code).json();
});

jogo_router.delete("/:id", (req, res) => {
  jogo_controller.destroy(req.params.id);
  res.json();
});

module.exports = jogo_router;
