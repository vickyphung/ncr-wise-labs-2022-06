

///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////


/*Question 1
Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.*/
function maxOfTwoNumbers(x,y) {
if (x < y) {
    return y;
} else if (x > y) {
    return x;
}
}

// Question 1 Alternative Answer
// function maxOfTwoNumbers(num1, num2) {
// (num1 >= num2) ? return num1 : return num2;
// }

/*Question 2
Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. */
function maxOfThree(x,y,z) {
if (x > y && x > z) {
    return x;
}

if (y > x && y > z) {
    return y;
}

if (z > x && z > y) {
    return z;
}
}

// Question 2 Alternative Answer
function maxOfThree(num1, num2, num3) {
array = [num1, num2, num3]
return array.sort(function(a, b){return b-a})[0]
}

/*Question 3
Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. */

function isCharacterAVowel(c) {
var vowels = ['a','e','i','o','u'];
if (vowels.indexOf(c) !== -1) {
    return true;
}
return false;
}

// Question 3 Alternative Answer
function isCharacterAVowel(char) {
let isVowel = false;
let vowels = ['a', 'e', 'i', 'o', 'u'];
vowels.forEach(function(vowel){
    if (char === vowel){
    isVowel = true
    }
});
return isVowel
}

/*Question 4
Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.*/

function sumArray(arr) {
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
}
return sum;
}


// Question 4
function multiplyArray(arr) {
var product = arr[0];
for (var i = 1; i < arr.length; i++) {
    product *= arr[i];
}
return product;
}


/* Question 5
Write a function that return the number of arguments passed to the function when called. */
var numberOfArguments = function(){
return arguments.length
}

/* Question 6
Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".*/
var reverseString = function (str){
var arr = str.split('');
var revArr = [];
for (var i = arr.length - 1; i >= 0; i--) {
    revArr.push(arr[i]);
}
return revArr.join('');
};


// Question 6 alternative answer

reverseString = function(){
return this.split('').reverse().join('');
};

/* Question 7
Write a function findLongestWord that takes an array of words and returns the length of the longest one.

look at each word
count how many letters are in each.
compare letter counts to see which word has most
return the length of the longest word
*/
function findLongestWord (arr) {
longest = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > longest) {
    longest = arr[i].length;
    }
}
return longest;
}


/*Question 8
Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.*/

/*insert params, create new array variable.
iterate through array of words
compare each item to number i
take words longer than i characters long and put them into the new array
return the new array*/
function filterLongWords (arr,num) {
newArr = [];
for (var i = 0; i < arr.length; i++) {
    if(arr[i].length > num){
    newArr.push(arr[i]);
    }
}
return newArr;
}

/* Bonus 1
(hint: `prototype`)
/*Add a method reverseString (from question 6) to the object String so that it is possible to call: "Per Scholas".reverseString().*/

String.prototype.reverse = function(){
return this.split('').reverse().join('');
};

/*Bonus 2
Write a function that takes a string as argument and returns an object where:
the keys are the characters that occur in the string
the values are the number of occurrences for each letter, regardless of the case
*/
// function charactersOccurencesCount(stringToCount) {
//     let characters = {};
//     // replacing all Capitals by Lowercase letters and removing spaces
//     let stringToCount = stringToCount.toLowerCase().replace(/\s/g, '');
//     stringToCount.split("").forEach(function(l){
//     characters[l] = (isNaN(characters[l]) ? 1 : characters[l] + 1);
//     });
//     return characters;
// }
///////////////////////////////////////////
///////////////////////////////////////////






//WEEK 3 DAY 2 HW

//D. Savings account
let sum = 0;
for (let i = 1; i <= 100; i++) {
sum = (sum + i);
}
console.log(sum*2)

// D. Change values

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
console.log(ourClass[2])

//Change the value of "Github" to "Octocat"

ourClass.splice(4, 1, 'Octocat')
console.log(ourClass)

ourClass.push("Cloud City")
console.log(ourClass)

///////////////////////////////////////////


const myArray = [5, 10, 500, 20]

myArray.shift();
console.log(myArray)


// F. getMultipleLengths

// Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
// console.log(getTwoLengths("Hank", "Hippopopalous"));
// => [4, 13]

// Remember that when building a function, you want to use declare a function with a name that accepts arguments. So for building our function called lengths that accepts an array of strings...

// // declare function named "lengths"
// // that accepts a arguments named "arrayOfStrings"
// function lengths(arrayOfStrings) {
//   // we can log out our "arrayOfStrings"
//   console.log(arrayOfStrings);
//   // now, we want to "return" something... but what?
//   return whateverVariableYouWantToReturnHere;
// }
// Reference: MDN: String.length
// let words = ["hello", "what", "is", "up", "dude"]
// lengths(words)  # => [5, 4, 2, 2, 4]

words = ["hello", "bear", "pinky", "cute", "doggy"]

function lengths(arrayOfStrings){
    let myArray = [];
    for (i = 0; i < arrayOfStrings.length; i++) {
        myArray.push(arrayOfStrings[i].length);
    }
    console.log(myArray);
    return myArray;
}

lengths(words);

///////////////////////////////////////////
//G. maxOfThree

function maxOfThree(x, y, z){
    max = 0;
    if (x > y)
    {
    max = x;
    } else
    {
    max = y;
    }
    if (z > max) 
    {
    max = z;
    }
    console.log(max)
    return max;
}
maxOfThree(110,20,48);


///////////////////////////////////////////
//H. printLongestWord

function printLongestWord(array)
{
    let max_string = array[0].length;
    let ans = array[0];
    for (let i = 1; i < array.length; i++) {
        let max_i = array[i].length;
        if (max_i > max_string) {
            ans = array[i];
            max_string = max_i;
        }
    }
    console.log(ans)
    return ans;
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

///////////////////////////////////////////


///////////////////////////////////////////
////Week 3 Day 3 HW
///////////////////////////////////////////
// // Fizz Buzz

// This is a classic problem that you should get really comfortable solving. If you've solved
// it before, try to make it more elegant and short.
// 1. Write a javascript application that logs all numbers from 1 - 100.
// 2. If a number is divisible by 3 log "Fizz" instead of the number.
// 3. If a number is divisible by 5 log "Buzz" instead of the number.
// 4. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.


///////////////////////////////////////////
// // Yell at the Ninja Turtles

// 1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael,
//     Michaelangelo)
// 2. Use a for of loop (not a typo - try it out! Try a for of loop) to call toUpperCase() on each of them and print out the result.

const turtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']

for(let i=0; i < turtles.length; i++){
    turtles[i].toUpperCase();
    console.log(turtles[i].toUpperCase())
}

///////////////////////////////////////////
// // Methods, Revisited

// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// Console log: the index of Titanic
// Do the following and console.log the final results.

// 1. use the .sort method Thought question: what did this do to the array? Did it
// permanently alter it?
// 2. Use the method pop
// 3. push "Guardians of the Galaxy"
// 4. Reverse the array
// 5. Use the shift method
// 6. unshift - what does it return?
// 7. splice "Django Unchained" and add "Avatar" (try finding the index of "Django
// Unchained", instead of counting it yourself) Thought question: did this permanently
// alter our array?
// 9. store the value of your slice in a variable, console.log it - Thought question: what is
// going on here?
// 10. console.log your final results
// 11. After running the above tasks, console.log the index of "Fast and Furious" -We
// removed it from the array, what value do we get when we look for the index of
// something that is not in the array?
// 12. Thought question: that we declared the variable favMovies with const , and yet, we
// were allowed to change the array. Weird? Should we have used let ?


///////////////////////////////////////////
// // Where is Waldo

// With the following multi-dimensional array
// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
// ["Lucinda", "Jacc", "Neff", "Snoop"],
// ["Petunia", ["Baked Goods", "Waldo"]]];

// Remove Eggbert (hint look at the slice/splice method(s))
// Change "Neff" to "No One"
// Access and console.log "Waldo"


///////////////////////////////////////////
// // Find the Median

// Find the median number in the following nums array, then console.log that number.
// hint if you check the length of the array / 2, you might get not get a whole number. In
// which case, look into Math.floor( // something )

// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

// Expected output:
// => 15


///////////////////////////////////////////
// // Excited Kitten

// Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
// For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.

// Hint 1
// Make an array of the kitten's talking points

// Hint 2
// Use bracket notation to access each talking point kittyTalk[1];

// Hint 3
// Rather than hard-coding the array position number set a variable
//   let meow = 0;
//   kittyTalk[meow]
// Hint 4
// You will need to use Math.random() in order to choose a random number and assign this random number to the variable you created (rather than have the variable equal 0)

// Hint 5
// Math.random() will return a number between 0 and 1. Array positions are integers. You will need to multiply the Math.random() number so that the range is between 0 and the length of the array

// Hint 6
// Then round the number by using another Math method like Math.floor()or Math.ceil()or Math.round()


let MAX = 100; function randomInteger() {  return Math.floor((Math.random() * MAX)); }

module.exports = randomInteger; 