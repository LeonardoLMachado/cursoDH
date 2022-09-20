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
    new Filme(6, 'Harry Potter 15', 160, ["Daniel Radcliffe", "Emma Stone"], 2005, true), catalogo, nomeArquivo
    )

funcoes.alterarStatusEmCartaz(1, catalogo, nomeArquivo, funcoes.buscarFilme) Alterar o status emCartaz 
console.log(funcoes.buscarFilme(1, catalogo))
console.log(funcoes.listarFilmesDeLongaDuracao(catalogo, 60))