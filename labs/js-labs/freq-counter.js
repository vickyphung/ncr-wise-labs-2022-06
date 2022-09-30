/*Frequency Counter Pattern
This pattern uses objects or sets to collect values/frequencies of values

This can often avoid the need for nested loops or O(N^2) operations with arrays / strings

Today we will be using the frequency counter pattern to solve problems where it's useful

This is not a magic bullet to solve everything, but as we learn these patterns we will begin to see

places where it can be useful.

To start we will work on this in our breakout rooms


Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.
*/


function same(arr1, arr2){

}

same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (must be same frequency)

/*

if (!arr1 === !arr2)
arr1.length === arr2.length
arr1[i] 
for (let i = 0; i < arr1.length; i++)
arr2[i] = arr1[i]^2

Challenge: charCount

Difficulty: Basic

Prompt:

- Write a function named charCount that accepts a single string argument and returns an object that represents the count of each character in the string.

- The returned object should have keys that represent the character with its value set to the how many times the character appears in the string argument.

- Upper and lower case characters should be counted separately.

- Space characters should be counted too.

Examples:

charCount('hello') //=> { h: 1, e: 1, l: 2, o: 1 }
charCount('Today is fantastic!') //=> { T: 1, o: 1, d: 1, a: 3, y: 1, ' ': 2, i: 2, s: 2, f: 1, n: 1, t: 2, c: 1, '!': 1 }

string=
charCount(string)



function charCount(str) {
  let countObj = {};
  for (letter of str) {
    if (!countObj[letter]) countObj[letter] = 1;
    else countObj[letter]++;
  }
  return countObj;
};


function charCount(str1) {
    let countObj = {};
    for (let i = 0; i < str1.length; i++) {
      if(countObj) {
        if (countObj.hasOwnProperty(str1[i])) {
          countObj[str1[i]] += 1;
        } else {
          countObj[str1[i]] = 1;
        }
      } else {
        countObj[str1[i]] = 1;
      }
    }
    return countObj;
  }




//Write a JavaScript function that accepts two arguments, a string and a lette
 
function char_count(str, letter) 
{
 var letter_Count = 0;

 //the function will count the number of occurrences of the specified letter within the string.
 
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log(char_count('w3resource.com', 'o'));
*/

// Solve the following with a Frequency Counter
// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/*

"";
"";
anagram?
.length
regex
.toLowerCase
||



function checkStringsAnagram(a, b) {
   let len1 = a.length;
   let len2 = b.length;
   if(len1 !== len2){
      console.log('Invalid Input');
      return
   }
   let str1 = a.split('').sort().join('');
   let str2 = b.split('').sort().join('');
   if(str1 === str2){
      console.log("True");
   } else { 
      console.log("False");
   }
}
*/