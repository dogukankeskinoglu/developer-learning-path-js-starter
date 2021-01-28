/************************************************/
/**********************EQUAL*********************/
/************************************************/
/*let value=5;
console.log(5 == '5');
console.log(5 === '5');*/

/************************************************/
/*********************TYPE OF********************/
/************************************************/
/*console.log(typeof 3);
console.log(typeof "abc");
console.log(typeof true);
console.log(typeof {});
console.log(typeof undefined);
console.log(typeof function(){});
console.log(typeof []);
console.log(typeof null);*/

/************************************************/
/*****************Time Intervals*****************/
/************************************************/
/*var myVar = setTimeout(myFunction, 3000);
function myFunction() {
  console.log('Hello');
}
//clearTimeout(myVar);*/

/*var myVar = setInterval(myTimer, 1000);
var count = 0;
function myTimer() {
  console.log(count);
  count++;
}*/
//clearInterval(myVar);

/************************************************/
/****************Arrow Functions*****************/
/************************************************/
/*function hello1(){
  return "Hello 1 World!";
}
let hello2 = function() {
  return "Hello 2 World!";
}

let hello3 = () => {
  return "Hello 3 World!";
}

let hello4 = () => "Hello 4 World!"

console.log(hello1());
console.log(hello2());
console.log(hello3());
console.log(hello4());*/

/************************************************/
/*********************Objects********************/
/************************************************/
/*var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(person);
console.log(person.firstName);
console.log(person["lastName"]);
var ageKey = "age";
console.log(person[ageKey]);*/

/************************************************/
/*********************Events*********************/
/************************************************/
// Add an event listener
/*document.addEventListener("GTrainingEvent", function(e) {
  console.log(e.detail);
});

// Create the event
var event = new CustomEvent("GTrainingEvent", { "detail": "Example of an event" });

// Dispatch/Trigger/Fire the event
document.dispatchEvent(event);*/

/************************************************/
/*********Immediately Invoke Functions***********/
/************************************************/
/*(function () {
  var x = "Hello!!";  // I will invoke myself
  console.log(x);
})();*/

/************************************************/
/***************Function Closure*****************/
/************************************************/
/*var add = (function () {
  var counter = 0;
  return function () {counter += 1; return counter}
})();

console.log(add());
console.log(add());
console.log(add());*/