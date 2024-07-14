//  const coding = [ "js" , "ruby" , "cpp" , "python" , "java"]

// //  coding.forEach( function (val){
// //     console.log(val);
// //  })

// // coding.forEach((item , index , arr) => {
// //     console.log(item , index , arr);
// // })

// const myCoding = [
//     {
//         fname : "JavaScript",
//         file : "js"
//     },
//     {
//         fname : "Python",
//         file : "py"
//     },
//     {
//         fname : "C++",
//         file : "cpp"
//     },
// ]

// myCoding.forEach ( (item) => {
//     console.log(item.file);
// })


const myNums = [1,2,3,4,5,6,7,8,9,10]

//const newNums = myNums.filter ( (num) => num > 4 )
// if we have to use scope then we have to write return 
const newNums = myNums.filter( (num) => {
    return num > 4
})
console.log(newNums);

// chaining :- we can use more than 2 methods at a time 
