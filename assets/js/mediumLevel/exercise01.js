// Fechas
let registerDate = new Date();
// Sacamos en año
let year = registerDate.getFullYear();
// El codigo inicia desde cero
// 0 - enero 1- febrero, por eso el más uno
let month = registerDate.getMonth()+1;
let day = registerDate.getDate();

console.log(registerDate);
//console.log(month+"/"+year);
console.log(`${day}/${month}/${year}`);