/**
 * Declare a function isPalindrome(str) that takes a string as an input.
 * Return true if the given string is a palindrome. Otherwise, return false.
 * A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
 */
const isPalindrome = word => {
    word = word.toLowerCase();

    let reversedString = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reversedString += word[i];
    }

    return reversedString === word;
}
console.log(isPalindrome('RaceCar'));

const isPalindromeAnotherSolution = word => word.toLowerCase().split('').reverse().join('') === word.toLowerCase();
console.log(isPalindromeAnotherSolution('RaceCar'));