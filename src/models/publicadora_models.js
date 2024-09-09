let nextID = 1;

const model = (publicadora, id_publicadora = nextID++) => {
  if (publicadora.nome != undefined && publicadora.nome != "") {
    return {
      id_publicadora,
      nome: publicadora.nome,
      criado_em: publicado.criado_em || new Date(),
      atualizado_em: new Date(),
    };
  }
};

module.exports = model;
