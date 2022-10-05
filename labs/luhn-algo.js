// The Luhn Algorithm
// Credit card numbers can be validated with a process called the Luhn algorithm. The Luhn algorithm works like this:

// Starting with the next to last digit and continuing with every other digit going back to the beginning of the card number, double the digit.
// Sum all digits in the altered number.
// If that total is a multiple of 10, the number is valid.
// For example, given the card number 4408 0412 3456 7893:

// Orig  :  4 4 0 8 0 4 1 2 3 4   5 6   7 8   9 3
// Step 1:  8 4 0 8 0 4 2 2 6 4  10 6  14 8  18 3
// Step 2:  8+4+0+8+0+4+2+2+6+4+1+0+6+1+4+8+1+8+3 = 70
// Step 3:  70 % 10 == 0


// Code
// Write a function validCardthat takes a number as an argument and returns true for a valid number and false for an invalid number.

// validCard(1234567890123456); //should be false
// validCard(4408041234567893); //should be true
// validCard(38520000023237); //should be true
// validCard(4222222222222); //should be true

// Create A Luhn Algorithm Validator
// A user enters a credit card in your form
// If the Luhn Algorithm says its valid, show a message that the card is valid
// If the Luhn Algorith says its invalid show a message that it is not valid
// The Luhn Algo should be checking every time the state changes using the useEffect hook


////////////////////////////////////////////////////

// Write a JavaScript program to implement the Luhn Algorithm used to validate a variety of identification numbers, such as credit card numbers, IMEI numbers, National Provider Identifier numbers etc.

// Use String.prototype.split(''), Array.prototype.reverse() and Array.prototype.map() in combination with parseInt() to obtain an array of digits.

// Use Array.prototype.splice(0, 1) to obtain the last digit.

// Use Array.prototype.reduce() to implement the Luhn Algorithm.

// Return true if sum is divisible by 10, false otherwise.


//#Source https://bit.ly/2neWfJ2 
const luhnCheck = num => {
    let arr = (num + '')
      .split('')
      .reverse()
      .map(x => parseInt(x));
    let lastDigit = arr.splice(0, 1)[0];
    let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
    sum += lastDigit;
    return sum % 10 === 0;
  };
  console.log(luhnCheck('4485275742308327')); 
  //true
  console.log(luhnCheck(6011329933655299)); 
  //false
  console.log(luhnCheck(123456789)); 
  //false
  console.log(luhnCheck(1234567890123456))
  

///////////////////////////////////////////////////

// Without any library.

var LuhnCheck = (function()
{
	var luhnArr = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
	return function(str)
	{
		var counter = 0;
		var incNum;
		var odd = false;
		var temp = String(str).replace(/[^\d]/g, "");
		if ( temp.length == 0)
			return false;
		for (var i = temp.length-1; i >= 0; --i)
		{
			incNum = parseInt(temp.charAt(i), 10);
			counter += (odd = !odd)? incNum : luhnArr[incNum];
		}
		return (counter%10 == 0);
	}
})();

console.log("Luhn Check " + LuhnCheck(1234567890123456))

/////////////////////////////

///////////////////////
// Naive implementation

const lunhCheck = (str) => {
    const sumDigit = (c) => (c < 10) ? c :
              sumDigit( Math.trunc(c / 10) + (c % 10));
    
    return str.split('').reverse()
              .map(Number)
              .map((c, i) => i % 2 !== 0 ? sumDigit(c * 2) : c)
              .reduce((acc,v) => acc + v) % 10 === 0;
};

lunhCheck('49927398716'); // returns true
lunhCheck('49927398717'); // returns false
lunhCheck('1234567812345678'); // returns false
lunhCheck('1234567812345670'); // returns true
console.log(luhnCheck(1234567890123456))

////////////////////////////////////////////////////

