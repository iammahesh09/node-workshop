const express = require('express');

const app = express();

function callbackFun() {
    console.log("Nodejs Port is 50001")
}

app.listen(5001, callbackFun);

app.get('/', handlerFun);


function handlerFun(req, res) {
    res.send("Hello! Express API")
}