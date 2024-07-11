// current contast ke liye 

const user = {
    username : "mahak",
    price : 999 , 
    welcome : function ( ) {
        console.log(`${this.username} , welcome to website`);
    }
}

user.welcome()
user.username = "sam"
user.welcome() // sam


