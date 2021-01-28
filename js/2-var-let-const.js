/************************************************/
/*****************Strict mode********************/
/************************************************/
/*"use strict";
test = 5;
console.log(test);*/

/************************************************/
/*********************Scope**********************/
/************************************************/
/*var genre = "fiction"
if (true) {
   var genre = "mystery"
   console.log(genre) 
}
console.log(genre)*/

/*let genre = "fiction"
if (true) {
   let genre = "mystery"
   console.log(genre)
}
console.log(genre)*/

/************************************************/
/*******************Redeclare********************/
/************************************************/
/*var weather = "rainy"
var weather = "sunny"
console.log(weather) // "sunny"*/


/*let snack = "sundae"
let snack = "cheese cake" 
// SyntaxError: Identifier "snack" has already been declared
let cheese = "sundae"
cheese = "cheese cake" 
// no error!*/

/************************************************/
/*****not defined vs undefined and Hoisting******/
/************************************************/
/*console.log(hello);
var hello = "hello";
var morning;
function greeting() {
   var goodbye = "goodbye";
}
console.log(hello) 
console.log(morning) 
console.log(goodbye)*/

//console.log(hello)
/*let hello = "hello"
let morning
function greeting() {
   let goodbye = "goodbye"
}
console.log(hello) 
console.log(morning) 
console.log(goodbye) */

/************************************************/
/*******************CONST************************/
/************************************************/
/*const WS_URL = 'localhost:3001/'
WS_URL = 'localhost:3000/'*/

/*const API_URL
console.log(API_URL) 
API_URL = "localhost:3000/"*/
