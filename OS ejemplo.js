const os = require('os');
const filesystem = require('fs')
const event = require('events')

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

nuevoEmmiter.emit('delete','./pathTemporal.txt')