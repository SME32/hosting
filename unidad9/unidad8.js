var SN = document.getElementById("esquina")
var SS = document.getElementsByClassName("Si")
var NN = document.getElementsByClassName("No")
var img = document.getElementsByClassName("cuadro22")

function verI(){
    var SecIs = document.getElementById("section1Izquierda")
    var SecIs1 = document.getElementById("section1Izquierda1")
    if (SecIs.style.display!="none"){
        SecIs.style.display = "none"
        SecIs1.style.display = "block"

        if (SN.textContent == "Si")
        {
            NN[0].style.display = "none"
            NN[1].style.display = "none"
        }
        else{
            SS[0].style.display = "none"
            SS[1].style.display = "none"
        }
    }
    else{
        SecIs.style.display = "block"
        SecIs1.style.display = "none"
    }
}

function verD(){
    var SecIs1 = document.getElementById("Seg")

    if (SecIs1.style.display=="none"){
        SecIs1.style.display = "block"
    }
    else{
        SecIs1.style.display = "none"
    }
}

function mas(){
    var SecIs = document.getElementById("cuadro1")
    var SecIs1 = document.getElementById("cuadro1_1")
    
    if (SecIs.style.display!="none"){
        SecIs.style.display = "none"
        SecIs1.style.display = "block"
    }
    else{
        SecIs.style.display = "block"
        SecIs1.style.display = "none"
    }
}

function Img(){
    
    if (img[0].style.display=="block"){
        img[0].style.display="none"
        img[1].style.display="block"
    }
    else if (img[1].style.display=="block"){
        img[1].style.display="none"
        img[2].style.display="block"
    }
    else{
        img[2].style.display="none"
        img[0].style.display="block"
    }
}
