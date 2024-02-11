// Getters and Setters

// class Passener{

//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     //Getter
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// const john = new Passener('John', 'Doe');
// console.log(john.fullName);

// Setter

// class Passenger {
//     internalName = "";

//     constructor(name) {
//       this.name = name;
//     }

//     set name(value) {
//       if (!value) {
//         throw new Error("name must be a value");
//       }
//       if (value.lengthv < 1) {
//         throw new Error("value has few characters");
//       }

//       this.internalName = value;
//     }
//   }

//   let ljubisha = new Passenger('Ljubisha Milosov');
//   console.log(ljubisha.internalName);

// Getter and Setter Pair

class Passenger {
  internalName = "";

  constructor(name) {
    this.name = name;
  }

  set name(value) {
    if (!value) {
      throw new Error("name must be a value");
    }
    if (value.lengthv < 1) {
      throw new Error("value has few characters");
    }

    this.internalName = value;
  }

  getName() {
    return this.internalName;
  }
}

const ljubisha = new Passenger("Ljubisha Milosov");
console.log((ljubisha.internalName = "Ljubi"));
