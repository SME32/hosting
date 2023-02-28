document.getElementsByTagName("a")[0].addEventListener("click",function(){
    document.getElementById("Texto").style.backgroundColor = "orange"
})
document.getElementsByTagName("a")[0].addEventListener("click",function(){
    document.getElementById("Texto").setAttribute("data-content", hola)
    document.getElementById("Texto").dataset.content = hola
})