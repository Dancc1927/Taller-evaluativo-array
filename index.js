


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

function Valores(numeros) {
    let valor = [];
    for (let i = 1; i <= numeros; i++) {
      valor.push(i * 2); 
    }
    return array;
  }
  
  const arrayDinamico = Valores(5);
  console.log(arrayDinamico); 

  let animal = ["pajaro", "buho", "araña"]
  console.log(animal.length);

  let animal1 = ["araña", "buho", "pajaro"];
  let animal2 = animal1.push("perro");
  console.log(animal2);
  console.log(animal1);

let obj = ["palo", "escoba", "trapero" ,"jabon"]
  console.log(obj.pop());
  console.log(obj)

  let color = ["azul", "rojo", "amarillo", "negro"];
  console.log(color.unshift("morado"));
  console.log(color);

  let profes =["profe", "payaso", "doctor", "cirujano", "ortopedista"];
  console.log(profes.shift());
  console.log(profes);

  let hombres = ["Camilo", "Juan", "Roberto","Sandra", "Paula"];
  console.log(hombres.slice(0, 3));

  let texto1 = ["Bienvenidos", "a la", "clase"];
  console.log(texto1.join(" "));

  let hombres2 = ["Camilo", "Juan", "Roberto","Sandra", "Paula"];
  console.log(hombres2.slice(-0, -3));
  console.log(hombres2);

  let datos2 = ["Camilo", "Juan", "Roberto","Sandra", "Paula","azul", "rojo", "amarillo", "negro"]
  let Dat3 = datos2.slice(0, 1).concat(datos2.slice(4));
console.log(datos2); 
console.log(Dat3); 

let gener = ["palo", "escoba", "trapero" ,"jabon", "profe", "payaso"];
console.log(gener.unshift(...[1, 2]));
console.log(gener);