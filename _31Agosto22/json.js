/* Importando um arquivo no formato JSON */
const frutas = require('./frutas.json') /* Lembrando que o require já utiliza o JSON.parse */
console.log(frutas[1].nome)

/* Importando o módulo fs do node */
// const fs = require('fs')
// const frutas = fs.readFileSync('./frutas.json') /* <-- Retorna um Buffer então precisa converter com JSON.parse no console.log */
// console.log(JSON.parse(frutas))

/* JSON.stringify */
console.log(JSON.stringify(frutas)) /* <-- Retorna a forma como está o texto no JSON */
