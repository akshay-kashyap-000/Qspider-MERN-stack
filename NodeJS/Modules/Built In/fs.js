//! before using any built-in module, we have to import it.

// let/const variableName = require("name of the module")  = "fs, path, os, etc....." ==> CJS

// import variableName from "path of module"  ==> ESM

//! fs --> file system. It provides utilities to interact (CRUD) with files and folders present in the os (Operating System)
//* interaction ==> CRUD (create, read, update, delete)

// we can execute js code in two ways ==> 
//? 1) sync : blocking code
//? 2) async  (callbacks, then/catch, async/await) : non-blocking code

import { log } from "console";
import fs, { createReadStream, createWriteStream, mkdirSync, renameSync, rmdirSync } from "fs";

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
// console.log(1);
// // fs.appendFileSync("./demo.txt",`\n{ key:"this is appended data"}`)
// fs.appendFileSync("./Emp.java", `class Emp{}`)
// console.log("data added");
// console.log(2);
// console.log(3);

//! appendFileSync() ==> if the file is present at the path then data will be appended otherwise a new file will be created


//! 3) <======== read : fetch a file =========>
//? method --> readFileSync()
//* syntax --> fs.readFileSync("path of the file", "encoding")
//~ encoding --> while converting into binary format, encoding value defines that how many bits will it use to convert a single character/digit
//? "encoding" argument is not mandatory

// console.log(1);
// let data = fs.readFileSync("./demo.txt")
// console.log(data);
// buffer value --> array of binary numbers
//? Whatever the content was, it got converted into binary format

//! 1) use toString() ==> defailt argument of toString() is: "utf-8"
// console.log(data.toString("hex")); //TODO: buffer streams           

//! 2) use encoding value 
// let data = fs.readFileSync("./demo.txt", "utf-8")
// console.log(data);


// console.log(2);
// console.log(3);

//? Ques) copy the contents of "about.html" into a new file "about.txt"
// let payload = fs.readFileSync("./about.html","utf-8")

// fs.writeFileSync("./about.txt", payload)

// console.log("file created");

//! 4) <================= delete a file ===================>
//? method --> unlinkSync()
//* syntax --> fs.unlinkSync("path of the file")

// try {
//     console.time("file op")
// console.log("started");

// fs.unlinkSync("./about.html");
// console.log("file deleted");

// console.log("middle");
// console.log("end");

// console.timeEnd("file op");
// } catch (error) {
//     console.log("something went wrong");
    
// }


//! 5) <================ Renaming a file / folder===================>
//? method name ==> renameSync()
//* syntax --> fs.renameSync("old file/folder path/name","new file path/name")

// fs.renameSync("../Modules", "../Module")

// fs.renameSync("./about.txt","./about.html")
// console.log("File renamed");

//! 6) <================ Creating a folder/directory ===================>
//? method name ==> mkdirSync()
//* Syntax ==> fs.mkdirSync("path of the folder/name")

// console.log(1);
// fs.mkdirSync("./Folder1")
// fs.mkdirSync("./Folder1/sub") // for nested structure, create the outer layer first
// console.log(2);
// console.log(3);

//? Ques) create this structure "backend/controller/app.js"
// fs.mkdirSync("../../Backend")
// fs.mkdirSync("../../Backend/Controller")
// fs.writeFileSync("../../Backend/Controller/app.js", "data")

//! 7) <================ Deleting  a folder/directory ===================>
//? methiod name ---> rmdirSync()
//* syntax ==> fs.rmdirSync("path of the folder/directory")

// fs.rmdirSync("./demo"); //! ---> using this we can only delete empty folders
// console.log("folder deleted");

// fs.unlinkSync("../../Backend/Controller/app.js")
// fs.rmdirSync("../../Backend/Controller")
// fs.rmdirSync("../../Backend")

// console.log("backend dir deleted");

//* fs.rmdirSync("./demo", {recursive: true}) // to delete all the files and folders recursively



//! ==================asynchronous execution using fs (callbacks) =================================

//! 1) Creating a file
//? method name ==> writeFile()
//* syntax --> writeFile("path/name of the file.txt"."data", callback)

//? error first callback --> in NodeJS, inside  callback functions , the first parameter is mostly reserved for error, this is called as error first callback

// console.log(1);

// fs.writeFile("./demo.py", "def", (err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("file created");
    
// });

// setTimeout(()=>{
//     console.log("set timeout");
    
// }, 3000);
// console.log(2);
// console.log(3);

//! 2) ========== Reading a file ===============
//? Method name ==> readFile()
//* syntax ===> fs.readFile("path/name of the file", "encoding", callback)

// console.log(1);

// fs.readFile("./demo.py", "utf-8" , (err, xyz)=>{
//     if(err) console.log(err);
//     console.log(xyz);
    
// })

// console.log(2);
// console.log(3);

//! 3) ========== appending a file
//? Method name ==> appendFile()
// //* syntax ===> fs.appendFile("path/name of the file", "data", callback)

// console.log(1);

// fs.appendFile("./demo.py", "this is second line" , (err, xyz)=>{
//     if(err) console.log(err);
//     console.log(":File Updated");
    
// })

// console.log(2);
// console.log(3);


//! 4) ================ deleting a file ================

// ! 5) ================ creating a folder ================

// ! 6) ================ deleting a folder ================

// ! 5) ================ renaming a folder/file ================



//! ==================asynchronous execution using fs (promise --> then and catch) =======================
// let fsPromise = require('fs').promises;
// let fsPromise = require('fs/promises');
import fsPromise from 'fs/promises';

// //! 1) Create a file
// //? method name ==> writeFile()
// //* syntax --> writeFile("path/name of the file.txt"."data").then().catch()
// console.log(1);

// let writePromise = fsPromise.writeFile('./java,txt', "this is java file");
// console.log(writePromise);

// writePromise.then(()=>{
//     console.log("file created");
    
//     })
//     .catch((err)=>{
//         console.log(err);
        
//     })

//     console.log(2);
//     console.log(3);
    


// //! 2) reading a file
// //? method name ==> readFile()
// //* syntax --> readFile("path/name of the file.txt"."data").then().catch()
// console.log(1);

// let readPromise = fsPromise.readFile('./java,txt', "utf-8");
// console.log(readPromise);

// readPromise.then((data)=>{
//     console.log(data);
    
//     })
//     .catch((err)=>{
//         console.log(err);
        
//     })

//     console.log(2);
//     console.log(3);
    


// //! 3) deleting a file
// //? method name ==> unlink()
// //* syntax --> unlink("path/name of the file.txt").then().catch()
// console.log(1);

// let deletePromise = fsPromise.unlink('./java,txt')

// deletePromise.then(()=>{
//     console.log('file deleted');
    
//     })
//     .catch((err)=>{
//         console.log('something went wrong');
        
//     })

//     console.log(2);
//     console.log(3);
    

// let promise = new Promise((res, rej)=>{
//     let a = 1;

//     if(a ==1){
//         res({name:"xyz"})
//     } else {
//         rej([1, 2, 3, 4])
//     }
// });

// console.log(promise);

// promise.then((a)=>{
//     console.log(a);
//     console.log("Promise is resolved");
    
// }).catch((err)=>{
//     console.log("something went wrong");
    
// })

//! updating a file, creating a folder, rename a file/folder, deletinga folder


//! ================ asynchronous execution using fs (promise --> async and await ) =======================

//? async and await both are keyword which are used together
//? async is used in function declaration
//? await is used inside function body (await execution stops)
//? async function always return a promise

/* async function greet() {
    return "hello"
}

let data = greet()
console.log(data); */

// async function getTodos() {
//     console.log("first function");
//     let output = await fetch("https://jsonplaceholder.typicode.com/posts")
//     console.log("api called 1");
//     // console.log(output);
    
// }

// async function getTodos2() {
//     console.log('second function');
//     let output = await fetch('https://jsonplaceholder.typicode.com/posts')
//     console.log("api called 2");
//     // console.log(output);
    
// }
// getTodos();
// getTodos2();


//! 1) ======================= creating a file ================
//? method name ==> writeFile()

// async function createFile() {
//     await fsPromise.writeFile('./demo1.txt', 'data to be written')
//     console.log("file created");
    
// }
// createFile();

//! 2) =============== reading a file =====================
//? method name ==> readFile()

async function readFile() {
    let readData = await fsPromise.readFile("./demo1.txt",'utf-8')
    console.log(readData);
    
}

readFile();

//! name of the  global object in NodeJS ==> Global {
//! fs:{readFile:Function}
//! readFile: Function 
//! }

//* Ques >> create this structure ==> "Project/backend/app.js" (Outer layer)

// async function createStructure() {
//     await fsPromise.mkdir('./Project')
//     await fsPromise.mkdir('./Project/backend')
//     await fsPromise.writeFile('./Project/backend/app.js', "{data}")
// }
// createStructure();

//! deleting a file and folder, remaining a file/folder
//* createReadStream, createWriteStream

//! Buffers ==> it is an aray like object which holds binary data, which is used to store data in memory (RAM)
//!  Buffer size cannot be controlled or set. it cannot be modified also throughout the operation
//! once the operation is done, buffer is destroyed


