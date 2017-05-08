var express = require('express');
var cheerio = require('cheerio');
var superagent = require('superagent');
var router = express.Router();

// 获取豆瓣top10电影数据
router.get('/', function(req, res, next) {
    getMovieData(function(err, data) {
        res.send(data);
    });
});

// 从豆瓣爬取top10电影数据
function getMovieData(cb) {
    var url = 'https://movie.douban.com/top250';
    superagent.get(url)
        .end(function(err, res) {
            if(err) {
                return cb(err, null);
            }
            var $ = cheerio.load(res.text);
            var result = [];
            $('.item').each(function(idx, ele) {
                var item = {};
                var $ele = $(ele);
                item.name = $ele.find(".title").first().text();
                item.picUrl= $ele.find("img").attr("src");
                item.link = $ele.find(".pic").find("a").attr("href");
                item.info = $ele.find(".bd").find("p").first().text();
                item.star = $ele.find(".rating_num").text();
                item.intro = $ele.find(".inq").text();

                result.push(item);
            })

            cb(null, result.slice(0, 10));
        })
}

module.exports = router;