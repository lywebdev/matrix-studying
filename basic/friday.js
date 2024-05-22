const thirdHighest = input => {
    if (!Array.isArray(input) || input.length < 3) {
        throw new Error("Input must be an array with at least three elements");
    }

    let [first, second, third] = [-Infinity, -Infinity, -Infinity];

    for (let i = 0; i < input.length; i++) {
        if (input[i] > first) {
            [first, second, third] = [input[i], first, second];
        } else if (input[i] > second && input[i] < first) {
            [second, third] = [input[i], second];
        } else if (input[i] > third && input[i] < second) {
            third = input[i];
        }
    }

    return third;
}

console.log(thirdHighest([2, 5, 3, 1, 4]));