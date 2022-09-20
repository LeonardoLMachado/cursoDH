const coletanea = require ('./discos')

const radio = {
    play: (disco) => {
        const faixas = disco()

        for (let i = 0; i < faixas.length; i++) {
            console.log(faixas[i])
        }
    }
}

radio.play(coletanea.tocarDiscoMichaelJackson)
radio.play(coletanea.tocarDiscoDaJoelma)
radio.play(coletanea.tocarDiscoRaulSeixas)