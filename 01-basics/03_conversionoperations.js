let score = "84"//as the number is in double quotes so the output of the below two lines are string respectively , if there were no double quotes then the output will become number respectively//
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"84"output = 33 which is a number//
// "84jdbu" then output will be NaN which is not an number//
// if we give true instead of 84 then then output will be 1 and for false it will be 0//

let isLoggedIn = 2
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let someNumber = 44
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


