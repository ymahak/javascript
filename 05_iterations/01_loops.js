// for 

for (let index = 0 ; index < 10 ; index++){
    const element = index;
    //console.log(element);
}

//table 
 for (let i = 1 ; i < 11 ; i++){
    //console.log(`Outer loop value : ${i}`);
    for(let j = 1 ; j < 11 ; j++){
       // console.log(i + '*' + j + '=' + i*j);
    }
 }


 // break and continue
 for (let i = 1; i <= 20 ; i++){
    if(i == 5){
        //console.log('Detected value');
        break
    }
    //console.log(`Value of i : ${i}`);
 }


 let myArray = ['flash' , 'batman' , 'superman' , 'spiderman']

 let arr = 0
 while(arr < myArray.length){
    //console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
 }

 // do - while loop   --> phle kam hoga uske bdd condition check hogi 

let score = 11

do {
    console.log(`Score is ${score}`)
    score++
}while (score <= 10);
