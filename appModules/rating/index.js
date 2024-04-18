const config = require('./config');
const makeRatingFile = require('./rating-file');
<<<<<<< Updated upstream
const createRating = require('./calculations');
const updateRating = require('./calculations');
=======
const { createRating, updateRating } = require('./calculations');
>>>>>>> Stashed changes

module.exports = {
  config,
  createRating,
  updateRating,
  makeRatingFile
};
