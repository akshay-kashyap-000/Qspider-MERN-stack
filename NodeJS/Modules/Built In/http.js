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

import http from 'http';
// console.log(http);

let server = http.createServer((req, res)=>{
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
    res.writeHead(200,{'Content-Type': 'text/plan'})
    res.end('hello from server')

})


server.listen(9000, ()=>{
    console.log('server is listening on port 9000');
    console.log("second line");
    
    
})

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
//? (server error) --> 5XX (5000, 501, etc...)

//# Content-Type
