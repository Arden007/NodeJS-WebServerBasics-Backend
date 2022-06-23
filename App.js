// Create a simple Node.js Web Server
var http = require("http"); // 1 - Import Node.js core module

var server = http.createServer(function (req, res) {
  // 2 - creating server
  //handle incomming requests here..
});

server.listen(5000); //3 - listen for any incoming requests

console.log("Node.js web server at port 5000 is running..");
// To display open up a terminal type (node App.js -the file name we created)

// Part 2
// Handle simple HTTP Requst
// The http.createServer() method includes request and response parameters which is supplied by Node.js. The request object can be used to get information about the current HTTP request e.g., url, request header, and data. The response object can be used to send a response for a current HTTP request.
var http = require("http"); // Import Node.js core module

var server = http.createServer(function (req, res) {
  //create web server
  if (req.url == "/") {
    //check the URL of the current request

    // set response header
    res.writeHead(200, { "Content-Type": "text/html" });

    // set response content
    res.write("<html><body><p>This is home Page.</p></body></html>");
    res.end();
  } else if (req.url == "/student") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><p>This is student Page.</p></body></html>");
    res.end();
  } else if (req.url == "/admin") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><p>This is admin Page.</p></body></html>");
    res.end();
  } else res.end("Invalid Request!");
});

server.listen(3000); //6 - listen for any incoming requests

console.log("Node.js web server at port 3000 is running..");
// In the above example, req.url is used to check the url of the current request and based on that it sends the response. To send a response, first it sets the response header using writeHead() method and then writes a string as a response body using write() method. Finally, Node.js web server sends the response using end() method.
// Remeber that we can't run 2 things on the same port why we using "3000"
// in the browser type http://localhost:3000 to display out in the DOM
