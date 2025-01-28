/**
 * Given a string s, find the length of the longest substring
 * without repeating characters.
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  // Your code here
  //keep track of all strings
  //count starts over when new string is presented

  let uniqueStrArr = [];
  let countArr = [];
  let longestSubstring = 0;

  for (let i = 0; i < s.length; i++) {
    if (uniqueStrArr.includes(s[i])) {
      countArr.push(uniqueStrArr.length);
    } else uniqueStrArr.push(s[i]);
  }

  countArr.forEach((el) => {
    if (el > longestSubstring) {
      longestSubstring = el;
    }
  });

  // let longestSubstring = 0;
  // //split string into array
  // let stringToArr = s.split(' ');
  // // console.log('stringArr', stringToArr);

  // //count substrings in arr and return as arr
  // let stringIndexCount = stringToArr.map((el) => {
  //   return el.length;
  // });
  // // console.log(stringIndexCount);

  // //return largest number in arr
  // stringIndexCount.forEach((el) => {
  //   if (el > longestSubstring) {
  //     longestSubstring = el;
  //   }
  // });
  return longestSubstring;
}

console.log(lengthOfLongestSubstring("Your're the most smartest person ever!"));

module.exports = lengthOfLongestSubstring;
