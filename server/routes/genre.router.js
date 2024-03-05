const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  // Add query to get all genres
  const genreQuery =              //This query requires joining the different tables together to get the names of each movie and the correct genres attached to them
  `SELECT "genres"."name" FROM "movies"
  JOIN "movies_genres" ON "movies"."id" = "movies_genres"."movie_id"
  JOIN "genres" ON "movies_genres"."genre_id" = "genres"."id"
  WHERE "movies"."id" = $1;`;
  const movieID = req.params.id;
  console.log(movieID);
  pool
  .query(genreQuery, [movieID])
  .then((result) => {
    res.send(result.rows);
  })
  .catch((error) => {
    console.log('Error fetching genres: ', error)
    res.sendStatus(500);
  })
});

module.exports = router;