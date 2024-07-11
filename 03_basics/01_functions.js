// function addTwoNumbers(num1 , num2){
//     console.log(num1 + num2 );
// }

function addTwoNumbers(num1 , num2){
//    let result = num1 + num2
//    return result // iske bdd koi kam ni krega function 
   // console.log("Mahak");  ye line execute hi ni hogi

   return num1 + num2 
}

const result =  addTwoNumbers(3,4)

//console.log("Result :" , result); // undefined 

function login(username = "sam")// default value hogi sam
{
    if(username === undefined){
        console.log("Please enter a username");
        return // ab iske bdd neeche vali line execute ni hogi
    }
    return `${username} just logged in `
}

//console.log(login("mahak"))   // jb value pass ni krte to undefined aata h 
//console.log(login()) // undefined just logged in

// jb pta ni ho kitne arguments aane vale h 

// ... - issi ko spread operator bolte h aur rest operator bhi its depends kb kisko use krna h 

function price(...num1) // rest operator - multiple values pass krne ke liye 
{
    return num1
}

//console.log(price(200,400,600,800))  // ye saari values ek array me ajayengi 

 // object kaise run hota h function me 

 const user = {
    username : "mahak",
    price : 200
 }

 function handleObject(anyUser) {
    console.log(`username is ${anyUser.username} and price is ${anyUser.price}`);
    
 }

 handleObject(user)


 // arrays  in function

 const newArray = [4,52,84,99,145]

 function handleArray(userArray) {
    return userArray[1]
 }

 console.log(handleArray(newArray));

 