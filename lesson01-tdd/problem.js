/**
 * Problem: Given a string, write a function to determine if it is a palindrome.
 * A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.
 * Ignore spaces, punctuation, and capitalization.
 *
 * Example:
 * isPalindrome("A man, a plan, a canal: Panama") => true
 * isPalindrome("race a car") => false
 *
 * @param {string} str - The input string.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 */

//function takes in a string
//check to remove symbols
//check to see if string is equal to string reversed
//function returns true or false
//write a test that verify string is

function isPalindrome(str) {
  // your code here
  let cleanedString = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let revString = cleanedString.split('').reverse().join('');
  // console.log('Cleaned', cleanedString);
  // console.log('Reversed', revString);

  return cleanedString == revString;
}
console.log(isPalindrome('A man, a plan, a canal: Panama'));

isPalindrome('A man, a plan, a canal: Panama');

module.exports = isPalindrome;
