/**
 * 1. Addition
 * Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, but not both 3 and 5.
 * To solve this task you might want to use the modulus operator.
 */
let sum = 0;
for (let i = 200; i <= 2700; i++) {
    if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
        sum += i;
    }
}

/**
 * 2. Shift the Values
 * Given any array X, for example [2,1,6,4,-7], create an algorithm that shifts each number by one to the front.
 * When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2].
 */
let x = [2, 1, 6, 4, -7];

function shiftArray(arr) {
    if (arr.length === 0) return arr;

    const lastElement = arr[arr.length - 1];
    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }

    arr[0] = lastElement;

    return arr;
}

/**
 * 3. FizzBuzz
 * Create an algorithm that inserts the numbers from 1 to 135 into an array,
 * while replacing the values that are divisible by 3 with the word "Fizz",
 * the numbers that are divisible by 5 with the word "Buzz", and the numbers that are divisible with 3 and 5 with the word "FizzBuzz".
 */
function createFizzBuzzArray() {
    const arr = [];

    for (let i = 1; i <= 135; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            arr.push("FizzBuzz");
        } else if (i % 3 === 0) {
            arr.push("Fizz");
        } else if (i % 5 === 0) {
            arr.push("Buzz");
        } else {
            arr.push(i);
        }
    }

    return arr;
}

const fizzBuzzArray = createFizzBuzzArray();
console.log(fizzBuzzArray);

/**
 * 4. Fibonacci
 * For a Fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.
 * A Fibonacci sequence is an infinite series of numbers that is created by adding the last two numbers in the series.
 * A series would start with the numbers 0 and 1 in place, followed by 1 (0+1), 2 (1+1), 3 (1+2), 5 (3+2), etc.
 */
function sumFibonacci(limit) {
    let a = 0, b = 1;
    let sum = a + b;

    while (true) {
        let next = a + b;
        if (next >= limit) break;
        sum += next;
        a = b;
        b = next;
    }

    return sum;
}

const limit = 1000000;
const result = sumFibonacci(limit);
console.log(result);

/**
 * 5. Remove the Negative
 * Given any array X, for example [1,-2,4,1], remove the negative numbers, so that the output becomes: [1,4,1].
 */
function removeNegativeNumbers(arr) {
    return arr.filter(num => num >= 0);
}

/**
 * 6. Communist Censorship
 * Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'],
 * replace every letter of the word Program with *, so the output would be ['Man', 'I','Love','The','Matrix','*******'].
 * Then make your algorithm work for any word of your choice
 */
function replaceWordWithStars(arr, word) {
    return arr.map(str => {
        if (str === word) {
            return "*".repeat(word.length);
        } else {
            return str;
        }
    });
}

const arrayX = ['Man', 'I', 'Love', 'The', 'Matrix', 'Program'];
const wordToReplace = 'Program';
const resultArray = replaceWordWithStars(arrayX, wordToReplace);
console.log(resultArray);
