setTimeout(()=>{
    console.log('Inside setTimeout');
}, 2000);

setTimeout(()=>{
    console.log('Inside setTimeout 2');
},5000);

Promise.resolve().then(()=>{
    console.log("promise");
    
});

console.log('Hello, World!');


//? open the terminal with the path of the folder in which the file is present

//! to execute any js file using nodejs,

//? type in terminal: node filename.js

//? extension --> it is not mendatory to write the extension of the file while executing it using nodejs

//! the name of the global object is nodeJS is "global"

// console.log(global);

//! the name of the global object in browser is "window"
