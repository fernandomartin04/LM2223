var soluciondni;
var solucionpin;
var usuario;

function validaciondni() {
    var dni = document.getElementById("dni").value;
    var numero, let, letra;
    var expresion_regular_dni = /^[XYZ]?\d{5,8}[A-Z]$/;

    dni = dni.toUpperCase();

    if(expresion_regular_dni.test(dni) === true){
        numero = dni.substr(0,dni.length-1);
        numero = numero.replace('X', 0);
        numero = numero.replace('Y', 1);
        numero = numero.replace('Z', 2);
        let = dni.substr(dni.length-1, 1);
        numero = numero % 23;
        letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
        letra = letra.substring(numero, numero+1);
        if (letra != let) {
            //alert('Dni erroneo, la letra del NIF no se corresponde');
            soluciondni = false;
        }
        else {
            //alert('Dni correcto');
            soluciondni = true;
        }
    }
    else {
        //alert('Dni erroneo, formato no válido');
        soluciondni = false;
    }
}
