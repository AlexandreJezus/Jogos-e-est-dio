const model = require("../models/genero_models.js");

const db = [];

const index = () => db;

const store = (body) => {
  const novo = model(body);
  if (novo) {
    db.push(novo);
    return 201;
  }
  return 400;
};

const show = (id_genero) => db.find((el) => el.id_genero == id_genero);

const update = (id_genero, body) => {
  const index = db.findIndex((el) => el.id_genero == id_genero);
  const novo = model(body, parseInt(id_genero));
  if (novo && index != -1) {
    db[index] = novo;
    return 200;
  }
  return 400;
};
const destroy = (id_genero) => {
  const index = db.findIndex((el) => el.id_genero == id_genero);
  if (index != -1) {
    db.splice(index, 1);
    return 200;
  }
  return 400;
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};
