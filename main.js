let campoContrasena = document.getElementById('contrasena');

function generarContrasena(){
    let cantidadCaracteres = document.getElementById('cantidad').value;
    let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

    if (cantidadCaracteres != "" ){
        contrasena = '';
        for (let i = 0; i < cantidadCaracteres; i++) {
            contrasena = contrasena + caracteres[posicionRandom(caracteres.length - 1)];
        }
        campoContrasena.value = contrasena;
    } else {
        alert('Debe ingresar la cantidad de caracteres');
    }
}

function posicionRandom(max){
    return Math.floor(Math.random()*(max+1));
}

function limpiarCampo(){
    campoContrasena.value = '';
}