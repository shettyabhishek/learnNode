//importing the external dependencies 
const http = require('http');
const express = require('express');

const portNum = 8574;
//the experss package is imported as a function which is assigned to a const
//and can be passed as a handler function to the createServer method
//but rather we can call the listen function with the portnumber directly 
const app = express();

/**
 * Sample implementation to understand the middleware in express
app.use((req,res,next)=> {
    console.log("The middleware is called here - 1");
    next();
})
app.use((req,res,next)=> {
    console.log("The middleware is called here - 2");
    res.send('<h1> c </h1>');
})
**/

//implementing the route samples here 
app.use('/users',(req,res,next)=> {
    res.send('<h1> User page implementation </h1>');
});
app.use('/',(req,res,next)=> {
    res.send('<h1> Application running </h1>');
})

//creating a server
app.listen(portNum); 