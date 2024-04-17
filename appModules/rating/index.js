const config = require('./config');
const makeRatingFile = require('./rating-file');
const createRating = require('./calculations');
const updateRating = require('./calculations');

module.exports = {
  config,
  createRating,
  updateRating,
  makeRatingFile
};
