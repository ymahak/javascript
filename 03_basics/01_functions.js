// // function addTwoNumbers(num1 , num2){
// //     console.log(num1 + num2 );
// // }

// function addTwoNumbers(num1 , num2){
// //    let result = num1 + num2
// //    return result // iske bdd koi kam ni krega function 
//    // console.log("Mahak");  ye line execute hi ni hogi

//    return num1 + num2 
// }

// const result =  addTwoNumbers(3,4)

// //console.log("Result :" , result); // undefined 

// function login(username = "sam")// default value hogi sam
// {
//     if(username === undefined){
//         console.log("Please enter a username");
//         return // ab iske bdd neeche vali line execute ni hogi
//     }
//     return `${username} just logged in `
// }

// //console.log(login("mahak"))   // jb value pass ni krte to undefined aata h 
// //console.log(login()) // undefined just logged in

// // jb pta ni ho kitne arguments aane vale h 

// // ... - issi ko spread operator bolte h aur rest operator bhi its depends kb kisko use krna h 

// function price(...num1) // rest operator - multiple values pass krne ke liye 
// {
//     return num1
// }

// //console.log(price(200,400,600,800))  // ye saari values ek array me ajayengi 

//  // object kaise run hota h function me 

//  const user = {
//     username : "mahak",
//     price : 200
//  }

//  function handleObject(anyUser) {
//     console.log(`username is ${anyUser.username} and price is ${anyUser.price}`);
    
//  }

//  handleObject(user)


//  // arrays  in function

//  const newArray = [4,52,84,99,145]

//  function handleArray(userArray) {
//     return userArray[1]
//  }

//  console.log(handleArray(newArray));


// function myFun(a , b){
//    console.log(a + b);

// }

// myFun(3,5); //8


// function game(a  , b){
//    console.log(a + b); //11
// }

// const result = game(5,6);
// console.log(result);   //undefined 

 

// function game(a  , b){
//    let result = a + b;
//    return result;
   
// }

// const result = game(5,6);
// console.log("Result:" , result);  // Result: 11


//  function user(username){
//    return `${username} just logged in`

//  }
//  console.log(user("Mahak")); //Mahak just logged in
//  console.log(user()); //undefined just logged in


//  function calculatePrice(num1){
//    return num1;
//  }

//  console.log(calculatePrice(200 , 400 ,3000 , 500)); // 200 


//  function calculatePrice(...num1){
//    return num1;
//  }

//  console.log(calculatePrice(200 , 400 ,3000 , 500)); // [ 200, 400, 3000, 500 ] 


const user = {
   username : "Mahak",
   price : 9999
}

function newUser(anyobject){

   return  `${user.username} is my name and price is ${user.price}`;

}

//console.log(newUser(user)); //Mahak is my name and price is 9999



function hello(){
   const username = "Mahak";
   function hi(){
      const website = "Utube";
      console.log(username); 

   }
   //console.log(website);

   hi()
}

hello()

// this is a topic of hoisting ki variable kaha declare hota h kaha unko rakha jata h 

console.log(addone(5)); // it will run properly
function addone(num){
   return num + 1;
}


//console.log(addTwo(2)); // it will show error kyuki yha hme declare krne ke saath saath variable me hold bhi kr liya h 
const addTwo = function(num){
   return num + 2;
}




