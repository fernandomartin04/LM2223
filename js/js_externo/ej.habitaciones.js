function consulta() {
    var adultos = document.getElementById("adultos").value;
    var ninos = document.getElementById("ninos").value;
    var i=1;
    var s=1;
    var divisores_adul = [];
    var divisores_nin = [];

    while (i<=adultos) {
        if (adultos%i==0) {
            divisores_adul.push(i);
        }
        i++;
    }

    while (s<=ninos) {
        if (ninos%s==0) {
            divisores_nin.push(s);
        }
        s++;
    }

    if (adultos=="" || ninos=="") {
        alert("ERROR, introduzca algún valor en cada uno de los campos.");
    }
    else {
        if (adultos==1 && ninos==0 || divisores_adul.includes(2,1) && ninos==0) {
            var aleatorio =  Math.random(); 
            aleatorio = aleatorio * 100 + 1;
            aleatorio = Math.trunc(aleatorio);

            alert("Necesitará habitaciones Dobles. Hay " + aleatorio + " habitaciones dobles disponibles en estos momentos.");
        }
        else if (divisores_adul.includes(2,1) && (ninos%2)!=0) {
            var aleatorio =  Math.random(); 
            aleatorio = aleatorio * 100 + 1;
            aleatorio = Math.trunc(aleatorio);

            alert("Necesitará habitaciones Dobles con Supletoria. Hay " + aleatorio + " habitaciones dobles disponibles en estos momentos.");
        }
        else if (divisores_adul.includes(3,1) && ninos==0) {
            var aleatorio =  Math.random(); 
            aleatorio = aleatorio * 100 + 1;
            aleatorio = Math.trunc(aleatorio);

            alert("Necesitará habitaciones Triples. Hay " + aleatorio + " habitaciones dobles disponibles en estos momentos.");
        }
        else if (divisores_adul.includes(2,1) && divisores_nin.includes(2,1)) {
            var aleatorio =  Math.random(); 
            aleatorio = aleatorio * 100 + 1;
            aleatorio = Math.trunc(aleatorio);

            alert("Necesitará habitaciones Familiares. Hay " + aleatorio + " habitaciones dobles disponibles en estos momentos.");
        }
        else {
            alert("Sois muchos, os recomendamos nuestras habitaciones familiares con capacidad de hasta 6 personas cada una");
        }
    }        
}
