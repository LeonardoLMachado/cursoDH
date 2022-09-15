    /* Declaração de objeto literal */
const animal = { id: 1, nome: 'Cachorro', tipo: 'Canino' }
const animal2 = { id: 2, nome: 'Gato', tipo: 'Felino' }

    /* Acesso por '.' */
    console.log(animal.tipo)

    /* Acesso por indice */
    console.log(animal['nome'])

    /* Acesso completo */
    console.log(animal)

    /* Acessando por indice numerico == NAO FUNCIONA*/
    console.log(animal[0])

    /* MAS aceita acesso por indice de string declarando variavel */
const propriedadeDoObjeto = 'tipo'
    console.log(animal[propriedadeDoObjeto])

    /* Acessando objetos em arrays */
const animais = [ 
    {id: 1, nome: 'Cachorro', tipo: 'Canino', cor: 'Caramelo', vacinas: []},
    {id: 2, nome: 'Gato', tipo: 'Felino', cor: 'Preto', vacinas: []},
    {id: 3, nome: 'Papagaio', tipo: 'Ave', cor: 'Verde', vacinas: ['Raiva', 'Aviária']},
 ]
    console.log(animais[2].vacinas[1])
    console.log(animais[2].nome.length)


    /* Função Construtora: serve para gerar objetos de um tipo especifico */
        /* SEMPRE COM A PRIMEIRA LETRA MAIUSCULA */
function Animal (nome, tipo, cor, vacinas) {
    this.nome = nome
    this.tipo = tipo
    this.cor = cor
    this.vacinas = vacinas
}

const cachorro = new Animal ('Cachorro', 'Canino', 'Caramelo', ['Antirabica', 'Raiva'])
animais.push(cachorro)

const gato = new Animal ('Gato', 'Felino', 'Branco', [])
animais.push(gato)

console.log(animais)
console.log(typeof cachorro)






    









