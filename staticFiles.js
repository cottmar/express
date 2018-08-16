// To serve static files such as images, CSS files, and JS files, use the express.static built-in middleware function in Express. 
// it is built in middleware.

express.static(root, [options])

// The root argument specifies the root directory from which to serve static assets. 

// Routing - how an application's endpoints (URIS) respond to client requests. The app is listening for requests that match the specified routes and methods, and when it detects a match, it calls the specified callback function. 

// Routing methods can have more than one callback function as arguments. With multiple callback functions, it is important to provide next as an argument to the callback function and then call next() within the body of the function to hand off control to the next callback. 

var express = require('express') // bringing in from express npm
var app = express() // the app will invoke express

app.get('/', (req, res) => {
  res.send('hello')
})

// app.. all() is used to load middleware functions at a path for ALL http request methods. The following handler is executed for requests to the route /secret whether using GET, POST, PUT, DELETE
app.all('/secret', (req, res, next) => {
  console.log('Accessing the secret');
  next() // passes control to the next handler.
})

res.download()  // prompt a file to be downloaded
res.end() // end the reponse process
res.json() // send a JSON response
res.jsonp() // send a JSON response with JSONP support
res.redirect() // Redirect a request
red.render() // Render a view template
res.send() // send a response of various types
res.sendFile() // send a file as an octet stream
res.sendStatus() // set the repsonse status code and send

// Middleware functions are functions that have access to the request object (req), the reponse object (res) and the next function in the apps request-response cycle. The next function is a function in the experss router which, when invoked, executes the middleware succeeding the current middleware. 

// MIDDLEWARE FUNCTIONS CAN:
// 1. Execute any code
// 2. Make changes to the request and the response objects
// 3. End the request-response cycle
// 4. Call the next middleware in the stack. 