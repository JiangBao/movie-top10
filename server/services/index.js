/**
 * index service
 */
const axios = require('axios'),
      cheerio = require('cheerio'),
      CONST = require('../config/const.js'),
      dataFormat = require('./dataFormat.js');

const Service = {
  /**
   * get movie top10 data from douban
   */
  async getMovieTop10() {
    try {
      const url = 'https://movie.douban.com/top250';
      const resp = await axios.get(url);
      const $ = cheerio.load(resp.data);
      const data = getDataByResp($);
      return dataFormat.successMsg(data);
    } catch(err) {
      console.error(`service.getMovieTop10 ERROR: ${err.stack}`);
      return dataFormat.errorMsg(CONST.CODE.SERVER_ERR);
    }
  }
}

/**
 * get data from request result
 * @param  {object}  $
 * @return {object}
 */
const getDataByResp = ($) => {
  let data = [];
  $('.item').each(function(idx, ele) {
    var item = {};
    var $ele = $(ele);
    item.name = $ele.find(".title").first().text();
    item.picUrl= $ele.find("img").attr("src");
    item.link = $ele.find(".pic").find("a").attr("href");
    item.info = $ele.find(".bd").find("p").first().text();
    item.star = $ele.find(".rating_num").text();
    item.intro = $ele.find(".inq").text();

    data.push(item);
  });

  return data;
}

module.exports = Service;