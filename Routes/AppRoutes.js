const HomeController = require("../Controllers/HomeController");
const ShowsController = require("../Controllers/ShowsController");

const AppRouter = require("express").Router();

AppRouter.get("/", HomeController.getHomePage);
AppRouter.get("/get-movies-and-shows", ShowsController.getMoviesAndShows);
AppRouter.get("/get-movie-id/:movie_id", ShowsController.getMovieOrShowById);

module.exports = AppRouter;