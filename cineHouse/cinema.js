const Filme = require('./filme')
const funcoes = require('./funcoes')
const cinema = 'DH - Movies'

console.log(cinema)
/* console.log(new Filme(1, 'Harry Potter', 90, ["Daniel Radcliffe", "Emma Stone"], 2001, false))
 */
const catalogo = []

funcoes.adicionarFilme(new Filme(1, 'Harry Potter', 90, ["Daniel Radcliffe", "Emma Stone"], 2001, false), catalogo)
funcoes.adicionarFilme(new Filme(2, 'Codigo de Conduta', 180, ['Gerard Butler'], 2011, false), catalogo)
funcoes.adicionarFilme(new Filme(3, 'Animais Fantasticos', 120, ["Depp"], 2022, true), catalogo)
funcoes.adicionarFilme(new Filme(4, 'Panico', 120, [], 2015, false), catalogo)

console.log(catalogo)

console.log('O filme encontrado foi: ' + funcoes.buscarFilme(1, catalogo).titulo)

funcoes.alterarStatusEmCartaz(1, catalogo)
console.log(funcoes.buscarFilme(1, catalogo))