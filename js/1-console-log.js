/************************************************/
/*************1. console.log()*******************/
/************************************************/
/*console.log('JavaScript');
console.log(7);
console.log(true);
console.log(null);
console.log(undefined);
console.log([1, 2, 3]);
console.log({a: 1, b: 2, c: 3});*/

/************************************************/
/*************2. console.error()*****************/
/************************************************/
//console.error('Error found');

/************************************************/
/**************3. console.warn()*****************/
/************************************************/
//console.warn('Warning!');

/************************************************/
/**************4. console.clear()****************/
/************************************************/
//console.clear();

/************************************************/
/****5. console.time() and console.timeEnd()*****/
/************************************************/
/*console.time('timer'); 
const hello =  function(){
  console.log('Hello Console!');
}
const bye = function(){
  console.log('Bye Console!');
}
hello(); // calling hello();
bye(); // calling bye();
console.timeEnd('timer');*/

/************************************************/
/**************6. console.table()****************/
/************************************************/
//console.table({a: 1, b: 2, c: 3});

/************************************************/
/***7. console.group() and console.groupEnd()****/
/************************************************/
/*console.group('group1'); 
  console.warn('warning'); 
  console.error('error'); 
  console.log('I belong to a group'); 
console.groupEnd('group1'); 
console.log('I dont belong to any group');*/

/************************************************/
/***********Bonus : Styling your logs************/
/************************************************/
/*const spacing = '10px'; 
const styles =  `padding: ${spacing}; background-color: white; color: red; font-style: italic; border: 1px solid black; font-size: 2em;`; 
console.log('%cI am a styled log', styles);*/

/************************************************/
/****************Template Literals***************/
/************************************************/
/*const name = 'Gerardo';
const surname = 'Fernández';
const telephone = '123 123 123';
// "Old syntax"
const userInfoOld = 'User info: ' + name + ' ' + surname + ' ' + telephone;
console.log(userInfoOld);
// "New syntax"
const userInfoNew = `User info: ${name} ${surname} ${telephone}`;
console.log(userInfoNew);*/
//Escape Characters
/*const oldEscape1 = 'Can\'t connect to the server';
const newEscape1 = `Can't connect to the server`;
const oldEscape2 = "Error: \"Introduce a valid email\"";
const newEscape2 = `Error: "Introduce a valid email"`;*/
//Strings in Several Lines
/*const htmlOld1 = "<article>
<h1>Article title</h1>
</article>";*/
/*const htmlOld2 = "<article> \
<h1>Article title</h1> \
</article>";
const htmlOld3 = '<article>' +
'<h1>Article title</h1>' +
'</article>';

const htmlNew = `<article>
<h1>Article title</h1>
</article>`;*/