const sumPrimes = max => {
    const isPrime = num => {
        if (num <= 1) return false;
        if (num <= 3) return true;

        if (num % 2 === 0 || num % 3 === 0) return false;

        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }

        return true;
    }

    let sum = 0;
    for (let i = 2; i <= max; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }

    return sum;
}

const maxNumber = 10;
console.log(sumPrimes(maxNumber));
