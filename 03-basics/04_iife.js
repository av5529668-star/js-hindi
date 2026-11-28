// immediately invoked function expression iife

(function chai(){
    console.log(`DB connected`);
    
})();  //here';' is important 

(  (name)  => {
    console.log(`DB connected 2 ${name}`);
    
}) ('aditya')// two iife is connected by a semi colon