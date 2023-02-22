var caja = document.getElementById("caja").value;
var array = ["caja"];
document.getElementById("texto").innerHTML = array;

function añadir() {
    array.push();
    document.getElementById("texto").innerHTML = array;
}
function eliminar() {
    array.pop();
    document.getElementById("texto").innerHTML = array;
}