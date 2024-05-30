const exampleSentence = 'testing sTrinG For my function';

const titleCase = arr => {
    for (let i = 0; i < arr.length; i++) {
        let firstLetterInUpperCase = arr[i][0].toUpperCase();
        let restWord = arr[i].slice(1).toLowerCase();

        arr[i] = firstLetterInUpperCase + restWord;
    }

    return arr;
}

console.log(titleCase(exampleSentence.split(' ')));