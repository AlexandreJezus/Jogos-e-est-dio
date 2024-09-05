let nextID = 1;

const model = (publicadora, id_publicadora = nextID++) => {
  if (
    publicadora.nome != undefined &&
    publicadora.nome != "" &&
    publicadora.criado_em != undefined &&
    publicadora.criado_em != "" &&
    publicadora.atualizado_em != undefined &&
    publicadora.atualizado_em != ""
  ) {
    return {
      id_publicadora,
      nome: publicadora.nome,
      criado_em: new Date(),
      atualizado_em: new Date(),
    };
  }
};

module.exports = model;
