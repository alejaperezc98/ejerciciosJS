/**
 * Guardar los siguiente datos:
 * Nombre:
 * apellido
 * edad
 * telefono
 * celular
 * dirección
 * */

const btnUno = document.getElementById("btnUno");
const datos = document.getElementById("datos");

const puntoUno = () =>{
    let userName = prompt("Ingresa tu nombre").toLowerCase();
    let userApe = prompt("Ingresa tu apellido").toLowerCase();
    let age = prompt("Ingresa tu edad");
    let cell = prompt("Ingresa tu celular");
    let dir = prompt("Ingresa tu dirección").toLowerCase();

    if(userName==null || userName=="" || userApe==null || userApe=="" || age==null || age=="" || cell==null || cell=="" || dir==null || dir==""){
        return alert("Datos Incompletos");
    }
    else{
        datos.innerHTML="Nombre: "+userName+"<br> Apellido: "+userApe+"<br> Edad: "+age+"<br> Celular: "+cell+"<br> Direeción: "+dir;
        localStorage.setItem("name", userName);
        localStorage.setItem("apellido", userApe);
        localStorage.setItem("edad", age);
        localStorage.setItem("celular", cell);
        localStorage.setItem("direccion", dir);
    }
}

if (localStorage.getItem("name") && localStorage.getItem("apellido") && localStorage.getItem("edad") && localStorage.getItem("celular") && localStorage.getItem("direccion")) {
    datos.innerHTML="Nombre: "+localStorage.getItem("name")+"<br> Apellido: "+localStorage.getItem("apellido")+"<br> Edad: "+localStorage.getItem("edad")+"<br> Celular: "+localStorage.getItem("celular")+"<br> Direeción: "+localStorage.getItem("direccion");
}

btnUno.onclick = () =>{
    puntoUno();
}

/**
 * SEGUNDO PUNTO
 */

let empleado="Pancracio";
let salario=5000;

const btnDos = document.getElementById("btnDos");
const etiquetaDos = document.getElementById("segundo");

const puntoDos = () => {
    etiquetaDos.innerHTML="Nombre empleado: "+empleado+"<br> Salario: "+salario;
}

btnDos.onclick = () => {
    puntoDos();
};

/**
 * TERCER PUNTO
 */

const btnTres = document.getElementById("btnTres");

const puntoTres = () => {

    let palabra =prompt("Ingrese una de las siguinetes palabras: \nCasa \nMesa \nPerro \nGato");

    if (palabra==null || palabra==""){
        return alert ("No debe dejar el campo vacio");
    }
    palabra = palabra.toLowerCase();

    if (palabra=="casa" || palabra=="mesa" || palabra=="perro" || palabra=="gato"){
        switch (palabra){
            case "casa":
                alert ("La traduccion de "+palabra+" es: house");
                break;
            case "mesa":
                alert ("La traduccion de "+palabra+" es: table");
                break;
            case "perro":
                alert ("La traduccion de "+palabra+" es: og");
                break;
            case "gato":
                alert ("La traduccion de "+palabra+" es: cat");
                break;
        }
    }
    else {
        alert ("NO debe ingresar palabras diferentes a: \nCasa \nMesa \nPerro \nGato");
    }

}

btnTres.onclick = () => {
    puntoTres();
}

/**
 * CUARTO PUNTO
 */

const btnCuatro = document.getElementById("btnCuatro");

const cuarto = () => {
    let dig = prompt ("Ingresa un departamento").toLowerCase();

    if (dig != "") {
        switch (dig) {
            case "amazonas":
                alert ("La capital de "+dig+" es Leticia");
                break;
            case "antioquia":
                alert ("La capital de "+dig+" es Medellin");
                break;
            case "arauca":
                alert ("La capital de "+dig+" es Arauca");
                break;
            case "atlantico":
                alert ("La capital de "+dig+" es Barranquilla");
                break;
            case "bogota":
                alert ("La capital de "+dig+" es bogotá");
                break;
            case "bolivar":
                alert ("La capital de "+dig+" es Cartagena de indias");
                break;
            case "boyaca":
                alert ("La capital de "+dig+" es tunja");
                break;
            case "caldas":
                alert ("La capital de "+dig+" es Arauca");
                break;
            case "caqueta":
                alert ("La capital de "+dig+" es Florencia");
                break;
            case "casanare":
                alert ("La capital de "+dig+" es Yopal");
                break;
            case "cauca":
                alert ("La capital de "+dig+" es Popayan");
                break;
            case "cesar":
                alert ("La capital de "+dig+" es Valledupar");
                break;
            case "choco":
                alert ("La capital de "+dig+" es quibdo");
                break;
            case "cordoba":
                alert ("La capital de "+dig+" es Monteria");
                break;
            case "cundinamarca":
                alert ("La capital de "+dig+" es Bogotá");
                break;
            case "guainia":
                alert ("La capital de "+dig+" es Inírida");
                break;
            case "guaviare":
                alert ("La capital de "+dig+" es San José del Guaviare");
                break;
            case "huila":
                alert ("La capital de "+dig+" es Neiva");
                break;
            case "guiajira":
                alert ("La capital de "+dig+" es Riohacha");
                break;
            case "magdalena":
                alert ("La capital de "+dig+" es Santa Marta");
                break;
            case "meta":
                alert ("La capital de "+dig+" es Villavicencio");
                break;
            case "nariño":
                alert ("La capital de "+dig+" es San Juan de Pasto");
                break;
            case "norte de santander":
                alert ("La capital de "+dig+" es San José de Cúcuta");
                break;
            case "putumayo":
                alert ("La capital de "+dig+" es Mocoa");
                break;
            case "quindio":
                alert ("La capital de "+dig+" es Armenia");
                break;
            case "risaralda":
                alert ("La capital de "+dig+" es Pereira");
                break;
            case "san andres y providencia":
                alert ("La capital de "+dig+" es San Andrés");
                break;
            case "santander":
                alert ("La capital de "+dig+" es Bucaramanga");
                break;
            case "sucre":
                alert ("La capital de "+dig+" es Sincelejo");
                break;
            case "tolima":
                alert ("La capital de "+dig+" es Ibagué");
                break;
            case "valle del cauca":
                alert ("La capital de "+dig+" es Cali");
                break;
            case "vaupes":
                alert ("La capital de "+dig+" es Mitú");
                break;
            case "vichada":
                alert ("La capital de "+dig+" es Puerto Carreño");
                break;
        }
        
    }
}

btnCuatro.onclick = () => {
    cuarto();
}
