// yha jo baar likh rhe h ye h global scope

var c = 299

// if ke andr jo bhi likha h vo h block scope
if(true){
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a); error dega 
//console.log(b); error dega kyuki ye dono if vale scope me hi exceute honge uske baar ni 
//console.log(c);

// let me jo bhi value hogi priority global scope ko hi milegi 

// Nested scope - parent ke function ko child access kr pata h 
function one() {
    const username = "Mahak"

    function two(){
        const website = "utube"
        console.log(username);
    }
    //console.log(website); // scope ke baar ni chlega

    two()
}

//one()


// isme koi error ni hoga .. we can access this 
addone(5)
function addone(num){
    return num + 1
}



// addTwo access ni hoga kyuki hmne usko declare krne ke saath variable me hold bhi kr diya h 
addTwo(5)
const addTwo = function(num){
    return num + 2
}



 
