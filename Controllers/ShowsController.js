const ShowsModel = require("../Models/ShowsModel");

const ShowsController = {
  getMoviesAndShows: async (request, response) => {
    let result = await ShowsModel.find();
    response.send({
      call: true,
      message: "All Movies Here",
      result,
    });
  },
  getMovieOrShowById: async (request, response) => {
    let { movie_id } = request.params;
    let result = await ShowsModel.find(
      { id: movie_id },
      {
        title: 1,
        genre: 1,
        director: 1,
        release_date: 1,
        rating: 1,
        duration: 1,
      }
    );
    response.send({
      call: true,
      result,
    });
  },
};

module.exports = ShowsController;
