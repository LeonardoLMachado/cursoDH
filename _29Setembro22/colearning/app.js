const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("Agora foi!"));

app.listen(3000, () =>
  console.log("Servidor rodando no endereço http://localhost:3000")
);
