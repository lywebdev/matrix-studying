const gameOfThree = inputNumber => {
    if (inputNumber < 1) return;

    let steps = [];

    while (inputNumber !== 1) {
        if (inputNumber % 3 === 0) {
            steps.push(`${inputNumber} 0`);
            inputNumber /= 3;
        }
        else if ((inputNumber + 1) % 3 === 0) {
            steps.push(`${inputNumber} 1`);
            inputNumber += 1
        }
        else {
            steps.push(`${inputNumber} -1`);
            inputNumber -= 1;
        }
    }

    return steps;
}

console.log(gameOfThree(prompt('Enter number')));