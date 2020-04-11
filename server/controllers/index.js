/**
 * index controller
 */
const service = require('../services/index');

const Controller = {
  /**
   * handle get movie top 10
   * @param {object} req 
   * @param {object} res
   * @return {object} 
   */
  async handleGetMovieTop10(req, res) {
    const result = await service.getMovieTop10();
    res.json(result);
  },

  /**
   * handle get mivie data by page
   * @param {object} req 
   * @param {object} res
   * @return {object} 
   */
  async handleGetMovieTopByPage(req, res) {
    const result = await service.getMovieByPage(req.params.page);
    res.json(result);
  }
}

module.exports = Controller;
