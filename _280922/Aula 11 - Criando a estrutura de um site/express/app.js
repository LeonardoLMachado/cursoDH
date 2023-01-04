const express = require("express");
const path = require('path');

const app = express();

app.get("/", function (req, res) {
  res.send('<h1>Agora está funcionando a rota "/".<h1>');
});

app.get("/index", function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, function () {
  console.log("Servidor rodando no endereço http://localhost:3000");
});
