const server = require('./server');

const port = process.env.PORT || 4000;
server.listen(port, () => { //server listening for connections to the port
                            //the callback function passed as the second argument will run once when the server starts
    console.log(`Server up on ${port}`);
})