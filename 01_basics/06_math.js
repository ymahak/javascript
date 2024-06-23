const score = 200
//console.log(score);

const balance = new Number(500)
// console.log(balance); //strictly number

// console.log(balance.toString()); //500
// console.log(balance.toFixed(2)); //500.00  decimal values

const other = 129.8345
//console.log(other.toPrecision(3)); //130

const hundreds = 100000000
//console.log(hundreds.toLocaleString('en-IN'));  //india style ke hisab se comma's lg jayenge 


// *********************** Maths ***************************

//console.log(Math);
// console.log(Math.abs(-7)); //-ve ko +ve me convert
// console.log(Math.round(2.8)); //roundoff 3

// properties like - ceil(decimal me highest value like 4.2 ka ans 5 ) , floor(neeche vali value decimal me) , min(array me min value) , max

// console.log(Math.random());  //0-1 tk value
// console.log((Math.random()*10) + 1); //min value to 1 ayegi .. start 1 se hoga


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); //10-20

