// Reto 1
// Crea un objeto de persona con tus datos
let person = {
    name: "Nicole Condori",
    age: 20,
    cellphone: "123456789",
    hobbies: ["investigar", "escuchar música", "ejercitarme"]
};

console.log(person);

// Notación de punto
console.log(person.name);

// Notación de corchete
console.log(person["age"]);

console.log(person.cellphone);

console.log(person["hobbies"][0]);



// Reto 3 
// Actualiza una propiedad y agrega una nueva

// Actualizar el valor de un objeto
console.log("Actualizamos en valor de un objeto");
person.cellphone = "888888888";
console.log(person.cellphone);

// Agregar un nuevo atributo
person.birthDate = "22-08-2005";
console.log(person);


let heroes = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  }
console.log(heroes);
console.log(heroes.formed);
console.log(heroes.active)
console.log(heroes.members);
console.log(heroes.members[0]);
console.log(heroes.members[0].name);
console.log(heroes.members[0].secretIdentity);

// Reto 4

//Acceder al objeto y mostar los siguientes valores:
/*
-Damage resistance
-eternal flame
-Inferno
*/
console.log(heroes.members[1].powers[1]);
console.log(heroes.members[2].name);
console.log(heroes.members[2].powers[2]);
