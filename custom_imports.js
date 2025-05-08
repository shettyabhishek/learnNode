//The reqLstnr callBack function itself takes 2 parameters as input 
/**
 * first param: request of type Incoming message 
 * second param: response of type ServerResponse
 */ 
const requestHandler = (req,res) => {
    /**
     * The request object has lot of information of which some of the key ones are
     * - url => req.url
     * - method => req.method
     * - headers => req.headers
     */

    //sample html sent as response 
    const sampleHTMLResp = `<html><head><title>Learn Node JS</title></head>
    <style>body{font-family: Helvetica;margin: 10px;}</style>
    <body><h1 style='padding: 2px'>Simple implmentation of Node Server</h1><p>
      The server is running.
    </p></body></html>`;

    res.setHeader('Content-Type','text/html');
    res.write(sampleHTMLResp);
    res.end();
}

module.exports = requestHandler;