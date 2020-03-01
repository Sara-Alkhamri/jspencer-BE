const express = require('express') // require the express npm module, needs to be added to the project using "yarn add" or "npm install"
const helmet = require('helmet'); //third party middleware for configuring security headers in Node
const cors = require('cors'); //third party middleware to make it easy to configure CORS in Node


//import routes
const authRouter = require('./auth/auth-router')
const usersRouter = require('./users/users-router')
const realtyRouter = require('./realty/realty-router');

const server = express(); //creates an express application using the express module


//call to .use() to tell express which middleware to use. Must come AFTER the server has been created by calling express().
server.use(helmet()); //tells express to use helmet middleware
server.use(express.json()); //built-in middleware in express
server.use(cors()); //tells express to use cors middleware


//routes go here
server.use('/auth', authRouter);
server.use('/realty', realtyRouter);
server.use('/users', usersRouter);



//configures our server to excute a function for ever GET request to '/'
//the second argument passed to the .get() method is the 'Route Handler function', which will run on every GET request to '/'
server.get('/', (req, res) => { 
//express passes the request and response objects to this function
 //the .send on the response object can be used to send a response to the client
    res.send('Server up!')
})

module.exports = server;