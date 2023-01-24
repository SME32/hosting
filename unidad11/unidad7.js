var nomUser = prompt("¿Cual es su nonbre?")
var prof = prompt("¿Cual es su profecion?")
var integ = prompt("¿Cuantos integran tu grupo familiar?")
var edades = prompt("¿Cuantos menores de edad hay?")
var esquina = prompt("¿Prefiere los terrenos de las esquinas? Si/No")
var mayor = integ-edades

function cambiar(a){
    var sd = document.getElementById("Fecha")
    if (a){
        sd.type="date"
        sd.min="2000-01-01"
        sd.max="2002-12-31"
    }
    else{
        if (sd.value==""){
            sd.type="text"
        }
    }
}