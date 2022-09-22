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
    ['bruno', 183],
    ['tunico', 187]
]

const [ nome, altura ] = alturas[0]
console.log('O ' + nome + ' tem ' + altura + 'cm de altura')

/* 01:53:00 */