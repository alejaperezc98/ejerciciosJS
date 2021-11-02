// LocalStorage
// Variables globales
const btnUser = document.getElementById("btnUser");
const welcome = document.getElementById("welcome");

const userData = ()=>{
    let userName= prompt("Ingresar el nombre");
    welcome.innerHTML = "Bienvenido/a: "+userName;
    localStorage.setItem("name", userName);
}

if (localStorage.getItem("name")) {
    welcome.innerHTML= "Bienvenido/a: "+localStorage.getItem("name");
}

btnUser.onclick = ()=>{
    userData();
}
