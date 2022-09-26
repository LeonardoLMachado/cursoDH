const express = require("express");
let app = express();

/* criando um servidor com Express */
app.get("/", (req, res) => res.send("Olá, mundo!"));

app.get("/contatos", (req, res) => res.send({ nome: "Leonardo", idade: 22 }));
app.listen(3000, () => console.log("Servidor rodando na porta 3k."));
