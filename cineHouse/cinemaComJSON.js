const Filme = require('./filme')
const funcoes = require('./funcoes')
const catalogo = require('./database/catalogo.json')
const cinema = 'DH - Movies'
const nomeArquivo = './database/catalogo.json'
console.log(cinema)

console.log(new Filme(1, 'Harry Potter', 90, ["Daniel Radcliffe", "Emma Stone"], 2001, false))

console.log(catalogo)

console.log('O filme encontrado foi: ' + funcoes.buscarFilme(3, catalogo).titulo)

funcoes.adicionarFilme (
    new Filme(5, 'Harry Potter 2', 160, ["Daniel Radcliffe", "Emma Stone"], 2005, true), catalogo, nomeArquivo
    )

funcoes.alterarStatusEmCartaz(3, catalogo) /* Alterar o status emCartaz */
console.log(funcoes.buscarFilme(3, catalogo))