// first prep exercise
/**
 * Write a statement, using the console.log() function. It should fulfill the following requirements:
 *   It takes a string as an argument
 *   The string should contain the message "Hello world!"
 *   Execute the file 10 times, each time using the phrase in different languages
 * 
 * For example:
 *   Halo, dunia! // Indonesian
 *   Ciao, mondo! // Italian
 *   Hola, mundo! // Spanish
 */

console.log("hello hyf' team");
console.log("wouter team");
console.log("rob team");

//second prep 
/**
 * Consider this code, it has a syntax error in it.
 * Fix it so that when running this file it shows the message 'I'm awesome!'
 * 
 *  console.log('I'm awesome'!;
 */

console.log("'I'm awesome'");

//third prep

/** 
 * Follow the commented steps to write a piece of code.
 * Then run it to see if you are correct!
 */

// 1. Declare your variable numberX. Do not initialize it (which means, don't give it a starting value) yet


// 2. Add a console.log statement that explains in words what you think the value of x is


// 3. Add a console.log statement that logs the value of numberX.


// 4. Now initialize your variable numberX with a number (also called an integer in computer science terms)


// 5. Next, add a console.log statement that explains what you think the value of numberX is


// 6. Add a console.log statement that logs the value of numberX

var x;

console.log("x value will be undefined");
console.log(x);

x = 100;

console.log("x will be 100");

console.log(x);


// forth prop

/** 
 * Follow the commented steps to write a piece of code.
 * Then run it to see if you are correct!
 */

// 1. Declare a variable myString and assign a string to it. Use your full name, including spaces, as the content for the string.


// 2. Write a console.log statement in which you explain in words what you think the value of the string is.


// 3. Now console.log the variable myString.


// 4. Now reassign to the variable myString a new string.


// 5. Just like what you did before write a console.log statement that explains in words what you think will be logged to the console.


// 6. Now console.log myString again.

let myString = "islam osman";
console.log("the string will be islam osman");
console.log(myString);

myString = "i'm 33 years old"
console.log("the string will be with new value");
console.log(myString);

//fifth prop

/**
 * Follow the commented steps to write a piece of code
 */

// 1. Declare a variable z and assign the number 7.25 to it.


// 2. Write a console.log statement in which you log the value of z.


// 3. Declare another variable a that has the value of z but rounded to the nearest integer.


// 4. Write a console.log statement in which you log the value of a.


// 5. So now we have z and a find a way to compare the two values and log true if a is greater than z or false if a is smaller than z.

let z = 7.25;
console.log(z);

let a = Math.round(z);
console.log(a);

if (a > z) {
    console.log(true`variable a ${a} is greater than z ${z}`);
} else {
    console.log(false);
    console.log(`variable a value is ${a}  smaller than z value ${z}`);
}

//sixth prep

/** 
 * Follow the commented steps to write a piece of code.
 */

// 1. Declare variable and assign to it an empty array. Make sure that the name of the variable indicates it contains more than 1 item. For example items instead of item.


// 2. Write a console.log statement that explains in words what you think the value of the array is.


// 3. Write a console.log statement that logs the array.


// 4. Create a new variable with an array that has 3 of your favorite animals, each in a different string. Make sure the name of the variables says something about what the variable contains.


// 5. Write a console.log statement that logs the second array.


// 6. Add a statement that adds another string ("Piglet)" to the array of animals.


// 7. Write a console.log statement that logs the second array!

var myArr = [];
console.log("myArr will be empty, that is mean nothing will happen");

console.log(myArr);

var myFavAnimal = ["horse", "cats", "lions"];
console.log(myFavAnimal);

console.log(myFavAnimal.push("Piglet"));
console.log(myFavAnimal);

// seventh prep


/** 
 * Follow the commented steps to write a piece of code.
 */

// 1. Declare a variable called mySentence and initialize it with the following string: "Programming is so interesting!".


// 2. Figure out (using Google) how to get the length of mySentence. Then write a console.log statement to log the length of mySentence.

var mySentence = "Programming is so interesting!";
console.log(mySentence.length);