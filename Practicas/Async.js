// const fs = require('fs');

// function crearArchivo(nombre, contenido) {
//     fs.writeFile(nombre, contenido, 'utf8', (error) => {
//         if (error) { // {error: 'Todo salio mal'} | false | undefined
//             console.error(error)
//         } else {
//             console.log('Se creo el archivo correctamente');
//         }
//     });
// }
const fs = require('fs/promises');
const encoding = 'utf8';
async function crearArchivo(nombre, contenido) {
    try {
        await fs.writeFile(nombre, contenido,encoding);
        console.log('Archivo creado correctamente');
    } catch (err) {
        console.error(err);
    }
}

async function leerArchivo(nombre) {
    try {
        const lectura = await fs.readFile(nombre);
        console.log('Archivo leido correctamente');
        console.log(lectura);
    } catch (err) {
        console.error(err);
    }
}

async function borrarArchivo(nombre, contenido) {
    try {
        await fs.unlink(nombre, contenido,encoding);
        console.log('Archivo creado correctamente');
    } catch (err) {
        console.error(err);
    }
}

async function editarArchivo(nombre, contenido) {
    try {
        await fs.appendFile(nombre, contenido,encoding);
        console.log('Archivo editado correctamente');
    } catch (err) {
        console.error(err);
    }
}
// crearArchivo('Hello2.txt', 'Archivo creado\n');
// leerArchivo('Hello.txt', 'Archivo leido')

async function main (){
    await crearArchivo('Hello2.txt', 'Archivo creado\n');
    await leerArchivo('Hello.txt', 'Archivo leido');
    await borrarArchivo('Hello3.txt', 'Archivo borrado');
    await editarArchivo('Hello.txt', 'Nuevo texto en el documento')
}

main()