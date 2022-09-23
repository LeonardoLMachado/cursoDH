const pais = {
  nome: "Brasil",
  continente: "América do Sul",
};

console.log(pais.continente);
console.log(pais["continente"]);

/* Desestruturação de objeto */
const { continente } = pais;
console.log(continente);

/* Função com desestruturação */
function mostraContinente({ continente }) {
  console.log(continente);
}
mostraContinente(pais);

/* Desestruturação em ARRAYS */
const alturas = [
  ["bruno", 183],
  ["tunico", 187],
];

const [nome, altura] = alturas[0];
console.log("O " + nome + " tem " + altura + "cm de altura");

// SPREAD OPERATOR
// Desestruturar objetos ou Arrays em outros objetos ou arrays

const fruta = {
  nome: "abacate",
  tipo: "tropical",
};

const dadosNutricionais = {
  id: "1234ABCD",
  calorias: "150Kcal",
  porcao: "20g",
  ...fruta /* SPREAD */,
};

console.log(dadosNutricionais.tipo);

function soma2(numeros) {
  numeros.forEach((num) => console.log(num + 2));
}

const array1= [1, 2, 3, 4];
soma2([...array1, 5, 6, 7]);

// REST OPERATOR

const pessoa = {
  nome: 'Leo',
  idade: 32,
  corPredileta: 'verde'
}

function entregaPresente (pessoa){
  const { corPredileta, ...rest } = pessoa

  if (pessoa.corPredileta == 'vermelho') console.log('Parabens! Toma aqui o seu presente!')
  else {
    console.log('O presente não é pra você.')
  }

  return rest
}

const restoDoObjeto = entregaPresente(pessoa)
console.log(restoDoObjeto)