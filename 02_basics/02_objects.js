// singleton - jo bhi constructor ke help se bnate h  (ye apne traha ka ek hi object h)
// object literals se singleton object ni bnta
// Object.create - constructor ke through

//symbol 
const mySym = Symbol("key1")

 
const JsUser = {
    name : "Mahak",
    "full name " : "mahak yadav",  //isko . se access ni kr skte
    age : 12,
    [mySym] : "mykey1",  //symbol
    reg_no : 12109556,
    state : "Punjab",
    isLoggedIn : false 
}

// console.log(JsUser.state);
// console.log(JsUser["state"]); // string ki traha access krna pdega
// console.log(JsUser["full name "]);  
// console.log(JsUser[mySym]);

// Object.freeze(JsUser) // koi change ni kr skte 
// JsUser.age = 15
//console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello there , nice meeting u");
 }

JsUser.greetingTwo = function(){
    console.log(`Hello there , ${this.name}`);
 } 

 //console.log(JsUser.greeting);
 console.log(JsUser.greeting());
 console.log(JsUser.greetingTwo());



