const fname = "Mahak"
//we can also declare string
const gname = new String('hello-there')  //object h 
const repoCount = 17

//string interpolation  - placeholders btane h unme jo bhi variables h unko directly access kr skte h

// console.log(`Hello my name is ${fname} and my repo count is ${repoCount}`);
// console.log(gname[2]);
// console.log(gname.__proto__);
// console.log(gname.toUpperCase());
// console.log(gname.charAt(3)); // l
// console.log(gname.indexOf('h')); //0
 
const newString = gname.substring(0, 4) //-ve value ko ignore kr dega aur 0 se hi start krega 
console.log(newString);

const anotherString = gname.slice(-10 , 7)   //hm -ve values use kr skte h 
console.log(anotherString);


const newStringOne = "    mahak    "  //input form me use hota h ..unnecessary spaces add ho jaate h jo ni chahiye hote 
console.log(newStringOne);
console.log(newStringOne.trim()); //space ko htta dega , white space char , line terminator(jo new line ke liye use hote h ) pe km krta h .....end bhi hota h iska aur start bhi 

const url = "https://mahak.com/mahak%20yadav"
console.log(url.replace('%20' , '-' )); //useable h url 

console.log(url.includes('mahak')); //include h to true nhi to false

console.log(gname.split('-')); //array ayega jisme - se split ho jayega



