var express = require('express');
var movieData = require('./routes/movieData.js');

var app = express();

// '/movie-data'路径提供top10电影数据
app.use('/movie-data', movieData);

// 开启8888端口监听
app.listen(8888, function() {
    console.log('app is listening at port 8888');
});