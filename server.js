 var express = require('express');
 var app = express();

 app.use(express.static(__dirname + '/public'));

 app.listen(8081);

console.log("server ok na porta 8081");
