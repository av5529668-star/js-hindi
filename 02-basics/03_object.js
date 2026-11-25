//singleton 
// object.create
//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Aditya",
    "full name": "Aditya Verma ",
    mySym :"mykey1",
    age: 18,
    location:"lucknow",
    email: "aditya@gamii.com", 
    isLoggedIn: false,
    lastLoggedinDays:["Monday","Saturday"]
}

    console.log(JsUser.email);
    console.log(JsUser["email"]);
    console.log(JsUser["full name"]);
    console.log(JsUser.mySym);
    
    
    
    

    