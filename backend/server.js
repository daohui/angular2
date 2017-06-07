var express = require('express');
var app = express();
var parser = require('body-parser');

app.use(parser.json());

var messages = [];

// set CORS options
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

var api = express.Router();
app.use('/api', api);

api.get('/messages', (req, res) => {
    console.log(`get request recved. return ${messages.length} messages` );
    res.json(messages);
})

api.post('/messages', (req, res) => {
    var validate = function(data) {
        var str = JSON.stringify(data);
        console.log(`todo: validate ${str}...`); // TODO
    }

    console.log('handle post request...');
    try {
        var data = req.body;
        validate(data);
        messages.push(data);
        console.log("ok. number of messages: " + messages.length);
        res.status(201).end();
    } catch(exception) {
        res.status(500); // TODO
    }
})

app.listen(6180);
