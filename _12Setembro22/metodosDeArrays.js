/* METODOS DE Array

Os métodos mais utilizados:

array.filter() - recebe um callback que ao retornar true ou false cria um novo array 
com os elementos que atendem a essa condição
Ex. 
const numbers = array.filter((elemento) => typeof elemento == 'number') - retorna novo array somente com números.

array.find() - recebe um callback que ao retornar true ou false devolve o elemento do array
que atende a condição criada no callback
Ex.
const nome = array.find((elemento) => elemento == 'Bruno') retorna o primeiro elemento que corresponda a string 'Bruno'

array.map() - recebe um callback que gera um novo array com os elementos retornados pelo callback
Ex.
const saudacao = array.back((elemento) => elemento + ' Seja bem vindo, ')

*/
console.log("/FILTER========================/");
const idades = [10, 18, 80, 19, 67, 32, 14, 8];
const adultos = idades.filter((maiores) => maiores >= 18);
console.log(idades);
console.log(adultos);

console.log("/FIND========================/");

const usuarios = [
  { email: "fulano@gmail.com", nome: "Fulano" },
  { email: "ciclano@gmail.com", nome: "Ciclano" },
  { email: "zezinho@gmail.com", nome: "Zezinho" },
];

const usuario = usuarios.find((elemento) => elemento.nome == "Fulano");
console.log(usuario);

console.log("/MAP========================/");

const numeros = [1,2,3,4,5,6];
const numerosDobrados = numeros.map(elemento => elemento * 2)
console.log(numerosDobrados)

