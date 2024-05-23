const largestOfFour = arr => arr.map(subArray => Math.max(...subArray));

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

/**
 * function largestOfFour(arr) {
 *   const result = [];
 *
 *   for (let i = 0; i < arr.length; i++) {
 *     let max = arr[i][0];
 *
 *     for (let j = 1; j < arr[i].length; j++) {
 *       if (arr[i][j] > max) {
 *         max = arr[i][j];
 *       }
 *     }
 *
 *     result.push(max);
 *   }
 *
 *   return result;
 * }
 */