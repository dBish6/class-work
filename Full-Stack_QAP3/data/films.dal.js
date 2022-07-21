/* films.dal.js
   Anything to do with films in the DVD rentals database;
   getFilmsDisplay() - fetches all the flims in the database.
   getFilmDetails() - fetches the details of films from the database; description, rating, etc.

   Author: David Bishop
   Creation Date: July 13, 2022
   Updates:
   Date, Author, Description
   July 13, 2022, David, inital set up; require method.
   July 14 2022, David, implemented getFilmsDisplay() and getFilmDetails() using async await.

*/

const dal = require("./postgresDB");

// Fetching the sql query from the database.
// Fetches all the film's titles from the film_list view.
const getFilmsDisplay = async () => {
  let response;
  try {
    response = await dal.query(
      "SELECT fid, title FROM film_list ORDER BY random() LIMIT 50;"
    );
    return response.rows;
  } catch (err) {
    console.error(err);
  }
};

// Fetches everything from the film_list view for details about the film.
const getFilmDetails = async (id) => {
  let response;
  try {
    response = await dal.query("SELECT * FROM film_list WHERE fid = $1;", [id]);
    return response.rows;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getFilmsDisplay,
  getFilmDetails,
};
