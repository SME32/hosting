let cv = {}
function rand(){
    fetch("https://randomuser.me/api/?inc=gender,name,nat,picture,email,cell,picture,dob,location,login")
    .then((response) => response.json())
    .then(function(data){
        cv = data.results[0]
        lista.forEach((item)=>
        item.classList.remove("activar"))
        document.getElementsByClassName("list")[0].classList.add("activar")
        let btn = document.getElementsByTagName("a")
        document.getElementsByTagName("img")[0].src = cv.picture.large
        document.getElementById("Texto").innerHTML = cv.name.first+" "+cv.name.last

        btn[0].addEventListener("click",function(){
            document.getElementById("Texto").innerHTML = cv.name.first+" "+cv.name.last
        })
        btn[1].addEventListener("click",function(){
            document.getElementById("Texto").innerHTML = cv.email
        })
        btn[2].addEventListener("click",function(){
            let aux = new Date(cv.dob.date)
            document.getElementById("Texto").innerHTML = aux.getDate() + "/" + aux.getMonth() + "/" + aux.getFullYear()
        })
        btn[3].addEventListener("click",function(){
            document.getElementById("Texto").innerHTML = "Pais: "+cv.location.country+"<br>Ciudad: "+cv.location.city+"<br>Direccion: "+cv.location.street.name+" "+cv.location.street.number
        })
        btn[4].addEventListener("click",function(){
            document.getElementById("Texto").innerHTML = cv.cell
        })
        btn[5].addEventListener("click",function(){
            document.getElementById("Texto").innerHTML = "Usuario: "+cv.login.username+"<br>Contraseña: "+cv.login.password
        })
    })
}
let lista = document.querySelectorAll(".list")
function activar(){
    lista.forEach((item)=>
    item.classList.remove("activar"));
    this.classList.add("activar")
}
lista.forEach((item)=>
item.addEventListener("click",activar))
rand()