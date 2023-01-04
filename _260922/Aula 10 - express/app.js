const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send('<h1>Agora está funcionando a rota "/".<h1>');
});

app.listen(3000, function () {
  console.log("Servidor rodando no endereço http://localhost:3000");
});
