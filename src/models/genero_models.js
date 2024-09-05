let nextID = 1;

const model = (genero, id_genero = nextID++) => {
  if (
    genero.nome != undefined &&
    genero.nome != "" &&
    genero.criado_em != undefined &&
    genero.criado_em != "" &&
    genero.atualizado_em != undefined &&
    genero.atualizado_em != ""
  ) {
    return {
      id_genero,
      nome: genero.nome,
      criado_em: new Date(),
      atualizado_em: new Date(),
    };
  }
};

module.exports = model;
