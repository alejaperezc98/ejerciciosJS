// Variables globales
const btnUser = document.getElementById("btnUser");
const welcome = document.getElementById("welcome");

const userData = ()=>{
    let userName= prompt("Ingresar el nombre");
    welcome.innerHTML = "Bienvenido/a: "+userName;
}

btnUser.onclick = ()=>{
    userData();
}

