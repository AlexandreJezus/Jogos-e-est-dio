const model = require("../models/estudio_models.js");

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

const show = (id_estudio) => db.find((el) => el.id_estudio == id_estudio);

const update = (id_estudio, body) => {
  const index = db.findIndex((el) => el.id_estudio == id_estudio);
  const novo = model(body, parseInt(id_estudio));
  if (novo && index != -1) {
    db[index] = novo;
    return 200;
  }
  return 400;
};
const destroy = (id_estudio) => {
  const index = db.findIndex((el) => el.id_estudio == id_estudio);
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
