/**
 * inde controller
 */
const service = require('../services/index');

const Controller = {
  async handleGetMovieTop10(req, res) {
    const result = await service.getMovieTop10();
    res.json(result);
  }
}

module.exports = Controller;
