let nextID = 1;

const model = (genero, id_genero = nextID++) => {
  if (genero.nome != undefined && genero.nome != "") {
    return {
      id_genero,
      nome: genero.nome,
      criado_em: genero.criado_em || new Date(),
      atualizado_em: new Date(),
    };
  }
};

module.exports = model;
