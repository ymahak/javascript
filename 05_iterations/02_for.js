// Array specific loops 

const arr = [1,2,3,4,5,6]

for (const num of arr) {
    //console.log(num);   
}


// Maps -> key-value pair . Unique hota h no duplicate values 
// maps iterate ni hote to for in loop ni lagega isme
const map = new Map()
map.set('IND' , "India");
map.set('USA' , 'United States of America')
map.set('Fr' , 'France')
map.set('Fr' , 'France')

//console.log(map);

// ek ek values chahiye to 
for (const key of map) {
    //console.log(key); 
}

// destructure ho jayega
for (const [key , value] of map) {
    console.log(key , ":-" , value);
    
}

