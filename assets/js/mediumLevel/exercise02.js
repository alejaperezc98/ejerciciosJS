// Ciclo for
const btnMedium= document.getElementById("btnMedium");

// funcion
const spam = () =>{
    for (let i = 0; i < 5; i++) {
        console.log("Repetición #", i);
        
    }
};

// Evento
btnMedium.onclick = () =>{
    spam();
}