/* Create a function called fizzBuzz that would print the result based on the following conditions:
    If the number is divisible by 3, print 'Fizz'.
    If the number is divisible by 5, print 'Buzz'.
    If the number is divisible by 3 AND 5, print 'FizzBuzz'.
    If the number is not divisible by 3 or 5, print 'Pop'.

Use the following test scenarios:
fizzBuzz(49); //Pop
fizzBuzz(55); //Buzz
fizzBuzz(120); //FizzBuzz
fizzBuzz(9999); //Fizz
*/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function fizzBuzz(number){
    if (number % 3 === 0) && number % 5 === 0){
        console.log("FizzBuzz");
    } else if(number % 5 === 0) {
        console.log("Buzz");
    } else if (number % 3 === 0){
        console.log("Fizz");
    } else { 
        console.log("Pop");
    }
}
