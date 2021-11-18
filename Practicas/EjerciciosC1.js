//Funcion que revierta el orden de una oracion 'hola' -> 'aloh'

//let frase = window.prompt("Dijite una frase para voltear:");
let frase = "";
let nuevaFrase = '';
function reversa (frase){
    const separado = frase.split("");
    for (let i = separado.length; i = 0; i--) {
        console.log(index);
        nuevaFrase += separado[i];
        
    }
    return nuevaFrase
}

reversa("Hola")