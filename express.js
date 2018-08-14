// How does the internet work?

// 1. Request to the Server
// 2. Server QUERIES the database
// 3. the DB returns the result to the server
// 4. the server sends the response to the browser

// Basic Routing in Express

// app.method(PATH, HANDLER)
// - app is an instance of express
// - method is an HTTP request method, in lowercase
// - PATH is a path on the server
// - HANDLER is the function executed when the route is matched

app.get('/new-artcile', (request, response) => {
  response.sendFile('new.html', { root: './public' });
});

// OR 

app.get('/', (req, res) => {
  res.send('Hello World.')
})

// POST example

app.post('/', (req, res) => {
  res.send('Got a POST request')
})

//PUT example

app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})

app.delete('/user', (req, res) => {
  res.send('Got a Delete request at /user')
})

// GET: GET method requests and representation of the specified resource. Requests using Get should only retrieve data and should have no other effect. 
// POST: POST method requests that the server accept the entity enclosed in the request as a new subordinate of the web resource. The data POSTed might be an annotation for existing resources; a message for a bulletin board, newsgroups, mailing list, or comment thread. 
// PUT: PUT method requests that the enclosed entity be stored under the supplied URI. If the uRI refers to an already existing resource, it is modified. If the URI does not point to an existing resouce, then the server can create the resource.
// DELETE: DELETE method deletes the specified resource. 



