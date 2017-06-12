var express = require('express');
var movieData = require('./routes/movieData.js');

var app = express();

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

// '/movie-data'路径提供top10电影数据
app.use('/movie-data', movieData);

// 开启8888端口监听
app.listen(8888, function() {
    console.log('app is listening at port 8888');
});