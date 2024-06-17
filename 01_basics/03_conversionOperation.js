let ans = "25ad"

console.log(typeof ans);
// console.log(typeof(ans));

//sbhii data type ka capital format hota h 
let valueInNumber = Number(ans)  //ans convert into number

console.log(typeof valueInNumber); //convert ho jayega 
console.log(valueInNumber);  //Not a number

let score = null

console.log(typeof score);

let value = Number(score)
console.log(typeof value);
console.log(value);

//undefined me NaN - Not a number ayega
//koi string h jo ki number me convert ni ho skti to bhi NaN ayega
// "24" => 24
// "22sa" => NaN
//true => 1 ; false = 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true ; 0 => false 
// " " => false 
// "mahak" => true
