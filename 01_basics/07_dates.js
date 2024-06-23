 
 let myDate = new Date()
//  console.log(myDate.toString());
//  console.log(myDate.toDateString()); // day and date Sun Jun 23 2024
//  console.log(myDate.toISOString());
//  console.log(myDate.toJSON()); 
//  console.log(myDate.toLocaleDateString()); //date   6/23/2024
//  console.log(myDate.toLocaleString());  // date & time  6/23/2024 time
// console.log(typeof myDate);  //object

//hme date likhni h to 
let myCreatedDate  = new Date(2024 , 8 , 23) // months jo h vo 0 se start hote h 
//console.log(myCreatedDate.toDateString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp); //mili sec
// console.log(myCreatedDate.getTime());
 
// agr sec me chahiye to 
console.log(Math.floor(Date.now()/1000)); // sec me agya

let newDate = new Date()
console.log(newDate.getMonth());



