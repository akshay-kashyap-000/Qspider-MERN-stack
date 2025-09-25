//~ HTTP ==> Hypertext Transfer Protocol, in order to communicate in between server and client or server and server


//~ GET ==> this is used when we want to fetch the resources
//~ POST ==> this used when a resource is sent server
//~ DELETE ==> this is used for deleting a resource
//~ PUT ==> this is used for updating a resource (fully)
//~ PATCH ==> this is used for updating a resource (partially)


//! http module ==> it is a built-in module, through which we can create servers

//# 1) import http module
//# ) use createServer() ==> this accepts one parameter, which is a callback function, and store it in a variable
//? this callback function accepts two parameters --> req and res (object)
//# 3) assign a port number using listen() ==> using this pass portNumber and one callback function(not mendatory)

import fs from 'fs'
import http from 'http';
// console.log(http);

// let server = http.createServer((req, res)=>{
    // // res.end('message from server !!!!') 
    // // console.log(req);
   // // console.log(req.headers);
   // // console.log(req.method);
    // // console.log(req.url);    

    //! write() is used to display message on the UI
    // res.write("hello from server")
    //! to end the req-res cycle use end()
    //~============================
    // res.end('this is from end()');
    //~============================

    // res.write("first statement");
    // res.write("second statement");
    // res.end()
    // res.write('third statement') //~ this will crash server

    //~ ==========================================
    // res.writeHead(200,{'Content-Type': 'text/plain'})
    // res.end('hello from server')

    //~==================== Sending html file =========================
    // res.writeHead(201, {'Content-Type':'text/html'});
    // res.writeHead(200, "msg", {"Content-Type":'text/html'})
    // let payload = fs.createReadStream('./about.html','utf-8')
    // payload.pipe(res); //! pipe() internally call the end()/ req-res cycle is ended


    //~ ======================= Sending CSS file =========================
    // res.writeHead(200, {"Content-Type":"text/css"})
    // let payload = fs.createReadStream('./style.css', 'utf-8')
    // payload.pipe(res)

    //~ ======================= Sending json file ========================
    // res.writeHead(200, {'Content-Type':'application/json'})
    // fs.createReadStream('./data.json','utf-8').pipe(res)

// });
// server.listen(9000, ()=>{
//     console.log('server is listening on port 9000');
//     console.log("second line");
// })

//$ to close the server, press "ctrl + c" on terminal
//$ after every modification , restart the server

//$ if the current port is occupied, we will get an error : "address already in use"
//$ node --watch filename.js ==> limitation: we can only run one file  at a time

//! res.writeHead(StatusCode, {'Content-Type': ''})
// statusCode --->
//? (processing)   --> 1XX (100, 101, 103)
//? (success)      -->  2XX (201, 202, 204)
//? (redirection)  --> 3XX (300, 301, etc...)
//? (client error) --> 4XX (400, 401, 404)
//? (server error) --> 5XX (500, 501, etc...)


//# Content-type --> defines what content is being sent to the client
//$ for string messages ==> "text/plain"
//$ for html files ==> "text/html"
//$ for css files ==> "text/css"
//$ for json files ==> "application/json" 

//! utf-8 ==> Unicode Transformation Format, it defines the encoding value which specifies the number of bits the conversion is going to take (8 bit)
//$ encoding >> utf-8 >> 8 bits of 

//# Routing ==> handling user's multiple request
// endpoints ==> '/about', '/learn'

let server = http.createServer((req, res)=>{
    let endpoint = req.url;
    if(endpoint === '/about') res.end('this about page')
        else{
            res.end('something else')
        }

})

server.listen(9000,(err)=>{
    if(err) console.log(err);
    console.log('running');
    
    
})






