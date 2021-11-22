const { Router } = require('express');

const movieController = require('../controller/movie/controller');
const nameActController = require('../controller/nameAct');
const seriesController = require('../controller/series/controller');
const searchTitleController = require('../controller/titleMovie');
const searchTopMoviesController = require('../controller/topMovies');

const router = Router();

const routes = function (server) {
    server.use('/searchAll/:movie', movieController);
}

// router.get('/searchAll/:movie', movieController.searchAll);

router.get('/searchSeries/:series', seriesController.searchSeries);
router.post('/addSeries', seriesController.addSerie);

router.get('/nameAct/:name', nameActController.searchNameAct);
router.get('/searchTitle/:title', searchTitleController.searchTitle);
router.get('/searchTopMovies', searchTopMoviesController.searchTopMovies);

module.exports = router;