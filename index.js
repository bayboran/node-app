var express = require('express');
 
var app = express();

app.get('/', function (req, res) {
 res.send('selam dünyalı biz dostuz');
});

app.listen(process.env.PORT || 3000);
 
module.exports = app;