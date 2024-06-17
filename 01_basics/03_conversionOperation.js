let ans = "25ad"

//console.log(typeof ans);
// console.log(typeof(ans));

//sbhii data type ka capital format hota h 
let valueInNumber = Number(ans)  //ans convert into number

//console.log(typeof valueInNumber); //convert ho jayega 
//console.log(valueInNumber);  //Not a number

let score = null

//console.log(typeof score);

let value = Number(score)
//console.log(typeof value);
//console.log(value);

//undefined me NaN - Not a number ayega
//koi string h jo ki number me convert ni ho skti to bhi NaN ayega
// "24" => 24
// "22sa" => NaN
//true => 1 ; false = 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

// 1 => true ; 0 => false 
// " " => false 
// "mahak" => true


// ******************* Operations ***************************//

 let num = 4
 let negNum = -num
 //console.log(negNum);

 /*
 console.log(2+2);
 console.log(2-2);
 console.log(2*2);
 console.log(2/2);
 console.log(2**3); power
 console.log(2%2);
*/

let str1 = "hello"
let str2 = " mahak"
let str3 = str1 + str2
// console.log(str3);

// console.log(1 + "2");
// console.log(1 + 3 + "2");//42
// console.log("1" + 2 + 3);//123

// console.log(true); // true 
// console.log(+true); // 1
//console.log(true+); //error

let gameCount = 100
gameCount++;
console.log(gameCount);

let x = 3;
const y = x++;//3 Postfix
console.log(y);

let a = 4; 
const b = ++a;//5 Prefix
console.log(b);
