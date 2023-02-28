const obj = '{"name":{"first":"Martin","last":"Maiorano"},"email":"martinmaiorano32@gmail.com","location":{"country":"Argentina","city":"Mar del plata","street":{"name":"*******", "number":"----"}},"date":"1995-11-14","cell":"(223)668-9376","login":{"username":"Argentina programa 4.0","password":"En curso"},"picture":"Img/CV.png"}';
const cv = JSON.parse(obj)
console.log(cv);

let btn = document.getElementsByTagName("a")
document.getElementsByTagName("img")[0].src = cv.picture
document.getElementById("Texto").innerHTML = cv.name.first+" "+cv.name.last

btn[0].addEventListener("click",function(){
    document.getElementById("Texto").innerHTML = cv.name.first+" "+cv.name.last
})
btn[1].addEventListener("click",function(){
    document.getElementById("Texto").innerHTML = cv.email
})
btn[2].addEventListener("click",function(){
    let aux = new Date(cv.date)
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
let lista = document.querySelectorAll(".list")
function activar(){
    lista.forEach((item)=>
    item.classList.remove("activar"));
    this.classList.add("activar")
}
lista.forEach((item)=>
item.addEventListener("click",activar))