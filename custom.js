// answer no: 1
let name = 'jhon';
let age = 25;

console.log(`my name is ${name} I am ${age} years old`);




// answer no: 2

let num = 7;

if(num % 2 ===0) {
    console.log('The number is even');
} else{
    console.log('The number is odd');
}


// answer no: 3

for (let i = 1; i <= 5; i++) {
console.log(i);
}


// answer no: 4
function addNumbere (num1, num2) {
    return num1 + num2;
}

let result = addNumbere(3,7);
console.log(result);

// answer no: 5

let fruits =["apple", "banana","cherry"];

fruits.push("orange");

console.log(`the first fruit is ${fruits[0]}`);
console.log(`The total number of fruits is ${fruits.length}`);


// answer no: 6

let numbers = [1,2,3,4,5,];
 numbers.forEach((number) => {
    console.log(number*2);
    
 });

 // answer no: 7
 
let button = document.getElementById("changeText");
let heading = document.querySelector("#container h1");

button.addEventListener("click", () => {
    heading.textContent = "You clicked the button!";
});

 // answer no: 8
 let text = "hello world";

 let upperText = text.toUpperCase();

 console.log(upperText);

 // answer no: 9


let person = {
    name: "Alice",
    age: 30,
    greet: function() {
        return `Hello, my name is ${this.name}.`;
    }
};


console.log(person.greet());
 














