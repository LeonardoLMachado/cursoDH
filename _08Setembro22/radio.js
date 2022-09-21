const discos = require("./discos");

const radio = {
  play: (disco) => {
    console.log("\n***** Iniciando Radio *****\n");
    const faixas = disco();

    faixas.forEach((faixa) => console.log(faixa));
  },
};

radio.play(discos.tocarDiscoMichaelJackson);
