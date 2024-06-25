// const twitterUser = new Object()   - singleton object 
const twitterUser = {}

twitterUser.id = "123abc"
twitterUser.name = "Sammy"
twitterUser.isLoggedIn = false

//console.log(twitterUser);


const regular = {
    email : "mehakyadav1502@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Mahak h ",
            lastname : "Yadav"
        }
    }
}

//console.log(regular.fullname.userfullname);

const obj1 = {1 : "a" , 2 : "b" , 3 : "c"}
const obj2 = {4 : "d" , 5 : "e"}

//const obj3 = {obj1 , obj2} // dono objects alaag alaag ajayenge 
// const obj3 = Object.assign(obj1 , obj2) - ye bhi same result dega neeche vale ki traha 
//const obj3 = Object.assign({} ,obj1 , obj2) // - actual value hi ayegi 

// same as arrays we can use spread operator 
const obj3 = {...obj1 , ...obj2}
//console.log(obj3);

 // jb database se value aati h 
  
const users = [
    {
        id : "23a",
        name : "ram"
    },
    {
        id : "83a",
        name : "karm"
    },
    {
        id : "9903",
        name : "shyam"
    },
]
// console.log(twitterUser);
// console.log(Object.keys(twitterUser)); // isme jo value milegi uska datatype h array  and aise hi values bhi nikal skte h
// console.log(Object.entries(twitterUser)); // array ke andr array milta h 

// to find out object me ye ye property h ya ni 
//console.log(twitterUser.hasOwnProperty('isLoggedIn')); // true ya false 

const course = {
    coursename : "js in hindi" ,
    price : "999" ,
    courseInstructor : "mahak"
}

const {courseInstructor} = course
console.log(courseInstructor);

// JSON - JavaScript Object Notation  me key and values dono strings hoti h 

// API -  Application Programming Interface - data objects and arrays(jiske andr objects ho skte h) dono ki form me mil skta h  ex- randomuser me api 

