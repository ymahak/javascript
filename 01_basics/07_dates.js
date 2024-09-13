 
 let myDate = new Date()
 console.log(myDate.toString());  //Fri Sep 06 2024 19:42:10 GMT+0000 (Coordinated Universal Time)
 console.log(myDate.toDateString()); // Fri Sep 06 2024
 console.log(myDate.toISOString()); //2024-09-06T19:42:10.041Z
console.log(myDate.toJSON()); //2024-09-06T19:42:10.041Z
console.log(myDate.toLocaleDateString()); //date   6/23/2024
console.log(myDate.toLocaleString());  // date & time  6/23/2024 time
console.log(typeof myDate);  //object

//hme date likhni h to 
let myCreatedDate  = new Date(2024 , 8 , 23) // months jo h vo 0 se start hote h 
console.log(myCreatedDate.toDateString());//Mon Sep 23 2024

let myTimeStamp = Date.now()
console.log(myTimeStamp); //mili sec
console.log(myCreatedDate.getTime());
 
// agr sec me chahiye to 
console.log(Math.floor(Date.now()/1000)); // sec me agya

let newDate = new Date()
console.log(newDate.getMonth()); //8



