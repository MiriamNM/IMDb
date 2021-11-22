const { Router } = require('express');

const movieController = require('../controller/movie/controller');
const nameActController = require('../controller/nameAct');
const searchSeriesController = require('../controller/series');
const searchTitleController = require('../controller/titleMovie');
const searchTopMoviesController = require('../controller/topMovies');

const router = Router();

const routes = function (server) {
    server.use('/searchAll/:movie', movieController);
}

// router.get('/searchAll/:movie', movieController.searchAll);


router.get('/nameAct/:name', nameActController.searchNameAct);
router.get('/searchSeries/:series', searchSeriesController.searchSeries);
router.get('/searchTitle/:title', searchTitleController.searchTitle);
router.get('/searchTopMovies', searchTopMoviesController.searchTopMovies);

module.exports = router;