function primera (callback){
    setTimeout(()=>{
        console.log('ejecutar inicialmente')
        callback()
    },3000)
}

function segunda(){
    console.log('ejecutar despues')
}

primera(segunda)
