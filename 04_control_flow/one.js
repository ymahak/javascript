 // comparison operators -- > , < , <= , >= , == , != , ===(strictly check the data type also) , !==
  
// var ka scope global hota h to if we have to access anything locally we use const or let

// const score = 200

// if(score > 100){
//     //block scope 
//     const power = "fly"
//     // var use krenge to bhr vala bhi execute ho jayega
//     console.log(`User power : ${power}`);
// }

//console.log(`power : ${power}`); // ye run ni hoga kyuki power global scope me execute ni hua h 
 

 //implicit scope  -- aise ni krna h 
//  const balance = 1000
//  if(balance > 500) console.log("hellooo");

// control flow -> if , if else , if else if , switch case 


const month = 3

switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;        
    default:
        console.log("default");
        break;
}


 