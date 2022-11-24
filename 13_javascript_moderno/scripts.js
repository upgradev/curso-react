// 1 var let const
// var x = 10;
// var y = 15;

// if (y > 10) {
//   x = 5;
//   console.log(x);
// }
// console.log(x);

// let a = 10;
// let b = 15;
// if (b > 10) {
//   let a = 5;
//   console.log(a);
// }

// console.log(a);
// let i = 100;
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.log(i);

// function logName() {
//   const name = "teste";
//   console.log(name);
// }
// const name = "ana";
// logName();
// console.log(name);

// 2 - arrow functions
// anterior
// const sum = function sum(a, b) {
//   return a + b;
// };
// const arrowSum = (a, b) => a + b;
// console.log(sum(5, 5));
// console.log(arrowSum(5, 5));

// const greeting = (name) => {
//   if (name) {
//     return "Olá " + name + "!";
//   } else {
//     return "Olá";
//   }
// };
// console.log(greeting("Ana"));
// console.log(greeting());

// const testeArrow = () => console.log("Testou");
// testeArrow();

// const user = {
//   name: "Ana",
//   sayUserName() {
//     var self = this;
//     setTimeout(() => {
//       console.log("self: ", self);
//       console.log("username: " + self.name);
//     }, 500);
//   },
//   sayUsernameArrow() {
//     setTimeout(() => {
//       console.log("this: ", this);
//       console.log("username arrow: " + this.name);
//     }, 700);
//   },
// };
// user.sayUserName();
// user.sayUsernameArrow();

// 3 - filter
// const arr = [1, 2, 3, 4, 5];
// console.log(arr);
// const highNumbers = arr.filter((n) => {
//   if (n >= 3) {
//     return n;
//   }
// });

// console.log(highNumbers);

// const users = [
//   { name: "Ana", available: true },
//   { name: "pedro", available: false },
//   { name: "joao", available: true },
//   { name: "marcos", available: false },
// ];

// const availableUsers = users.filter((user) => user.available);
// const notAvailableUsers = users.filter((user) => !user.available);
// console.log(availableUsers);
// console.log(notAvailableUsers);

// 4 - Map
// const products = [
//   { name: "Camisa", price: 10.99, category: "Roupas" },
//   { name: "Chaleira", price: 49.99, category: "Eletro" },
//   { name: "Fogão", price: 400, category: "Eletro" },
//   { name: "Calça jeans", price: 100, category: "Roupas" },
// ];

// products.map((product) => {
//   if (product.category === "Roupas") {
//     product.onSale = true;
//   }
// });
// console.log(products);

// 5 - Template literals
// const userName = "Ana";
// const age = 30;

// console.log(` O nome do usuário é ${userName} e a idade é ${age} anos `);
// // antes
// console.log(' O nome do usuário é '+ userName + ' e a idade é '+ age + ' anos ');

// 6 - destructuring
// const fruits = ["maçã ", "laranja", "mamão"];

// const [f1, f2, f3] = fruits;
// console.log(f1);
// console.log(f2);
// console.log(f3);

// const productDetails = {
//   name: "Mouse",
//   price: 39.99,
//   category: "Periferico",
//   color: "cinza",
// };

// const {
//   name: productName,
//   price,
//   category: productCategory,
//   color,
// } = productDetails;
// console.log(productName);
// console.log(productCategory);
// console.log(price);
// console.log(color);

// 7 spread operator
// const a1 = [1, 2, 3];
// const a2 = [4, 5, 6];

// const a3 = [...a1, ...a2];
// console.log(a3);

// const a4 = [0, ...a1, 4];
// console.log(a4);

// const carName = { name: "gol" };
// const carBrand = { brand: "VW" };
// const other = { km: 1000, price: 4900 };

// const car = {...carName, ...carBrand, ...other}
// console.log(car);

// 8 - classes
// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }

//   productWithDiscount(discount) {
//     return this.price * ((100 - discount) / 100);
//   }
// }

// const shirt = new Product("Camisa", 20);
// console.log(shirt.name);
// console.log(shirt.price);
// console.log(shirt.productWithDiscount(10));
// console.log(shirt.productWithDiscount(50));

// const tenis = new Product("Tenis verde", 30);
// console.log(tenis.productWithDiscount(50));

// 9 - herança
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  productWithDiscount(discount) {
    return this.price * ((100 - discount) / 100);
  }
}

class productWithAttributes extends Product {
  constructor(name, price, colors) {
    super(name, price);
    this.colors = colors;
  }

  showColors() {
    console.log("As cores são: ");
    this.colors.forEach(color => {
        console.log(color);
    });
  }
}

const hat = new productWithAttributes("Chapeu", 29.99, ["preto", "azul", "verde"])
console.log(hat.name);
console.log(hat.productWithDiscount(50));
hat.showColors();
