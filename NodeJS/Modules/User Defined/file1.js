function greet(){
    console.log("Hello from file1.js");
    return "end"
}

let emp = {
    name: "abc",
    age: 24,
};

let string = "admin";


//! ==================== CommonJS Format (CJS) ========================
//? pack or export first

//! >>>>>>>>>>>>>>>>>>>>>> 1)  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
module.exports = {
    greet,
    emp,
    string,
};