const express = require('express');
const { serverConfig } = require('./config');


// Initializing the express app
const app = express()


app.use(function (req, res , next) {
    console.log("I will be hit even when any request is sent");
    next();
});

app.use('/url1', function (req, res,next) {
    console.log("Server is listening at the url1");
    // return res.json({
    //     success: true,
    //     msg: "Hola !! Server is up and listening at url1"
    // })
    next()
})
app.get('/url1/url2', function (req, res) {
    console.log("Server is listening at the url2");
    return res.json({
        success: true,
        msg: "Hola !! Server is up and listening at url2"
    })
})


// Function for starting the server
function startServer() {
    // Listening to the specific port.
    app.listen(serverConfig.PORT, function () {
        console.log("Server has started listening on ", process.env.PORT);
    });
}


// starting the server for the node.js
startServer();