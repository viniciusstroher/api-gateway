import express from "express";

console.log("STARTING...");
const app = express();
var teste = 1;
var a = [];

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

console.log("DONE...");
