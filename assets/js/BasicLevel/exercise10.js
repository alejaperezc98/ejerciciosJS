const bntUser = document.getElementById("btnUser");

const userData = ()=>{
    let userName = prompt("Ingresa tu nombre");
    let age = prompt("Ingresa la edad");
    alert("Bienvenid@ "+userName+ "tu edad es: "+age);
}

bntUser.onclick = function(){
    userData();
};