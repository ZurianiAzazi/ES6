//The constructor method is a special method
//it has  to have the exact name "constructor"
//it is executed automatically when a new object is created 
//it is used to intialised object properties
//if yo do not define a constructor method, js will add an empty constructor method

//js classes are templates for js objects
//a js class is not an object

//syntax
// class ClassName {
//     constructor(){

//     }
// }

//this is a class with two initial properties
// class Student {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
// }

//we can use classes to create objects
// const student_1 = new Student('sara',20);
// const student_2 = new Student('John',23);

// console.log(student_1,student_2);


class Student{
    constructor(name,age){
        this.name= name;
        this.age=age;
    }
    dob(){
        let date = new Date();
        return date.getFullYear() - this.age;
    }
}

let student_1 = new Student('Sara',1990);
document.body.innerHTML = `${student_1.name} is ${student_1.dob()}`;