/********************************
 * PLEASE READ
 * Uncomment each variable to test each input
 * Uncomment respective console.log() to print
 ********************************/

// Only Odds

/*  declare new empty array
    loop through given array
        find odd numbers with [i] % 2 !== 0
        add numbers to new array with .push()
    print new array to console
*/

let array = [2, 4, 6, 8, 11, 20, 15, 22];
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let array = [70, 42, 55, 81, 21, 91, 34];
// let array = [2, 4, 6, 8, 10, 11, 12];

let odds = [];

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 !== 0) {
    odds.push(array[i]);
  }
}

// console.log(odds);

// ------------------------------------------------------

// Vowel vs Consonant

/*  declare variable to count consonants
        set consonantsCount = string.length
    declare variable to count vowels
    declare vowels array
    loop through string
        loop through vowels array
            check string[i] for vowel
            if so, vowel++
    subtract vowelsCount from consonantCount
    create print statement
*/

const string = "hello";
// const string = "ukelele";
// const string = "awesome";
// const string = "onomonopia";
// const string = "textbook";

const vowels = ["a", "e", "i", "o", "u"];
let consonantsCount = string.length;
let vowelsCount = 0;

for (let i = 0; i < string.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (string[i] === vowels[j]) {
      vowelsCount++;
    }
  }
}
consonantsCount -= vowelsCount;

// console.log(
//   `${string} has ${consonantsCount} consonants and ${vowelsCount} vowels`
// );

// ------------------------------------------------------

// Reverse Array

/*
    declare reversedArray[]
    loop through given array starting from the end
        add numbers to reversedArray with push()
    print reversedArray
*/

const arrayToReverse = [1, 2, 3];
// const arrayToReverse = [1, 3, 5, 7, 9, 11];
// const arrayToReverse = [20, 50, 30, 60, 200];
// const arrayToReverse = [1, -1, 2, -3, 5, -8, 13];

const reversedArray = [];

for (let i = arrayToReverse.length - 1; i >= 0; i--) {
  reversedArray.push(arrayToReverse[i]);
}

// console.log(reversedArray);

// ------------------------------------------------------

// FizzBuzz

/*
    loop through 1 - 100 inclusive
    if number % 15 === 0
        print "FizzBuzz"
    if number % 3 === 0
        print "Fizz"
    if number % 5 === 0
        print "Buzz"
    else print number
*/

for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    // console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    // console.log("Fizz");
  } else if (i % 5 === 0) {
    // console.log("Buzz");
  } else {
    // console.log(i);
  }
}
