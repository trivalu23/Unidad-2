let nombre = "Ana";
if (nombre.length > 7) {
    console.log("Qué nombre tan largo tienes!");
} else {
    console.log("Tu nombre no es muy largo");
}

let edad = 19;
if (edad > 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}


let num1 = 20;
let num2 = 20;

if (num1 > num2) {
    console.log(`${num1} es mayor que ${num2}`);
} else if (num1 < num2) {
    console.log(`${num1} es menor que ${num2}`);
} else {
    console.log("Ambos números son iguales");
}


edad = 21;
let estaEnUSA = true;
if (edad > 18) {
    if (estaEnUSA) {
        console.log("Eres mayor de edad y estás en USA");
    } else {
        console.log("Eres mayor de edad pero no estás en USA");
    }