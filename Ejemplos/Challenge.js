function Enviar(vf){
    let Ingreso = document.getElementById("TextoIngresado").value
    if (Ingreso!=""){
        document.getElementById("ParrafoConvertido").style.display = "block"
        document.getElementById("Texto").style.display = "none"
        if (vf){
            document.getElementById("ParrafoConvertido").innerText = Encriptar(Ingreso.toLowerCase())
        }
        else{
            document.getElementById("ParrafoConvertido").innerText = Desencriptar(Ingreso.toLowerCase())
        }
    }
    else{
        document.getElementById("ParrafoConvertido").style.display = "none"
        document.getElementById("Texto").style.display = "flex"
    }
}
function Buscar(letra){
    switch (letra){
        case "e":
            aux="enter"
            break;
        case "i":
            aux="imes"
            break;
        case "a":
            aux="ai"
            break;
        case "o":
            aux="ober"
            break;
        case "u":
            aux="ufat"
            break;
        default:
            aux=letra
            break;
    }
    return aux
}
function Encriptar(texto){
    let cadena = ""
    for (i=0;i<texto.length;i++){
        cadena += Buscar(texto[i])
    }
    return cadena
}
function Desencriptar(texto){
    let cadena = ""
    for (i=0;i<texto.length;i++){
        if (Buscar(texto[i]).length==1)
        {
            cadena += texto[i]
        }
        else
        {
            cadena += texto[i]
            i += Buscar(texto[i]).length-1
        }
    }
    return cadena
}
function Copiar(){
    var aux = document.createElement("input")
    aux.setAttribute("value", document.getElementById("ParrafoConvertido").innerHTML)
    document.body.appendChild(aux)
    aux.select()
    document.execCommand("copy")
    document.body.removeChild(aux)
}