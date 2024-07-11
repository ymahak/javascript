// when we assume ki yhi true value hogi

// we assumed phle se hi ki email given h  aur agr empty string hota to else case execute hota 
// const userEmail = [ ]  // empty string - false but empty array liya to true hoga


// if(userEmail) {
//     console.log("Got the email");
// }
// else {
//     console.log("no email ");
// }


// falsy values
//false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN


//truthy values 
// "0" , [] , 'false' , " " , { } , function(){} 

// array empty h kaise check krenge
// if(userEmail.length === 0 ){
//     console.log("Array is empty ");
// }

// for object 
// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
// }

// Nullish Coalescing Operator(??) : null undefined     -- ye ek fall back h 


// let val1;
// //val1 = 5 ?? 10 
// //val1 = null ?? 10 
// // null basically check kr deta h ki koi null value to ni aai h 
// //agr value aai h to value assign krta h vrna null assign krta h 

// val1 = undefined ?? 15
// console.log(val1);

// Terniary Operator
//condition ? true : false 

 const Price = 100
 Price >= 80 ? console.log("greater than 80") : console.log("less than 80")

