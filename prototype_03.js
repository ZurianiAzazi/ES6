//object literals
// const user = {
//     name:'sara',
//     age:20
// };

// console.log(user);

//prototype : is an object that is associated with 
// every function and object by default in js

//the protype object is the special type of object wich has
//additional properties and methods attached to it.

//All properties and methods would be shared across all the object instances
//that get created by constructor function 

//constructor function 

// function User(){
//     this.name='sara';
//     this.age=30;
// };

// const user_1 = new User();
// user_1.gender = 'female';
// console.log(user_1);

// const user_2 = new User();
// console.log(user_2);

//prototype

// function Student(){
//     this.name = 'sara';
//     this.age =20;

// }

// Student.prototype.gender='female';

// const student_1 = new Student();
// console.log(student_1);

// const student_2 = new Student();
// console.log(student_2);

//how to get access to obj prototype

function Student(){
    this.name = 'sara';
    this.age =20;
}
const student_1 = new Student();

console.log(student_1.prototype); //undefined
console.log(Student.prototype); //object
console.log(student_1._proto_); //object