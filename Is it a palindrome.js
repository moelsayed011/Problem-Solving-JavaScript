/**
 * Is it a palindrome?
 * Write a function that checks if a given string (case insensitive) is a palindrome.

A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.
 */

// let str = "llps";

// let x = str.split("").reverse().join("").toLowerCase()
// console.log(x)

// if ((str.toLowerCase() === str.split("").reverse().join("").toLowerCase())) {
//     console.log("ture")
// }else console.log("false")


function isPalindrome(str) {
  // your code here
  if ((str.toLowerCase() === str.split("").reverse().join("").toLowerCase())) {
    return true
  } else return false
}


console.log(isPalindrome("AbBa"));


