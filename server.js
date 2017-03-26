var express = require('express');
var myParser = require("body-parser");
var app = express();
var fs = require("fs");



app.get('/listUsers', function (req, res) {
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
})

//POST Functionality from CircleCI Webhhok
app.use(myParser.urlencoded({ extended: true }));
app.use(myParser.json());
app.post('/ParseWebHookData', function (req, res) {

    var repo_id = req.query.repo_id;
    var circle_ci_token = req.query.circle_ci_token;
    var circleCIResponse = req.body;


    console.log(repo_id);
    console.log(circle_ci_token);
    console.log(circleCIResponse);
    var date = new Date();
    console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
})



//POST Functionality

var server = app.listen(8081, "127.0.0.1", function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

})