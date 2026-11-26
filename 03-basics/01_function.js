//function addTwoNumbers(number1 , number2){
//    console.log(number1 + number2);
    
//}

//addTwoNumbers(3, 4)

function addTwoNumbers(number1 , number2){
   
    let result = number1 + number2
    return result   //once the return statement is written the things written the bracket after the return statement will not be executed
    
}

const result = addTwoNumbers(3, 4)

console.log("Result: ", result);

function loginUserMessage (username){
    if(username === undefined){
        console.log("Please enter the username");
        return
        
    }
    return`${username} just logged in`
}
console.log(loginUserMessage("aditya"));
