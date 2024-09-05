const model = require("../models/jogo_models.js");

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

const show = (id_jogo) => db.find((el) => el.id_jogo == id_jogo);

const update = (id_jogo, body) => {
  const index = db.findIndex((el) => el.id_jogo == id_jogo);
  const novo = model(body, parseInt(id_jogo));
  if (novo && index != -1) {
    db[index] = novo;
    return 200;
  }
  return 400;
};
const destroy = (id_jogo) => {
  const index = db.findIndex((el) => el.id_jogo == id_jogo);
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
