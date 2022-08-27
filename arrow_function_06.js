// function expression 

// const greeting = function (){
//     return "welcome to the academy";
// }

// console.log(greeting());

//with arrow function 

// const greeting = () => {
//     return "welcome to the academy";
// }
// console.log(greeting());

// the syntax gets shorter if the function has only one statement 
//and the statement retuens a value , the you can remove
//  the braces and the return keyword

// const greeting = () => "welcome to js";
// console.log(greeting());

//arrow function with parameters 

const greeting = (user) => `welcome to AAA ${user}`;

console.log(greeting('sara'));