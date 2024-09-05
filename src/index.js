const express = require("express");

// Router
const estudio_router = require("./routers/estudio_routers.js");
const jogo_router = require("./routers/jogo_routers.js");
const genero_router = require("./routers/genero_routers.js");
const publicadora_router = require("./routers/publicadora_routers.js");

const app = express();
const port = 3000;

app.use(express.json());
// Rotas
app.use("/estudio", estudio_router);
app.use("/jogo", jogo_router);
app.use("/genero", genero_router);
app.use("/publicadora", publicadora_router);

// Rotas

app.listen(port, () => {
  console.log(`Sucesso na conexão ${port}`);
});
