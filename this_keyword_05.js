//  In method , this refers to the owner object.
// (when a function is a property of an object) => its called method
// Alone , it refers to the global object (window)
//In a function , it refers to the global object (window)
//methods like call() and apply() can refer this to any object

const user_1 = {
    firsName : 'Sara',
    lastName :'Smith',
    id : 100 ,
    fullName : function(){
        return this.firsName+' '+this.lastName;
    }
}

const user_2 = {
    firsName : 'Alex',
    lastName :'Doe',
    id : 101 ,
    fullName : function(){
        return this.firsName+' '+this.lastName;
    }
}

//in an object method , this refers to the "owner" of the method
//the user object is the owner of the fullname method
console.log(user_1);
console.log(user_1.fullName());

console.log(user_2);
console.log(user_2.fullName());

//This alone 
//in a browser window is the global object

const a = this;
console.log(a);

//this in a function 
// in js function , the owner of the function is the deafult binding fo this
//so , in a function this refers to the global object (window object)

function myFunc(){
    return this;

}
console.log(myFunc());

//function binding 

//the call() and apply() are predefined js methods
//they can both be used to call an object method with another object as argument

const customer = {
    fullName : function(){
        return this.firstName+' '+this.lastName;
    }
}

const customer_1 = {
    firstName : 'sara',
    lastName:'Smith'
}

const test = customer.fullName.call(customer_1);
console.log(test);