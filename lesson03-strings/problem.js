/*
Problem:

You are given a text string and a pattern string. Your task is to implement a string matching algorithm that finds all occurrences of the pattern in the text.

Write a function `stringMatching(text, pattern)` that takes in two strings as arguments and returns an array of indices where the pattern is found in the text. If the pattern is not found, return an empty array.

Example:

Input:
text = "ababcababcabc"
pattern = "abc"

Output:
[2, 7, 10]

Input:
text = "hello world"
pattern = "xyz"

Output:
[]

Note:
- The matching should be case-sensitive.
- The indices should be 0-based.

*/

function stringMatching(text, pattern) {
  // TODO: Implement the string matching algorithm
  // Return an array of indices where the pattern is found in the text
  // If the pattern is not found, return an empty array
  if (pattern.length > text.length) {
    return [];
  }
  let resultArr = [];

  for (let i = 0; i < text.length; i++) {
    let slicedText = text.slice(i, i + pattern.length);

    if (slicedText == pattern) {
      resultArr.push(i);
    }
  }
  return resultArr;
}
console.log(stringMatching('ababcababcabc', 'abc'));

module.exports = stringMatching;
