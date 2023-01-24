function Cifrar(){
    let cadena = document.getElementById("frase").value;
    let cifrado = document.getElementById("base").value;
    let cifrado1 = document.getElementById("multiplicador").value;
    let lista = [];

    if (cifrado==1){
        cifrado++
    }
    if (cifrado1==1){
        cifrado1++
    }
    if (cifrado==cifrado1){
        cifrado1++
    }
    for (i=0;i<cadena.length;i++){
        lista.push(cadena.charCodeAt(i)*cifrado);
    }
    for (i=0;i<cadena.length;i++){
        lista.splice(i*2,0,cadena.charCodeAt(i)*cifrado*cifrado1)
    }
    cadena = ""
    for (i=0;i<lista.length;i++){
        cadena += String.fromCharCode(lista[i]);
    }
    document.getElementById("Respuesta").innerText = cadena
}
function Decifrar(){
    let cadena = document.getElementById("frase").value;
    let cifrado = document.getElementById("base").value;
    let lista = [];
    for (i=1;i<cadena.length;i=i+2){
        lista.push(cadena.charCodeAt(i)/cifrado)
    }
    cadena = ""
    for (i=0;i<lista.length;i++){
        cadena += String.fromCharCode(lista[i]);
    }
    document.getElementById("Respuesta").innerText = cadena
}

function Copiar() {
    var aux = document.createElement("input")
    aux.setAttribute("value", document.getElementById("Respuesta").innerHTML)
    document.body.appendChild(aux)
    aux.select()
    document.execCommand("copy")
    document.body.removeChild(aux)
}

function Config(vf){
    if (vf){
        document.getElementById("ConfigPantalla").style.display = "Flex"
        document.getElementById("Caja").style.display = "none"
    }
    else{
        document.getElementById("ConfigPantalla").style.display = "none"
        document.getElementById("Caja").style.display = "Flex"
    }
}