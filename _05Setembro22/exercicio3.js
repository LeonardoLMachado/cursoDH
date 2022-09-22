function adicionarHttp(url) {
  return "http://" + url;
}
function processar(lista, funcao) {
  let preretorno = [];
  for (x of lista) {
    preretorno.push(funcao(x));
  }
  return preretorno;
}
