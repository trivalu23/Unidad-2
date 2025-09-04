class Person {
  constructor(firstName, lastName, age, height, weight, hobbie) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.hobbies = hobbie;
  }

  decirHola() {
    console.log("Hola desde el método");
  }

  presentar() {
    console.log(
      `Hola buenas noches, me llamo ${this.firstName} ${this.lastName} y tengo ${this.age} años`
    );
  }
}

let person1 = new Person("Nicole", "Condori", 20, 1.53, 50, [
  "Leer",
  "Escuchar música",
]);

console.log(person1);
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.height);
console.log(person1.weight);
console.log(person1.hobbies);

person1.presentar();
