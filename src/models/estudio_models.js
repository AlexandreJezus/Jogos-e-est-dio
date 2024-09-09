let nextID = 1;

const model = (estudio, id_estudio = nextID++) => {
  if (estudio.nome != undefined && estudio.nome != "") {
    return {
      id_estudio,
      nome: estudio.nome,
      criado_em: estudio.criado_em || new Date(),
      atualizado_em: new Date(),
    };
  }
};

module.exports = model;
