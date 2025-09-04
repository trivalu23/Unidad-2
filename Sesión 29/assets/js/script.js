/*
// Arreglo de números
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Mostrar arreglo
console.log(numbers);


// Podemos acceder a los elementos por índice, 
// además de obtener el tamaño(length) del array
let size = numbers.length;
console.log(`El tamaño del array es ${size}`);
console.log(`El primer elemento del arreglo: ${numbers[0]}`);
console.log(`El último elemento del arreglo: ${numbers[numbers.length - 1]}`);


// Reto 1
//Arreglo de nombres de frutas
let frutas = ["Manzana", "Plátano", "Naranja", "Kiwi", "Guanábana"];
// Mostrar arreglo
console.log(frutas);

// ==============================================

// Bucles

let num1 = 18;

console.log(num1);

// Aumentando el valor de num1 en 1 y 3
num1 = num1 + 1;
console.log(num1);

num1 = num1 + 3;
console.log(num1);

// Podemos reducir estas expresiones
num1 += 1;
console.log(num1);

num1 += 3;
console.log(num1);

// Operador de incremento y decremento
num1++;
console.log(num1);

num1--;
console.log(num1);

// Bucle for
console.log("Empieza el bucle");

for (let i = 1; i <= 10; i++) {
    console.log("Empieza la iteración ");
    console.log(`Valor de i = ${i}`);
    console.log("Fin de la iteración(i se actualiza) ");
    console.log("---------");
}

//Imprime los números del 1 al 100 de 1 en 1
console.log("Números del 1 al 100");
for (let i = 10; i <= 100; i += 10) {
    console.log(i);
}

// Reto 1
// Muestra los números del 0 al 26, de 3 en 3
console.log("Números del 0 al 26");
for (let i = 0; i <= 26; i += 3) {
    console.log(i);
}



// CONTANDO DEL 1 AL 10, DE 1 EN 1
    console.log("Números del 1 al 10");
    let iterator = 1;

    while (iterator <= 10) {

        console.log(iterator);
        iterator++;
    }

// Reto: Mostrar los números del 15 al 75, de 5 en 5. Con bucle while
console.log("Números del 15 al 75");
let iterato = 15;

while (iterato <= 75) {

    console.log(iterato);
    iterato += 5;
}
*/

// Bucle con do ... while
iterator = 12;
do {
    console.log(iterator);
    iterator++;
} while (iterator <= 10);

// Iterar -> Recorrer
console.log("Iterar un arreglo con for");
let words = ["Hola", "Conejo", "Agua", "Pantalla", "Saludo"];
    console.log(words);

    for (let i = 0; i <= words.length - 1; i++) {
        console.log(words[i]);
    }

    
