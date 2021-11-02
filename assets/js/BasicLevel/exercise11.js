const btnUser = document.getElementById("btnUser");

const netflix = () =>{
// Variables
let userName = prompt("Ingresa tu nombre");
let edad = prompt("Ingresa tu edad");
let epilepcia =prompt("Tiene Epilepcia? Si / No");
//Vuelve el texto en min

console.log(userName,edad,epilepcia);

if (userName == null || edad == null || epilepcia == null || userName == "" || edad == "" || epilepcia == ""){
    return alert("Error no se puede dejar datos vacios");
}

    epilepcia=epilepcia.toLowerCase();
    userName=userName.toLowerCase();

if (edad>=18 && epilepcia=="no") {
    alert("Puede ver el catalogo");
} else {
    if ( epilepcia=="no" || epilepcia=="si") {
        alert("No puede ver el catalogo");
    } else {
        alert("Solo responder si o no");
    }
}

if(edad<=10){
    alert("Catalogo infantil");
}

if(userName=="juan" || edad==100){
    alert("Catalogo gratis yeii");
}
};

btnUser.onclick =()=>{
    netflix();
};

/**
 * > Mayor
 * >= Mayor o igual
 * < Menor
 * <= Menor o igual
 * == igual (todo)
 * === compara TIPO y VALOR
 * != Diferente
 * !== Diferente (Tipo y Valor)
*/