const express = require('express');

const app = express();

const userCtrl = require('./controllers/users.ctrl');

function callbackFun() {
    console.log("Nodejs Port is 50001")
}

app.listen(5001, callbackFun);

app.get('/', handlerFun);

app.get('/api/users', userCtrl.getuser)

function handlerFun(req, res) {
    res.send("Hello! Express API")
}