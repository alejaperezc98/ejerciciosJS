// Array
// Lista vacia
let people = [];

// Lista con datos
let animal =["perro", "gato", "loro", "tigre", "conejo", "lobo"];

// Posiciones   0       1         2       3         4         5
// Animales   "perro", "gato", "loro", "tigre", "conejo", "lobo"
// Item         1       2          3      4         5         6

console.log(people);
console.log(animal);

// for (let i = 0; i < animal.length; i++) {
//     console.log(animal[i]);
// }

// Forin - Recorre todo SIN limite (Ej: Listas cortas)
// for (const an in animal) {
//     console.log(animal[an]);
// }

animal.push("Ardilla"); // Agrega al final sin saber la posicion
animal.unshift("pollito"); // Agregar al inicio
// NO usar delete porque elimina el elemento más no la posicion
animal.splice(5,1); //<- Elimina todo todito todo
// Foreach
animal.forEach(a => {
    console.log(a);
});

