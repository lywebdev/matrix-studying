function titleCase(str) {
    str = str.toLowerCase();

    let result = "";
    let newWord = true;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            result += str[i];
            newWord = true;
        } else {
            if (newWord) {
                result += str[i].toUpperCase();
                newWord = false;
            } else {
                result += str[i];
            }
        }
    }

    return result;
}

console.log(titleCase("I'm a little tea pot"));  // "I'm A Little Tea Pot"
console.log(titleCase("sHoRt AnD sToUt"));       // "Short And Stout"
