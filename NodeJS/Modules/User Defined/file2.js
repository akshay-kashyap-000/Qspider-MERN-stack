//! ==================== CommonJS Format (CJS) ========================
// syntax for importing ==>
//! >>>>>>>>>>>>>>>>>>>>>> 1)  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    //? let/const variableName = require("path of file");

// let value = require("./file1.js"); //* here extension doesnot matter 
 // console.log(value);

// console.log(value.string);
// console.log(value.greet());
// console.log(value.emp);

//! >>>>>>>>>>>>>>>>>>>>>> 2)  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//? let /const {key1, key2, ...} = require("path of file");

let {greet, emp, string} = require("./file1.js");
let result = greet();
console.log(result); // equivalent to  console.log(value.greet());
console.log(emp);
console.log(string);



// import {greet, emp, string} from "./file1.js";

// greet();

// console.log(emp);

// console.log(string);
