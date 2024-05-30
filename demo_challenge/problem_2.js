const arr = [1, -2, 4, 1, [3, 5, -2, -6, 1], 9];

function removeNegativeFromArray(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let currentVal = arr[i];

        if (Array.isArray(currentVal)) {
            result.push(removeNegativeFromArray(currentVal));
        }

        if (currentVal >= 0) {
            result.push(currentVal);
        }
    }

    return result;
}


console.log(removeNegativeFromArray(arr));