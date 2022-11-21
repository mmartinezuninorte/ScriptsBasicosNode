// const promesa = new Promise ((res, rej)=>{
//     // res ('Respuesta exitosa')
//     rej ('Ocurrio un error durante la ejecucion de la promesa')
// })

// promesa.then((resultadoPromesa)=>{
//     console.log(resultadoPromesa)
// },(err)=>{
//     console.log(`Error ocurrido: ${err}`)
// })

const moduloExterno = require('./calculoPromesas')

moduloExterno.calculoMagico(1,3)
    .then((respuesta)=>moduloExterno.imprimirMagico(respuesta))
    .catch((err)=>console.log(`Ocurrio el siguiente error ${err}`))
