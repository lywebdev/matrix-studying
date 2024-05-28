const searchAndReplace = (inputSentence, findWord, replaceWord) => {
    let words = inputSentence.split(' ');

    for (let i = 0; i < words.length; i++) {
        let currentWord = words[i];
        if (currentWord === findWord) {
            words[i] = replaceWord;
        }
    }

    return words.join(' ');
}

console.log(searchAndReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));