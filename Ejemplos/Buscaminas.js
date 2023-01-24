var Aux1 = -1
var BombUb = []
var UbiVacia = []
var CeldaCero = []
var IniciarJuego = true

window.oncontextmenu = function() {
    return false;
}

function tabla(){
    col = Math.round(document.getElementById("ColI").value)
    bomb = Math.round(document.getElementById("BombI").value)

    if (col == "" || isNaN(col) || col > 20 || bomb == "" || isNaN(bomb) || bomb >= col*col){
        document.getElementById("ColI").value = ""
        document.getElementById("BombI").value = ""
        document.getElementById("Error").style.display = "flex"
        document.getElementById("TituloMensaje").innerHTML = "Error"
        document.getElementById("ContenidoMensaje").innerHTML = "Los valores no son correctos"
        if (bomb >= col*col && col != "" && bomb != ""){
            document.getElementById("CapturaDeError").innerHTML = "La cantidad de bombas es igual o superio al tamaño del tablero<br><br>Tamaño del tablero: " + col*col + "<br>Cantidad de bombas: " + bomb
        }
        else{
            document.getElementById("CapturaDeError").innerHTML = ""
        }
    }
    else{
        document.getElementById("tabla").style.display="block"
        document.getElementById("menu").style.display="none"
        document.getElementById("tabla").style = "grid-template-columns: repeat(" + col + ", 1fr);"
        
        for (i=0;i<col*col;i++){
            document.getElementById("tabla").innerHTML += "<div id=C" + i + " class='celda' onclick='calcul(" + i + ")' oncontextmenu='ClickDerecho(" + i + ")'></div>"
        }
    }
}

function verificarCeros(num){
    if (!CeldaCero.includes(num)){
        CeldaCero.push(num)
    }
    if (num%col!=col-1 && !CeldaCero.includes(num+1)){
        CeldaCero.push(num+1)
    }
    if (num%col!=0 && !CeldaCero.includes(num-1)){
        CeldaCero.push(num-1)
    }
    
    if (num+col<col*col){
        if (!CeldaCero.includes(num+col)){
            CeldaCero.push(num+col)
        }
        if (num%col!=col-1 && !CeldaCero.includes(num+col+1)){
            CeldaCero.push(num+col+1)
        }
        if (num%col!=0 && !CeldaCero.includes(num+col-1)){
            CeldaCero.push(num+col-1)
        }
    }

    if (num-col>=0){
        if (!CeldaCero.includes(num-col)){
            CeldaCero.push(num-col)
        }
        if (num%col!=col-1 && !CeldaCero.includes(num-col+1)){
            CeldaCero.push(num-col+1)
        }
        if (num%col!=0 && !CeldaCero.includes(num-col-1)){
            CeldaCero.push(num-col-1)
        }
    }
}

function verificar(num){
    let CantBomb = 0
    if (BombUb.includes(num+1) && num%col!=col-1){
        CantBomb++
    }
    if (BombUb.includes(num-1) && num%col!=0){
        CantBomb++
    }
    
    if (BombUb.includes(num+col)){
        CantBomb++
    }
    if (BombUb.includes(num+col+1) && num%col!=col-1){
        CantBomb++
    }
    if (BombUb.includes(num+col-1) && num%col!=0){
        CantBomb++
    }

    if (BombUb.includes(num-col)){
        CantBomb++
    }
    if (BombUb.includes(num-col+1) && num%col!=col-1){
        CantBomb++
    }
    if (BombUb.includes(num-col-1) && num%col!=0){
        CantBomb++
    }

    if (CantBomb == 0){
        verificarCeros(num)
    }
    if (!UbiVacia.includes(num)){
        UbiVacia.push(num)
    }
    return CantBomb
}

function Terminar(resul){
    document.getElementById("TituloMensaje").innerHTML = "Game Over"
    document.getElementById("ContenidoMensaje").innerHTML = "El juego ha terminado"
    document.getElementById("CapturaDeError").innerHTML = resul
    document.getElementById("Error").style.display = "flex"

    for (i=0;i<BombUb.length;i++){
        document.getElementById("C"+BombUb[i]).innerHTML = "X"
        document.getElementById("C"+BombUb[i]).style.color = "white"
    }
    document.getElementById("Regresar").style.display = "block"
}

function VericiarAccion(num){
    
    document.getElementById("C"+num).style.backgroundColor = "black"
    document.getElementById("C"+num).style.color = "white"
    document.getElementById("C"+num).innerHTML = verificar(num)

    if (UbiVacia.length==col*col-bomb)
    {
         Terminar("Has <strong class='verde'>encontrado</strong> todas las bombas")
    }

    if (Aux1<CeldaCero.length-1){
        Aux1++
        VericiarAccion(CeldaCero[Aux1])
    }
}

function calcul(num){
    let aux
    let cont = 0
    if (IniciarJuego){
        while (cont<bomb){
            aux = Math.floor(Math.random()*(col*col))
            if (num == aux || BombUb.includes(aux)){
                aux = Math.floor(Math.random()*(col*col)) 
            }
            else{
                BombUb.push(aux)
                cont++
            }
        }
        IniciarJuego = false
        cont = 0
        VericiarAccion(num)
    }
    else{

        if (document.getElementById("C"+num).textContent != "X"){
            if (BombUb.includes(num)){
                Terminar("Has <strong>pisado</strong> una bomba")
            }
            else{
                if (!UbiVacia.includes(num)){
                    VericiarAccion(num)
                }
            }
        }
    }
}

function MensEr(){
    document.getElementById("Error").style.display = "none"
}

function ClickDerecho(num){
    if (!UbiVacia.includes(num)){
        let bandera = document.getElementById("C"+num).textContent
        if (bandera == ""){
            document.getElementById("C"+num).innerHTML = "X"
            document.getElementById("C"+num).style.color = "black"
        }
        else{
            if (bandera == "X")
            {
                document.getElementById("C"+num).innerHTML = "O"
                document.getElementById("C"+num).style.color = "white"
            }
            else{
                document.getElementById("C"+num).innerHTML = ""
            }
        }
    }
}

function Regre(){
    cont = 0
    Aux1 = 0
    BombUb = []
    UbiVacia = []
    CeldaCero = []
    IniciarJuego = true
    document.getElementById("Regresar").style.display = "none"
    document.getElementById("tabla").style.display="none"
    document.getElementById("menu").style.display="block"
    document.getElementById("tabla").innerHTML = ""
}