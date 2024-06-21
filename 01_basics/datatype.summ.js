// kis traha se data ko memory me store kiya jata h aur access kiya jata h uspe data type 2 cat h
//JS me hm kbhi define ni krte 

/*
Primitive - call by value (jb bhi hm data lete h to actual value nhi diya jata unki copy hme diya jata  h )
7 types :- number , string , boolean , bigInt , null , undefined , symbol 
*/

/* Reference (Non primitive)
Arrays , Objects , Functions 
imp - objects , browser ke web events
*/

/*
JavaScript is a dynamically typed language. 
This means that variable types are determined at runtime rather than at compile-time.
*/

const id = Symbol('123')
const anId = Symbol('123')
console.log(id);
console.log(anId);
console.log(id === anId);


/* ***************************************************** 
Memory => Stack(Primitive) copy milti h & Heap (Non-primitive) reference of actual value
*/

let myYou = "mahakyadav"
let anotherMy = myYou
anotherMy = "ymaahall"

console.log(myYou);
console.log(anotherMy);



