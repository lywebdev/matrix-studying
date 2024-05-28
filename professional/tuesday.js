const isMagicSquare = numbersArray => {
    let firstSequence = [
        numbersArray[0],
        numbersArray[4],
        numbersArray[8],
    ].reduce((sum, val) => sum += val, 0);
    let secondSequence = [
        numbersArray[2],
        numbersArray[4],
        numbersArray[6],
    ].reduce((sum, val) => sum += val, 0);

    return firstSequence === secondSequence && firstSequence === 15;
}


let numbersArray = [
    8, 1, 6,
    3, 5, 7,
    4, 9, 2,
];

console.log(isMagicSquare(numbersArray));
console.log(isMagicSquare([3, 5, 7, 8, 1, 6, 4, 9, 2]));