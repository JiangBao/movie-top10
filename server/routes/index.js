/**
 * index router
 */
const controller = require('../controllers/index');

const Router = (app) => {
  /**
   * allow cross origin request
   */
  app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
  });

  /**
   * get top10 movie data from douban
   * @param  {object} req
   * @param  {object} res
   * @return {object}
   */
  app.get('/movie-data', controller.handleGetMovieTop10)
}

module.exports = Router;
