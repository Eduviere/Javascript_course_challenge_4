// OBJECTS AND  METHODS 
/*
1. An object can hold different types of data, incuding arrays and even other objects

2. We can also attach functions to objects which are called or known as methods 

3. We caan also use the dot notationn to access property in an object eg John.age 
*/ 

/* 
var john = {
    firstName :'John',
    lastNmae : 'Smith',
    birthYear : 1960 ,
    family :['Jane', 'Mark', 'Bob', 'Emily'],
    job : 'Teacher',
    isMarried : false,
    calcAge : function (birthYear) {
       return this.age = 2020 - this.birthYear;
    }    
};
john.calcAge();
console.log(john);
*/


// CHALLENGE
var john = {
    fullName : 'John Smith',
    mass : 90, // kg
    height : 8, //mtr
    calcJohnBMI : function(mass,height) {
        return this.johnBMI = this.mass / (this.height * this.height);
    }
}
var johnBMI = john.calcJohnBMI(john.mass, john.height);
console.log(john);

var mike = {
    fullName : 'Mike Jude',
    mass : 60, // kg
    height : 7, //mtr
    calcMikeBMI : function (mass,height) {
        return this.mikeBMI = this.mass / (this.height * this.height);
    }
}
var mikeBMI = mike.calcMikeBMI(mike.mass, mike.height);
console.log(mike);

if (johnBMI > mikeBMI) {
    console.log( john.fullName + ' has a higher BMI of ' + johnBMI)
} else if (mikeBMI > johnBMI) {
    console.log ( mike.fullName + ' has a higher BMI of ' + mikeBMI)
} else {
    console.log('Both ' + john.fullName + 'and ' + mike.fullName + ' has equal BMI of ' + johnBMI)
}