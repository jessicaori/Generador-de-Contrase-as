let campoContrasena = document.getElementById('contrasena');
let campoValidacion = document.getElementById('tipoContrasena');

function generarContrasena(){
    let cantidadCaracteres = document.getElementById('cantidad').value;
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

    if (cantidadCaracteres != "" && cantidadCaracteres<=100){
        contrasena = '';
        for (let i = 0; i < cantidadCaracteres; i++) {
            contrasena = contrasena + caracteres[posicionRandom(caracteres.length - 1)];
        }
        campoContrasena.value = contrasena;
        validarContrasena(contrasena);
    } else if (cantidadCaracteres == ""){
        alert('Debe ingresar la cantidad de caracteres');
    } else {
        alert('Debe ingresar un valor menor o igual a 100');
    }
}

function posicionRandom(max){
    return Math.floor(Math.random()*(max+1));
}

function limpiarCampo(){
    campoContrasena.value = '';
    campoValidacion.innerHTML = '';
}

// Verificando contrasena

function validarContrasena(contrasena){
    const letrasMayusculas = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
    const letrasMinusculas = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    const numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const simbolos = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
    
    if(verificar(letrasMayusculas, contrasena) && verificar(letrasMinusculas, contrasena) && verificar(numeros, contrasena) && verificar(simbolos, contrasena)){
        campoValidacion.innerHTML = 'La contraseña es fuerte';
        campoValidacion.style = "color: #27ec42";
    } else {
        campoValidacion.innerHTML = 'La contraseña es débil';
        campoValidacion.style = "color: red";
    }
}

function verificar(array, texto){
    for (let char of array){
        if(texto.includes(char)){
            return true;
        }
    }
}