function calcular(){
    var numero = document.getElementById("numero").value;
    if (numero<10000000) {
        document.getElementById("salida").innerHTML = "Error, tiene menos números que un DNI";
    }
    else if (numero>99999999) {
        document.getElementById("salida").innerHTML = "Error, tiene más números que un DNI";
    }
    else {
        document.getElementById("salida").innerHTML = "Bien, es un DNI";
    }
}