//object literals

// const student = {
//     firstName: 'Sara',
//     lastName:'Smith',
//     age:20
// };

// console.log(student.firstName);

//constructor function

// function Student(){
//     this.firstName = 'Sara';
//     this.lastName = 'Smith';
//     this.age=20;
// };

// const sara = new Student();
// console.log(sara);


function Student(firstName,lastName,age){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;  
};

const student_1 = new Student('sara','smith',20);

console.log(student_1);