/**
 * - Code modules of NodeJs http,https,fs,os,path
 * - Importing modules into NodeJs is done through 'require'
 */

/**
 * In this file we are creating a server which is Node JS feature importing the http module
 */
const http = require('http');
//importing custom package 
const requestHandler = require('./custom_imports');
const port = 8574;

//The createServer method takes callBack function as parameter of type requestListener
//The method creates a server instance and we need to store it in a constant which anyways will not change
//within a lifecycle of a server 
const server = http.createServer(requestHandler);
//once the server is created it has to listen to request and respond so for that we need to assign a port number
server.listen(port);