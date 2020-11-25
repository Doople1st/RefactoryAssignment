const logger = require('./Logger');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const jsonParser = bodyParser.json();


app.post("/",jsonParser,(req,res) => {
    res.writeHead(201);
    delete logger.fields.hostname;
    delete logger.fields.pid;
    console.log(req.headers['x-random']);
    console.log(req.body['counter']);
    //console.log("Success: "+req.method+" http://" + req.headers.host + req.originalUrl + " ",{counter: req.body.counter, 'X-RANDOM' : req.headers['x-random']});
    logger.info("Success: "+req.method+" http://" + req.headers.host + req.originalUrl + " ",{counter: req.body.counter, 'X-RANDOM' : req.headers['x-random']});
    res.end();
});


app.listen(3000,'127.0.0.1');
console.log("Server is listening");
