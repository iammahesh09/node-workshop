const http = require('http');

var classbackFun = function (req, res) {
    res.write("Hello Node WorkShop")
    res.end();
}

http.createServer(classbackFun).listen(5001)

console.log("Nodejs server port 50001")