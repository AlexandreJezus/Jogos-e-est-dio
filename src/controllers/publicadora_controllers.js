const model = require("../models/publicadora_models.js");

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

const show = (id_publicadora) =>
  db.find((el) => el.id_publicadora == id_publicadora);

const update = (id_publicadora, body) => {
  const index = db.findIndex((el) => el.id_publicadora == id_publicadora);
  const novo = model(body, parseInt(id_publicadora));
  if (novo && index != -1) {
    db[index] = novo;
    return 200;
  }
  return 400;
};
const destroy = (id_publicadora) => {
  const index = db.findIndex((el) => el.id_publicadora == id_publicadora);
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
