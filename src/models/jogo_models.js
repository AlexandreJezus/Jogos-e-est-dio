let nextID = 1;

const model = (jogo, id_jogo = nextID++) => {
  if (
    jogo.nome != undefined &&
    jogo.nome != "" &&
    jogo.criado_em != undefined &&
    jogo.criado_em != "" &&
    jogo.atualizado_em != undefined &&
    jogo.atualizado_em != ""
  ) {
    return {
      id_jogo,
      nome: jogo.nome,
      id_genero: jogo.id_genero,
      id_estudio: jogo.id_estudio,
      id_publicadora: jogo.id_publicadora,
      lancado_em: jogo.lancado_em,
      criado_em: new Date(),
      atualizado_em: new Date(),
    };
  }
};

module.exports = model;
