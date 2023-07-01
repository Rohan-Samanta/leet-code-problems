// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:
// Input: s = "abc", t = "ahbgdc"
// Output: true

// Example 2:
// Input: s = "axc", t = "ahbgdc"
// Output: false

// Constraints:
// 0 <= s.length <= 100
// 0 <= t.length <= 104
// s and t consist only of lowercase English letters.

// Answer:

const isSubsequence = function (s, t) {
  if (s.length > t.length) {
    return false;
  } else {
    let lengthOfS = s.length,
      count = 0;
    for (let i = 0; i < t.length; i++) {
      if (s[count] == t[i]) {
        count++;
      }
    }
    return lengthOfS === count;
  }
};

// fn call

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
