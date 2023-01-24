var numRam = ""
var aux = 0
var vf = false
var sound1 = new Audio("./Audio/op1.mp3")
var sound2 = new Audio("./Audio/op2.mp3")
var sound3 = new Audio("./Audio/op3.mp3")
var sound4 = new Audio("./Audio/op4.mp3")
function Iniciar(){
    document.getElementsByClassName("caja")[0].style.display = "none"
    document.getElementsByClassName("caja")[1].style.display = "grid"
    mostrar()
}
async function mostrar(){
    aux = 0
    numRam += Math.round(Math.random() * 3).toString()
    document.getElementById("bloqueo").style.display = "block"
    document.getElementById("bloqueo").style.cursor = "wait"
    await delay(750)
    for (i=0;i<numRam.length;i++){
        sonido(numRam[i])
        if (numRam[i]=="0"){
            document.getElementsByClassName("btn")[0].style.display = "block"
            await delay(500)
            document.getElementsByClassName("btn")[0].style.display = "none"
            await delay(500)
        }
        if (numRam[i]=="1"){
            document.getElementsByClassName("btn")[1].style.display = "block"
            await delay(500);
            document.getElementsByClassName("btn")[1].style.display = "none"
            await delay(500)
        }
        if (numRam[i]=="2"){
            document.getElementsByClassName("btn")[2].style.display = "block"
            await delay(500);
            document.getElementsByClassName("btn")[2].style.display = "none"
            await delay(500)
        }
        if (numRam[i]=="3"){
            document.getElementsByClassName("btn")[3].style.display = "block"
            await delay(500);
            document.getElementsByClassName("btn")[3].style.display = "none"
            await delay(500)
        }
    }
    document.getElementById("bloqueo").style.display = "none"
    document.getElementById("progreso").value = aux
}
function seleccion(num){
    sonido(num)
    if (num==numRam[aux]){
        aux++
        document.getElementById("conteo").style.width = (310/numRam.length*aux)+"px"
        if (100/numRam.length*aux>10){
            document.getElementById("conteo").innerText = Math.round((100/numRam.length*aux))+" %"
        }
    }
    else{
        document.getElementById("bloqueo").style.display = "flex"
        document.getElementById("bloqueo").style.cursor = "pointer"
        document.getElementById("perder").style.display = "block"
        document.getElementById("aciertos").innerText = numRam.length-1
        vf = true
    }
    if (aux == numRam.length){
        mostrar()
    }
}

function delay(time){
    return new Promise(resolve => setTimeout(resolve,time))
}
function salir(){
    if(vf){
        numRam = ""
        document.getElementById("conteo").style.width = "0px"
        document.getElementById("conteo").innerText = ""
        document.getElementById("perder").style.display = "none"
        vf = false
        mostrar()
    }
}
function sonido(num){
    if (num=="0"){
        sound1.play()
    }
    if (num=="1"){
        sound2.play()
    }
    if (num=="2"){
        sound3.play()
    }
    if (num=="3"){
        sound4.play()
    }
}