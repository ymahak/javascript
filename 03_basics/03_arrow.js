const userN = {
    phlanam : "Mahak",
    price : 999,
 
    welcome : function(){
       //console.log(`${this.phlanam} , welcome to our page` );
       //console.log(this); // current context btayega
 
    }
 
 }
 
 userN.welcome();//Mahak , welcome to our page
 
 userN.phlanam = "Nidhi";
 
 userN.welcome(); //Nidhi , welcome to our page
 
 //console.log(this); // {} it will give empty current context because we are in node  kyuki global ke andr kuch h hi ni but in browser it will show window
 
 // browser ke andr global object - window object h 
 
 
 //this only used in objects we cann't use it in functions

// function chai(){
//     let nam = "Mahak"
//     console.log(this.nam); //undefined
// }

// chai();


// Arrow function  

const chai = () => {
    let nam = "mahak"
    console.log(this.nam); //undefined
}

chai();

// basic syntax of arrow function - () => {}


    //Explicit return arrow function 
    const addTwo = (num1 , num2) => {
        return num1 + num2;
    }

    console.log(addTwo(5,8));

    //implicit return arrow function 
   //const addOne = (num1 , num2 ) =>  num1 + num2
   // const addOne = (num1 , num2 ) =>  (num1 + num2)
  // if we want to return any object in implicit way
  const addOne = (num1,num2) => ({username:"Mahak"}); //{ username: 'Mahak' }

console.log(addOne());
//Note - if we use {} we have to write return otherwise no need

