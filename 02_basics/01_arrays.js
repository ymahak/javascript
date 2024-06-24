// () - paranthese , [] - brackets , {} - curly braces

// arrays are resizable and can contain mix of different data types


// Shallow copy of an object is a copy whose properties share the same references . jo bhi change krenge vo original array me bhi hoga 
// deep copy  - do not share the same reference

// array - copy operation create shallow copies.

// const myArr = [0,2,3,4,5]
// //console.log(myArr[1]);

// //myArr.push(8)
// myArr.unshift(4) //start me hi add kr denge .....shift() - jo bhi no. add hua aage vo remove ho jayega 
// //console.log(myArr);
// //same pop() - jo bhi last value hogi array me usko delete kr denge 

// const myn1 = myArr.slice(1,3)
// console.log("B" ,myArr); //B [4,0,2,3,4,5]
// console.log(myn1);// [0,2]

// const myn2 = myArr.splice(1,3)
// console.log("C" , myArr); // original array hi manipulate ho jayega  C [4,4,5]
// console.log(myn2); // [0,2,3]

const marvel_heros = ["superman" , "thor" , "ironman"]
const dc_heros =["spiderman " , "flash" , "batman"]

//marvel_heros.push(dc_heros)
//console.log(marvel_heros);
// const newHeros = marvel_heros.concat(dc_heros)
// console.log(newHeros);

// spread operator - ek ek element separate hogya h array ka

const new_Heros = [...marvel_heros , ...dc_heros]
console.log(new_Heros);

const another = [1 ,2 , 3 , [4,5,6] , [7,[9,8]]]
const real = another.flat(2)
console.log(real);
 
console.log(Array.isArray("mahak")); // is nam ka array h 
console.log(Array.from("Mahak")); // make a array 
console.log(Array.from({name : "mahak"})); // empty array ... Key - value ka ni bna paaye to empty array dega

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)); // new array bn jayega 

