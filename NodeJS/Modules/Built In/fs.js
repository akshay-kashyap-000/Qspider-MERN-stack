//! before using any built-in module, we have to import it.

// let/const variableName = require("name of the module")  = "fs, path, os, etc....." ==> CJS

// import variableName from "path of module"  ==> ESM

//! fs --> file system. It provides utilities to interact (CRUD) with files present in the os (Operating System)
//* interaction ==> CRUD (create, read, update, delete)

// we can execute js code in two ways ==> 
//? 1) sync : blocking code
//? 2) async  (callbacks, then/catch, async/await) : non-blocking code

import fs from "fs";

// console.log(fs);

//* parameters and arguments

// function printName(name){
    // parameter
//     console.log("hi", name);
    
// }
// printName("abc"); // arguments


//! path --->
// "." --> means current folder
// ".." --> means one folder back (parent folder)
// "/" --> to acces the folder

//! =================== synchronous execution using js ============================
//! 1) create ---> creating a file
//? method --> writeFileSync()
//* syntax --> fs.writeFileSync("path/ name of the file", "data to be added")
//? both the arguments are mendatory

// console.log("start");
// fs.writeFileSync("./data.json", `{"key2":"value2"}`);
// console.log("file added");
// console.log("middle");
// console.log("end");

//? if the file is present at the given path, new data will override the old one
//? if the file is not present, then a file will be created with the given data

//! 2) <============= update : appending(add something at last) a file ======================>
// using this we can only add some data at the last of the file
//? method --> appendFileSync()
//* syntax --> fs.appendFileSync("path/ name of the file", "new data to be added")
//? both the arguments are mendatory

//* "\n" --> new line
console.log(1);
// // fs.appendFileSync("./demo.txt",`\n{ key:"this is appended data"}`)
// fs.appendFileSync("./Emp.java", `class Emp{}`)
// console.log("data added");
// console.log(2);
// console.log(3);

//! appendFileSync() ==> if the file is present at the path then data will be appended otherwise a new file will be created


//! 3) <======== read : fetch a file =========>
//? method --> readFileSync()
//* syntax --> fs.readFileSync("path of the file", "encoding")
//? "encoding" argument is not mandatory

console.log(1);
let data = fs.readFileSync("./demo.txt")
console.log(data);
// buffer value --> array of binary numbers
console.log(2);
console.log(3);

