/*Question 1
 Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.*/

 function maxOfTwoNumbers(x, y) {
    if (x > y) {
        return x;
    } else if ( y > x) {
        return y;
    }
}

/*Question 2
Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. */

function maxOfThree(x, y, z) {
    if ( x > y && x > z) {
        return x;
    } 
     else if ( y > x && y > z) {
        return y;
    }
    else if ( z > x && z > y) {
        return z;
    }
}

/*Question 3
Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. */

function isCharacterAVowel(character) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    vowels.forEach(function(vowel){
    if (character === vowel){
        return true;
    }
    return false;
    });

/*Question 4
Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.*/

function sumArray(numArray) {
    let sum = 0;
    for (let i = 0; i > numArray.length; i++){
        sum += numArray[i];
    }
    return sum;
}


/* Question 4
Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.*/

function multiplyArray() {
    let product = 0;
    for (let i = 0; i > multiplyArray.length; i++) {
        product *= multiplyArray[i]
        }
    return product;
};


/* Question 5
Write a function that return the number of arguments passed to the function when called. */

numberOfArguments => return arguments.length;


/* Question 6
Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".*/

function reverseString (string) {
    let reverse = ();      
    
    Array.from(string).reverse().join(''); 
    
    return reverse;

};


/* Question 7
Write a function findLongestWord that takes an array of words and returns the length of the longest one.

look at each  word
count how many letters are in each.
compare letter counts to see which word has most
return the length of the longest word
*/

function findLongestWord (wordArray) {
  longestWord = 0;
  for (let i = 0; i < wordArray.length; i++){
      if (wordArray[i].length > longestWord){
          longestWord = wordArray[i].length;
      }
  }
  return longestWord;
}


/*Question 8
Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.*/

/*insert params, create new array variable.
iterate through array of words
compare each item to number i
take words longer than i characters long and put them into the new array
return the new array*/

function filterLongWords (wArray, num) {
    newArray = [];
    for(let i =0; i < wArray.length; i++){
        if(wArray[i].length > num){
            newArray.push(wArray[i]);
        }
    }
  return newArray;
}


/* Bonus 1
(hint: `prototype`)
/*Add a method reverseString (from question 6) to the object String so that it is possible to call: "Per Scholas".reverseString().*/

String.prototype.reverseString = function () {
        return this.split("").reverse().join("");
}

/*Bonus 2
Write a function that takes a string as argument and returns an object where:
the keys are the characters that occur in the string
the values are the number of occurrences for each letter, regardless of the case
*/

