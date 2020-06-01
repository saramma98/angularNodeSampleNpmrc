const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')
const fileController = require('./controller/fileEditController.js');
const controller=new fileController();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");

  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  next();

});

app.get('/', controller.readFileController);

app.post('/edit', controller.writeFileController);

var server = app.listen(8080, function () {

  var host = server.address().address

  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})

