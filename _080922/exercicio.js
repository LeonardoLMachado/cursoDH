function rolarODadoDeSeisFaces() {
  return parseInt(Math.random() * 6) + 1 /* Mais um porque o dado não tem zero */;
}

function rolarDoisDadosDeSeisFaces() {
  const rodada1 = rolarODadoDeSeisFaces();
  const rodada2 = rolarODadoDeSeisFaces();

  return rodada2 < rodada1 ? rodada1 : rodada2;
}

function oJogo(jogador, rolarODado) {
  /*   const pontuacaoVitoriosa = 6; */

  const valorSorteado = rolarODado();
  console.log(valorSorteado);

  switch (valorSorteado) {
    case 6:
      console.log(jogador + " ganhou o jogo.");
      break;

    case 4:
      console.log("A banca paga meia.");
      break;

    case 5:
      console.log("Foi quase.");
      break;

    default:
      console.log("Não foi dessa vez.");
      break;
  }
}

oJogo("Wellington", rolarODadoDeSeisFaces);
oJogo("Bruno", rolarODadoDeSeisFaces);
oJogo("Leo", rolarODadoDeSeisFaces);
