class Person {
    constructor(age, name) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

const person1 = new Person(25, "John");

const describePerson = callback => {
    callback(person1);
}

const wait = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds, `The promise resolved after ${milliseconds} milliseconds`));

wait(2000).then(message => {
    console.log(message);
});

console.log(person1.introduce());

describePerson(() => {
    console.log(person1.introduce);
});