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
//console.log(loginUserMessage("aditya"));


function calculateCartPrice(...num1){//here the three dots are the rest operator means that the function can pass various values
    // if i pass val1, val2, ...num1 then the output being 500 and 1000 only 
    return num1
}
//console.log(calculateCartPrice(200, 400, 500, 1000));

const  user = {
    username: "aditya",
    price: 199
}

function handleObject(anyobject){
    console.log(`Usernameis ${anyobject.username} and price is${anyobject.price}`);
    
}

//handleObject(user)
handleObject({
    username: "adi",
    price: 399
})

const myNewArray = [200, 400, 600, 100]

function returnSecondValue(getArry){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 600, 100]));
