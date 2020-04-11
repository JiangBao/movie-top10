/**
 * index service
 */
const axios = require('axios');
const cheerio = require('cheerio');
const CONST = require('../config/const.js');
const dataFormat = require('./dataFormat.js');

const Service = {
  /**
   * get movie top10 data from douban
   * @return {object}
   */
  async getMovieTop10() {
    try {
      const url = 'https://movie.douban.com/top250';
      const resp = await axios.get(url);
      const $ = cheerio.load(resp.data);
      const data = getDataByResp($);
      return dataFormat.successMsg(data);
    } catch(err) {
      console.error(`SERVICE.GETMOVIETOP10_ERROR: ${err.stack}`);
      return dataFormat.errorMsg(CONST.CODE.SERVER_ERR);
    }
  },

  /**
   * get movie data by page
   * @param {number}  page
   * @return {object}
   */
  async getMovieByPage(page=1) {
    try {
      // param limit
      if (!Number.isInteger(parseInt(page)) || page < CONST.MOVIE_TOP250.START_PAGE || page > CONST.MOVIE_TOP250.END_PAGE) {
        return dataFormat.errorMsg(CONST.CODE.NOT_FOUND, 'invalid params')
      }
      const url = `https://movie.douban.com/top250?start=${25*(page-1)}`;
      const resp = await axios.get(url);
      const $ = cheerio.load(resp.data);
      const data = getDataByResp($);
      return dataFormat.successMsg(data);
    } catch (e) {
      console.error(`SERVICE.GETMOVIEBYPAGE_ERROR: ${err.stack}`);
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