console.log("inside server.js");

function printName(name) {
    console.log(`hello : ${name}`);
    
}

function printAge(age) {
    console.log(age , "years ago");
    
}

module.exports = {
    printName,
    printAge,
}

//! module wrapper --> every code in nodeJS is wrapped inside an IIFE by NodeJS, with 5 parameters passes namely ==> exports, require, module, __filename, __dirname i.e. (function(exports, require, module, __filename, __dirname){ ... })()

//* iife ==> immediately invoked function expression

// (function(exports, require, module, __filename, __dirname){
//     console.log("inside server.js");

// function printName(name) {
//     console.log(`hello : ${name}`);
    
// }

// function printAge(age) {
//     console.log(age , "years ago");
    
// }

// })();
