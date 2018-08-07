const express = require('express');

const app = express();

const userRouter = require('./routers/user.router');

function callbackFun() {
    console.log("Nodejs Port is 50001")
}

app.listen(5001, callbackFun);

app.get('/', handlerFun);

app.use('/api/', userRouter)

function handlerFun(req, res) {
    res.send("Hello! Express API")
}