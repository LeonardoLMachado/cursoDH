function somatoriaBaixoValor(array) {
  let soma = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] <= 1000) {
      soma += array[i];
    }
  }
  return soma;
}
