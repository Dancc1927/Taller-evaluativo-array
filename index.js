


let array = ["avion","ave","muro"];

let arrayDatos = ["10", "Maria", true];
console.log(arrayDatos);

let Constructor = new array("rojo", "pez", "perro", 1,2,3);
console.log(Constructor);

let datos = ("perro", "gato", "ave");
let result = datos.from({length:10},(_, index) => index + 1);
console.log(result);

let num = [1,2,3,4];
console.log(num.fill(2,4));

let mensaje = ["Buenas vibras para todos"];
let MenSa= mensaje.split("  ");
console.log(MenSa);

let numeros = ("1","2","3");
let texto = ("Ana","Mario")
let ArrayCombinados = [...numeros, ...texto];
console.log(ArrayCombinados);

let Duplicar = [1, 2, 2, 3, 3, 4, 5, 1];
let setUnico = new Set(Duplicar);
let Unico = [...setUnico];
console.log(Unico); 