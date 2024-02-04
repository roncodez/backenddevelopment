console.log('hello world');

// declaring variables - let, var, const
let var1 = 10;
let name = "Ronit";
console.log(var1, name, "hi!");
const value = 10;

// 2 separate console.log output on 2 different lines 
console.log("hello")
console.log("world")

// special characters 
console.log("The new apple iphone \n has been launched");

// arithmetic operators 
let a = 10, b = 20;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b); // exponentiation 

console.log(10&&6); // short-circuiting 

let num1 = -0;
let num2 = Infinity;
console.log(num1, typeof num1);
console.log(num2, typeof num2);

console.log(NaN == NaN); // false, the only number that is not equal to itself 
console.log(typeof null); // object 

let age = 21;
if(age >= 18)
    console.log("adult");
else if(age>=13)
    console.log("Teenager");
else 
    console.log("kid");

function mynewfunction(name) {
    console.log("Hello, welcome to my new function, ", name);
}
mynewfunction("Samar");

typeof(console.log('k')); // should give undefined 

let str = "I love momos";
console.log(str[0]);
console.log(str.length);
str[0] = 'B'; // not possible, strings are immutable 

let Student = {
    name: "Sanket",
    age: 24
};

console.log(Student.name);
console.log(Student["age"]);
console.log(Object.keys(Student));

// String interpolation demonstration 
let fruitILike = "strawberry";
console.log(`Lets grow some ${fruitILike}`);
