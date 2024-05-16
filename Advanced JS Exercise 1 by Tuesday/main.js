'use strict';

// Exercise 1
let user = {
    name: "John",
    years: 30
}

const {name, age, isAdmin = false} = user;

// Exercise 2
const earthPlanetName = 'Earth';
const visitorName = 'Dmitry';

// Exercise 3
/**
 * It depends on whether strict code execution mode is enabled or not.
 * If it is disabled,the function will work and "Hello, John" will be output, despite the fact that
 * the function is declared in the if condition and should not be accessible from the outside.
 * If the mode is enabled, the logical behavior will be displayed and the ReferenceError error will be displayed
 * in the text of which it will be said that the SayHi function cannot be found
 */

// Exercise 4
user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

// Exercise 5
/**
 * Yes, we can change the properties of objects, because by changing the data inside the object,
 * we do not change the object itself. The variable actually contains a reference to the object,
 * and when you change the contents of the object, the reference does not change.
 * And if you try to change the value to another object, there will be an error
 */

// Exercise 6
let salaries = {
    Fred: 100,
    Ted: 160,
    Ghaith: 130
}
let sum = Object.values(salaries).reduce((total, salary) => total + salary, 0);

// Exercise 7
let a = 5, b = 10;
let resultString = ( (a + b) < 4) ? 'Below' : 'Over';

console.log(resultString);

// Exercise 8
let login = 'Director';

let message = login === 'Employee' ? 'Hello'
    : login === 'Director' ? 'Greeting'
    : login === '' ? 'No login'
    : '';


console.log(message);