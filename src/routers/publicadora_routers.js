const express = require("express");
const publicadora_controller = require("../controllers/publicadora_controllers.js");
const publicadora_router = express.Router();

publicadora_router.get("/", (req, res) => {
  res.json(publicadora_controller.index());
});

publicadora_router.get("/:id", (req, res) => {
  res.json(publicadora_controller.show(req.params.id));
});

publicadora_router.post("/", (req, res) => {
  const code = publicadora_controller.store(req.body);
  res.status(code).json();
});

publicadora_router.put("/:id", (req, res) => {
  const code = publicadora_controller.update(req.body, req.params.id);
  res.status(code).json();
});

publicadora_router.delete("/:id", (req, res) => {
  publicadora_controller.destroy(req.params.id);
  res.json();
});

module.exports = publicadora_router;
