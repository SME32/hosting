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

var cont = [["36.00 Americana","2.250.000","1.252.500","55.320"],["28.80 Americana","1.780.000","1.002.500","44.280"],["46.80 Americana","2.890.000","1.627.500","71.885"],["57.60 (con galería)","3.900.000","2.172.500","95.955"],["46.80 CUBE","3.325.000","1.870.250","82.605"],["69.12 (con cochera)","5.610.000","3.115.000","137.600"],["106.56 CUBE","7.565.000","4.260.000","188.150"],["116.64 CUBE con Cochera","10.110.000","5.605.000","247.555"],["120.20 CUBE con Cochera","12.250.000","6.252.500","300,245"]]
var cont1 = []
var i = 0
function grilla(){
    while(i<9){
        cont1 = cont[i]
        document.getElementById("filas").innerHTML += '<div class="col-12 col-sm-6 col-lg-4 p-4"><div class="card"><div class="card-img-top" alt="Casa' + i + '" id="col' + i + 'I"></div><div class="card-body"><h5 class="card-title">'+ cont1[0] +'</h5><p class="card-text">$'+ cont1[1] +' (*) contado<br><span class="card-text SM">* Los precios no corresponden a la Patagonia. Si desea instalar una vivienda en la Patagonia consúltenos.</span><br>Entrega: $'+ cont1[2] +'<br>60 cuotas de $'+ cont1[3] +'</p><!-- Boton de error --><button type="button" class="btn Reser container" data-bs-toggle="modal" data-bs-target="#Planos" onclick="PlanosI(null,false)">Reservar ahora</button><!-- Boton de plano --><button type="button" class="btn plan container" data-bs-toggle="modal" data-bs-target="#Planos" onclick="PlanosI(' + i + ',true)">Planos</button><a href="#section2" class="btn consult container">Consultar</a></div></div></div>'
        i++
    }
}