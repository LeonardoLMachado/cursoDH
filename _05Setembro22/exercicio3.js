function adicionarHttp(url) {
  return "http://" + url;
}
function processar(lista, funcao) {
  let preRetorno = [];
  for (x of lista) {
    preRetorno.push(funcao(x));
  }
  return preretorno;
}
