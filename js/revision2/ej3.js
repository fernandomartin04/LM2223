//creación de variables que usaremos 
var soluciondni;
var solucionpin;
var usuario;

//Función para validar el DNI, (Se copia en internet)

function validaciondni() {
    var dni = document.getElementById("DNI").value;
    var numero, let, letra;
    var expresion_regular_dni = /^[XYZ]?\d{5,8}[A-Z]$/;

    dni = dni.toUpperCase();

    if(expresion_regular_dni.test(DNI) === true){
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
/*Esta función valida el pin, ponemos las variables como value con el id=...*/
function validacionpin {
    var PIN = documen.getElementById("PIN").value;
    var PIN2  = document.getElementById("PIN2").value;
//con el if comparamos el pin con la repetición del pin, si son iguales bien sino con el else nos apareece que es falso
    if (PIN == PIN2) {
        solucionpin = true
    }
    else {
        solucionpin = false;
        alert('No coinciden los pin')
    }
}

function nombreusuario {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var telefono = document.getElementById("telefono").value;

    /* Esto hace que se elijan las primeras 2 letras y en el caso del tlf las tres últimas*/

    nombre = nombre.substr(0,2);
    apellido = apellido.substr(0,2);
    telefono = telefono.substr(-3,3);

    //el valor del usuario sera de lo siguiente
    usuario = nombre+apellido+telefono
}

function validar() {
    validaciondni();
    validacionpin(); //Con esto se hará la función enviar cuando queden validadas estas funciones

    if (soluciondni===true && solucionpin===true) {
        nombreusuario();
        alert('Su nombre de usuario es: ' + usuario)
    }
    else {
        if (soluciondni===false && solucionpin===false){
            alert('Los campos dni y pin no son correctos, inténtelo de nuevo')
        }
        if (soluciondni===false && solucionpin===true){
            alert('El DNI no es correcto')
        }
        if (soluciondni===true && solucionpin===false){
            alert('Los PIN introducidos no son correctos')
        }
    }
}