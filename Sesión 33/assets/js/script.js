// Seleccionar un elemento por su ID y almacenarlo en una variable
let mainTitle = document.getElementById("main-title");

// Mostrar el elemento seleccionado en la consola
console.log(mainTitle);
// Mostrar el texto de mainTitle en la consola
console.log(mainTitle.innerText);
// Actualizar el texto de mainTitle
mainTitle.innerText = "Título cambiado dinámicamente";
// Mostrar el nuevo texto de mainTitle en la consola
console.log(mainTitle.innerText);

// Esto devuelve un arreglo, aunque solo sea un elemento
let mainTexts = document.getElementsByClassName("main-text");
console.log(mainTexts);
// Acceder a un elemento del arreglo y mostrarlo en la consola
console.log(mainTexts[0].innerText);
// Moficamos el contenido
mainTexts[0].innerText = "Párrafo cambiado";

let subTitles = document.getElementsByTagName("h2");
console.log(subTitles);
console.log(subTitles[0].innerText);
console.log(subTitles[1].innerText);
console.log(subTitles[2].innerText);

let queryMainTitle = document.querySelector("#main-title");
console.log(queryMainTitle);

let queryMainTexts = document.querySelectorAll(".main-text");
console.log(queryMainTexts);

document.getElementById("main-button").addEventListener("click", function () {
  console.log("Haz hecho click en el botón");
  document.body.style.backgroundColor = "lightblue";
});
