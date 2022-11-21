const os = require('os');
const filesystem = require('fs')
const event = require('events')
const constants = require('constants')

const rutaArchivosTemporales = os.tmpdir();
const cpu = os.cpus();


const nuevoEmmiter = new event()

nuevoEmmiter.on('log',()=>{
    filesystem.appendFile('pathTemporal.txt',`Mi informacion tecnica es: ${JSON.stringify(cpu)}`,
    (err)=>{
        if (err){
            console.log('Error al crear el archivo')
        }
    })
})

nuevoEmmiter.on('delete',(path)=>{
    filesystem.unlink(path, (err)=>{
        if (err){
            console.log('Se encontro un error al intentar eliminar el archivo:')
            console.log(err)
        }
    })
})


filesystem.access('pathTemporal.txt', constants.F_OK,(err)=>{
    if (err){
        console.log("... el archivo no existe, creandolo...")
        nuevoEmmiter.emit('log')
        console.log("... archivo creado satisfactoriamente... ")
    }else {
        console.log('... archivo encontrado, eliminandolo...')
        nuevoEmmiter.emit('delete','./pathTemporal.txt')
        console.log('... archivo eliminado ...')
    }
})