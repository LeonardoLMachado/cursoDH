
/* Formato padrão de definição de uma função */
function saudar (nome) {
    return 'Olá, ' + nome
}

console.log(saudar ('Leo'))

/* Função anonima */
const saudar = function (nome) {
    return 'Olá, ' + nome
}
console.log(saudar ('Leo'))

/* Definição padrão da ARROW FUNCTION */
const saudar = (nome) => {
    return 'Olá, ' + nome
}

console.log(saudar ('Leo'))

/* Arrow function na forma reduzida */
const saudar = nome => 'Olá ' + nome
console.log(saudar ('Leo'))
