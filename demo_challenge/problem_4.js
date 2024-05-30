const inputArray = [
    [700],
    [12, 24, 0, -1],
    [1000, 10001],
    [3, 15, 20, 90, 120, -30],
    [3],
    [0],
    [-1, -2],
    [
        [1, 43, 15, 20],
        10,
        [100],
        [
            [210, 500],
        ]
    ],
];


const getMaxNumberOfArrays = arr => {
    let maxNumber = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            let maxInSubArray = getMaxNumberOfArrays(arr[i]);
            if (maxInSubArray > maxNumber) {
                maxNumber = maxInSubArray;
            }
        } else {
            if (arr[i] > maxNumber) {
                maxNumber = arr[i];
            }
        }
    }


    return maxNumber;
}


console.log(getMaxNumberOfArrays(inputArray));