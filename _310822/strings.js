/* Métodos de Strings */
const palavra = 'Otorrinolaringolista'
const url = 'google.com.br'
const CPF = '370.261.528-82'
const text = 'O l á, m u n d o'

/* indexOf retorna o index da ocorrencia do primeiro paramentro passado. */
console.log(palavra.indexOf('r', 6))

/* slice retorna uma fatia a string original */
console.log(palavra.slice(0,11))
console.log(url.slice(-3))

/* trim limpa os espaços antes e depois da string */
console.log(palavra.trim() + '<- Olha o espaço aqui')

/* split */
console.log(CPF.split(".")[1])
console.log(text.split(" "))
