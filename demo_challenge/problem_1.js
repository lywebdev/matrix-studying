const arr = [2, 1, 6, 4, -7];
let positions = 2;
let positionsCalculated = positions % arr.length;

for (let i = 0; i < positionsCalculated; i++) {
    let lastElement = arr[arr.length - 1];

    arr.pop();
    arr.unshift(lastElement);
}

console.log(arr);

/**
 * Just a shift by one can be done without a cycle
 *     let lastElement = arr[arr.length - 1];
 *
 *     arr.pop();
 *     arr.unshift(lastElement);
 */