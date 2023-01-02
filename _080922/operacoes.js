const calculadora = require("./calculadoraDois");

calculadora.calcular(2, 6, calculadora.mul);
calculadora.calcular(2, 6, calculadora.div);

calculadora.calcular(2, 6, function (x, y) {
  return "O valor é: " + (x + y);
});
