


let array = ["avion","ave","muro"];

let arrayDatos = ["10", "Maria", true];
console.log(arrayDatos);

let Constructor = new array("rojo", "pez", "perro", 1,2,3);
console.log(Constructor);

let datos = ("perro", "gato", "ave");
let result = datos.from({length:10},(_, index) => index + 1);
console.log(result);
