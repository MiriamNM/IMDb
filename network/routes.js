const { Router } = require('express');

const movieController = require('../controller/movie/controller');
const nameController = require('../controller/nameAct/controller');
const seriesController = require('../controller/series/controller');
const titleController = require('../controller/titleMovie/controller');
const topMoviesController = require('../controller/topMovies/controller');

const router = Router();

router.get('/searchAll/:movie', movieController.searchMovie);
router.get('/searchAndSave/:movie', movieController.searchAndSave);
router.post('/addMovie', movieController.addMovie);

router.get('/searchSeries/:series', seriesController.searchSeries);
router.get('/searchAndSaveSerie/:series', seriesController.searchAndSaveSeries);
router.post('/addSeries', seriesController.addSerie);

router.get('/searchTitle/:title', titleController.searchTitle);
router.get('/searchAndSaveTitle/:title', titleController.searchAndSaveTitle);
router.post('/addTitle', titleController.addTitle);

router.get('/searchName/:name', nameController.searchName);
router.get('/searchAndSaveName/:name', nameController.searchAndSaveName);
router.post('/addName', nameController.addName);

router.get('/searchTopMovies', topMoviesController.searchTopMovie);
router.get('/searchAndSaveTopMovies', topMoviesController.searchAndSaveTopMovies);
router.post('/addTopMovies', topMoviesController.addTopMovie);

module.exports = router;