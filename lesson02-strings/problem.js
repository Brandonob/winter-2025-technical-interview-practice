/**
 * Given a string s, find the length of the longest substring
 * without repeating characters.
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  // Your code here
  let longestSubstring = 0;
  //split string into array
  let stringToArr = s.split(' ');
  // console.log('stringArr', stringToArr);

  //count substrings in arr and return as arr
  let stringIndexCount = stringToArr.map((el) => {
    return el.length;
  });
  // console.log(stringIndexCount);

  //return largest number in arr
  stringIndexCount.forEach((el) => {
    if (el > longestSubstring) {
      longestSubstring = el;
    }
  });
  return longestSubstring;
}

console.log(lengthOfLongestSubstring("Your're the most smartest person ever!"));

module.exports = lengthOfLongestSubstring;
