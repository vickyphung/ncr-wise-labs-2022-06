// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


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
