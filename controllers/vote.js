const fs = require("fs").promises;
const parseBody = require("../appModules/http-utils/parse-body");
<<<<<<< Updated upstream
<<<<<<< Updated upstream
const { config, createRating, updateRating } = require("../appModules/rating");
=======
const { createRating, updateRating } = require("../appModules/rating");
const config = require("../appModules/rating");
>>>>>>> Stashed changes
=======
const { config, createRating, updateRating } = require("../appModules/rating");
>>>>>>> Stashed changes

async function voteRouteController(req, res) {
  if (req.method !== "POST") {
    res.statusCode = 404;
    res.end("Not Found");
  } else {
    try {
      res.statusCode = 200;
      const body = await parseBody(req);
      const data = JSON.parse(body);
      const rating = createRating(data, config.WEIGHT);

      const ratingFile = await fs.readFile(config.PATH_TO_RATING_FILE);
      const ratingArray = JSON.parse(ratingFile);
      const newRating = updateRating(ratingArray, data.id, rating);

      await fs.writeFile(config.PATH_TO_RATING_FILE, JSON.stringify(newRating));
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(newRating.sort((a, b) => b.rating - a.rating)));
    } catch (error) {
      res.statusCode = 500;
      res.end("Internal Server Error");
    }
  }
}

module.exports = voteRouteController;
