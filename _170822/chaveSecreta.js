function aChaveSecreta(arrayDeCaracteres) {
  const mensagem = [];
  for (let i = arrayDeCaracteres.length - 1; i >= 0; i--) {
    if (arrayDeCaracteres[i] != "*") {
      mensagem.push(arrayDeCaracteres[i]);
    }
  }
  return mensagem.join("");
}

/* 1:27:00  */

/* Somatórias de baixo valor
Séries
Maior que o número
Personagens
Cinema
Estacionamento */