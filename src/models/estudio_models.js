let nextID = 1;

const model = (estudio, id_estudio = nextID++) => {
  if (
    estudio.nome != undefined &&
    estudio.nome != "" &&
    estudio.criado_em != undefined &&
    estudio.criado_em != "" &&
    estudio.atualizado_em != undefined &&
    estudio.atualizado_em != ""
  ) {
    return {
      id_estudio,
      nome: estudio.nome,
      criado_em: new Date(),
      atualizado_em: new Date(),
    };
  }
};

module.exports = model;
