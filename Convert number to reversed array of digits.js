// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
//35231 => [1,3,2,5,3] 


function convert(n){
return String(n).split("").reverse().map(Number);
}
console.log(convert(35231))

