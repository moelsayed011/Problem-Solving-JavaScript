
/**
 * 
 * =====>  Simple multiplication  <=====
 * This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
 * 
 * if number even mul * 8
 * if number is not even mul * 9
 */


function simpleMultiplication(number) {
  // your code........
if (number % 2 == 0) {
    return number * 8;
  } else return number * 9;
}


function simpleMultiplication(number) {
  // your code........
  return number * (number % 2 ? 9 : 8)
}

console.log(simpleMultiplication(3))