const user = {
    username: "aditya",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
        
    }
}

//user.welcomeMessage()
//user.username = "sam"
//user.welcomeMessage()

//console.log(this);

/*function chai(){
    let username = "aditya"
    console.log(this.username);
    
}

const chai = function(){
    let username = "aditya"
    console.log(this.username);
    
}*/

/*const chai = () => {    // arrow function    
    let username = "aditya"
    console.log(this.username);
    
}
chai()*/

/*const addTwo = (num1, num2) =>{
    return num1 + num2
}*/

//const addTwo = (num1, num2) => num1 + num2  // implicit return 

//const addTwo = (num1, num2) => (num1 + num2)  // if we use parenthesis then we dont need to write return statsement but not true fo the curly braces

const addTwo = (num1, num2) => ({username: "aditya"}) // in case of object we have to wrapp them in the curly baces else the output is undefined 
console.log(addTwo(3, 4));

