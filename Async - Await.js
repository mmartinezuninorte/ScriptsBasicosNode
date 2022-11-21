const moduloExterno = require('./calculoPromesas')

const asincronica = async() => {
    const respuesta = await moduloExterno.calculoMagico(1,3)
    console.log(respuesta*2)
}

asincronica()