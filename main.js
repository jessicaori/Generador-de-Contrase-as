let campoContrasena = document.getElementById('contrasena');
let campoValidacion = document.getElementById('tipoContrasena');

function generarContrasena(){
    let cantidadCaracteres = document.getElementById('cantidad').value;
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

    if (cantidadCaracteres != "" ){
        contrasena = '';
        for (let i = 0; i < cantidadCaracteres; i++) {
            contrasena = contrasena + caracteres[posicionRandom(caracteres.length - 1)];
        }
        campoContrasena.value = contrasena;
        validarContrasena(contrasena);
    } else {
        alert('Debe ingresar la cantidad de caracteres');
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
    if(verificarMayusculas(contrasena) && verificarNumeros(contrasena)){
        campoValidacion.innerHTML = 'La contraseña es fuerte';
        campoValidacion.style = "color: #27ec42";
    } else {
        campoValidacion.innerHTML = 'La contraseña es débil';
        campoValidacion.style = "color: red";
    }
}

function verificarMayusculas(texto){
    const letrasMayusculas = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
    for (let char of letrasMayusculas){
        if(texto.includes(char)){
            return true;
        }
    }
}

function verificarNumeros(texto){
    const numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for (let char of numeros){
        if(texto.includes(char)){
            return true;
        }
    }
}