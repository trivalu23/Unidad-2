// Reto 1
/*
let name = prompt("Ingresa tu nombre");
console.log(`Buenas noches ${name}`);

let num1 = parseInt(prompt("Ingresa un número"));
let num2 = parseInt(prompt("Ingresa otro número"));
console.log(`${num1} + ${num2} = ${num1 + num2}`);
*/

// RETO
// Crea un programa que pida un número entero al usuario
// e indique si este número es par o no

let numero = parseInt(prompt("Ingresa un número entero:"));

if (numero % 2 === 0) {
  console.log(numero + " es un número par.");
  alert(numero + " es un número par.");
} else {
  console.log(numero + " es un número impar.");
  alert(numero + " es un número impar.");
}
