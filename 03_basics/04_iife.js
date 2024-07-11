// Immediately Invoked Function Expressions (IIFE)
// global scope se koi pollution ni chahiye hm isliye alag se scope bna lete h aur vo jbhi excute ho jaaye
//global scope ke pollution ko htane ke liye iife ka use krte h 

(function hello(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();

// same with arrow functions

( (name) => {
    console.log(`DB connected two ${name}`);
})  ('Mahak') ;




(function hello() {
    console.log(`DB connect`);
}) () ;

((lastname) => {
    console.log(`helloo ${lastname}`);
}) ('yadav ji')

