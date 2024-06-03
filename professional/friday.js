const sumAllOddFibonacci = max => {
    let a = 1, b = 1;
    let sum = 0;

    while (a <= max) {
        if (a % 2 !== 0) {
            sum += a;
        }

        let temp = a + b;
        a = b;
        b = temp;
    }

    return sum;
}


const maxNumber = 10;
console.log(sumAllOddFibonacci(maxNumber));