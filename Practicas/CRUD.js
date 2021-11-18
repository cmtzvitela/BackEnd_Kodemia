const fs = require('fs');

function crearArchivo(nombre, contenido) {
    fs.writeFile(nombre, contenido, 'utf8', (error) => {
        if (error) { // {error: 'Todo salio mal'} | false | undefined
            console.error(error)
        } else {
            console.log('Se creo el archivo correctamente');
        }
    });
}

function borrarArchivo() {
    fs.unlink()
}

function editar() {

}

function leerArchivo(name, data){
    fs.readFile(name, data, 'utf8', (error) => {
    if (error) {
        console.error(error)
    } else {
        console.log('Se leyo el archivo')
    }
})

crearArchivo('ejercicio.txt', 'Este sera su ejercicio de manana')