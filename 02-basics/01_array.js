// array
const myArr = [0,1,2,3,4,5]
const  myHeroes = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);
//array methods
//myArr.push(9)
//myArr.push(6)
//myArr.pop(3)
//myArr.unshift(5)// 5 comes in the begining of the array

//const newArr = myArr.join()
//console.log(myArr);
//console.log(newArr);
//slice , splice 


console.log("A",myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);//output is 1,2
console.log("B", myArr);
const myn2 = myArr.splice(1,3)
console.log(myn2);//output is 1,2,3
console.log("C", myArr);// in splice the original array is manupilated this the main difference between slice and splice 
 