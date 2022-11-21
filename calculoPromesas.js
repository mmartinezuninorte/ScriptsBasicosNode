const calculoMagico = (num1, num2)=>{
    return new Promise ((res, rej)=>{
        setTimeout(()=>{
            if (num1!==num2){
                res(num1+num2)
                console.log('calculo realizado')
            }else{
                rej('Error de ejecucion - calculoMagico')
            }
        },3000)
    })
}

const imprimirMagico = (imprimir)=>{
    setTimeout(()=>{
        console.log(imprimir)
    },8000)
}

module.exports={
    calculoMagico,
    imprimirMagico
}