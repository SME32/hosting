var vf = true, SN = true
var tabla = [0,0,0,0,0,0,0,0,0]
var celda = document.getElementsByTagName("div")
var Xpuntos = 0, Opuntos = 0, cont = 0
function accion(num){
    if (vf && tabla[num-10] == 0){
        celda[num].style.backgroundImage = ("url('./Img/X.png')")
        tabla.splice((num-10),1,"X")
        vf = false
        cont++
    }
    else if(vf==false && tabla[num-10] == 0){
        celda[num].style.backgroundImage = ("url('./Img/O.png')")
        tabla.splice((num-10),1,"O")
        vf = true
        cont++
    }
    if (tabla[0]==tabla[1] && tabla[1]==tabla[2] && tabla[0]!=0){
        verificar(1,1,1)
    }
    if (tabla[3]==tabla[4] && tabla[4]==tabla[5] && tabla[3]!=0){
        verificar(4,1,1)
    }
    if (tabla[6]==tabla[7] && tabla[7]==tabla[8] && tabla[6]!=0){
        verificar(7,1,1)
    }

    if (tabla[0]==tabla[3] && tabla[3]==tabla[6] && tabla[0]!=0){
        verificar(1,3,3)
    }
    if (tabla[1]==tabla[4] && tabla[4]==tabla[7] && tabla[1]!=0){
        verificar(2,2,3)
    }
    if (tabla[2]==tabla[5] && tabla[5]==tabla[8] && tabla[2]!=0){
        verificar(3,1.8,3)
    }

    if (tabla[0]==tabla[4] && tabla[4]==tabla[8] && tabla[0]!=0){
        verificar(1,3,4)
    }
    if (tabla[6]==tabla[4] && tabla[4]==tabla[2] && tabla[6]!=0){
        verificar(3,1.4,2)
    }
    if (cont == 9){
        resetear()
    }
}
function verificar(num,num1,num2){
    cont=0
    for (i=num;i<=((num+2)*num1);i=i+num2){
        celda[i].style.background = "green"
    }
    resetear()
    if (vf){
        Opuntos++
        vf=false
    }
    else{
        vf=true
        Xpuntos++
    }
    document.getElementsByTagName("span")[0].innerText = Xpuntos
    document.getElementsByTagName("span")[1].innerText = Opuntos
}
function resetear(){
    if (cont==9){
        document.getElementsByTagName("p")[0].style.display = "none"
        document.getElementsByTagName("p")[1].style.display = "none"
        document.getElementsByTagName("h1")[0].style.display = "block"
    }
    else{
        document.getElementsByTagName("p")[0].style.display = "block"
        document.getElementsByTagName("p")[1].style.display = "block"
        document.getElementsByTagName("h1")[0].style.display = "none"
    }
    cont = 0
    document.getElementById("bloqueo").style.display = "flex"
    document.getElementById("mensaje").style.display = "flex"
}
function iniciar(){
    if (SN){
        document.getElementById("mensaje").style.display = "none"
        SN=false
    }
    else{
        document.getElementById("bloqueo").style.display = "none"
        for (i=1;i<=9;i++){
            celda[i].style.backgroundColor = "rgb(141, 0, 0)"
        }
        for (i=9;i<=18;i++){
            celda[i].style.backgroundImage = ""
        }
        tabla = [0,0,0,0,0,0,0,0,0]
        SN=true
    }
}

let aux = 1
let aux1 = 1
for (i=1;i<=18;i++){
    celda[i].style.gridColumn = aux1
    celda[i].style.gridRow = aux
    aux1++
    if (i%3==0){
        aux++
        aux1 = 1
    }
    if (i==9){
        aux = 1
    }
}
for (i=1;i<=9;i++){
    celda[i].style.backgroundColor = "rgb(141, 0, 0)"
}