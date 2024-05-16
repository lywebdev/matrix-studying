// Exercise 1
let arr = [5, 3, 8, 1]

const filterRange = (arr, a, b) => arr.filter(value => a < value && b > value);

let filtered = filterRange(arr, 1, 4)
alert( filtered )  // 3,1 (matching values)
alert( arr )  // 5,3,8,1 (not modified)


// Exercises 2
let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 }
let mary = { name: "Mary", age: 28 }

let users = [ john, pete, mary ]

let names = users.map(person => person.name)

alert( names ) // John, Pete, Mary


// Exercises 3
john = { name: "John", age: 25 }
pete = { name: "Pete", age: 30 }
mary = { name: "Mary", age: 29 }

const getAverageAge = (personsArray) => {
    return (personsArray.reduce((totalAge, currentPersonObject) => totalAge + currentPersonObject.age, 0)) / personsArray.length;
}

arr = [ john, pete, mary ]

alert( getAverageAge(arr) )   // (25 + 30 + 29) / 3 = 28