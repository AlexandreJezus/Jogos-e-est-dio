const express = require("express");
const estudio_controller = require("../controllers/estudio_controllers.js");
const estudio_router = express.Router();

estudio_router.get("/", (req, res) => {
  res.json(estudio_controller.index());
});

estudio_router.get("/:id", (req, res) => {
  res.json(estudio_controller.show(req.params.id));
});

estudio_router.post("/", (req, res) => {
  const code = estudio_controller.store(req.body);
  res.status(code).json();
});

estudio_router.put("/:id", (req, res) => {
  const code = estudio_controller.update(req.body, req.params.id);
  res.status(code).json();
});

estudio_router.delete("/:id", (req, res) => {
  estudio_controller.destroy(req.params.id);
  res.json();
});

module.exports = estudio_router;
