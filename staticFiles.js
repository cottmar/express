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