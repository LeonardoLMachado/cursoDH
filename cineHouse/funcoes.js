const fs = require("fs");
const filme = require("./filme");

module.exports = {
  adicionarFilme: function adicionarFilme(filme, catalogo, nomeArquivo) {
    catalogo.push(filme);
    fs.writeFileSync(nomeArquivo, JSON.stringify(catalogo, null, 2));
    return "Filme adicionado com sucesso!";
  },

  buscarFilme: function buscarFilme(codigoFilme, catalogo) {
    for (let i = 0; i < catalogo.length; i++) {
      if (catalogo[i].codigo == codigoFilme) {
        return catalogo[i];
      }
    }
  },

  alterarStatusEmCartaz: function (
    codigoFilme,
    catalogo,
    nomeArquivo,
    callbackDeBusca
  ) {
    const filme = callbackDeBusca(codigoFilme, catalogo);
    filme.emCartaz = !filme.emCartaz;
    fs.writeFileSync(nomeArquivo, JSON.stringify(catalogo, null, 2));
  },

  listarFilmesDeLongaDuracao: (catalogo, duracaoMinima) => {
    return catalogo.filter((filme) => {
      filme.duracao > duracaoMinima;
    });
  },

  listarTodosOsFilmes: (catalogo) =>
    catalogo.forEach((filme) => console.log(filme.nome)),
};
