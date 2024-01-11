/*
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!z
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

*/

// console.log("lop")




/*
The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
*/
let arr = ["hello", "world", "this", "is", "great"]
console.log(arr.join(" "))