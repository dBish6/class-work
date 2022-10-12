/* stores.dal.js
   Anything to do with the stores in the DVD rentals database;
   getStoresDisplay() - fetches all the flims in the database.
   topSellingRentalsByStoreId() - fetches the details of films from the database; description, rating, etc.

   Author: David Bishop
   Creation Date: July 16, 2022
   Updates:
   Date, Author, Description
   July 16, 2022, David, implemented getStoresDisplay() and topSellingRentalsByStoreId() using async await.

*/

const dal = require("./postgresDB");

// Fetching the sql query from the database.
// Fetches both stores from the store table.
const getStoresDisplay = async () => {
  let response;
  try {
    response = await dal.query("SELECT store_id FROM store;");
    return response.rows;
  } catch (err) {
    console.error(err);
  }
};

// Fetches the top selling films by following sql where id equals 1 or 2.
const topSellingRentalsByStoreId = async (id) => {
  let response;
  try {
    // Just wanted to be different and not use a view this time.
    const sql =
      "SELECT title, store_id, sum(amount) FROM film \
    JOIN inventory USING (film_id) \
    JOIN rental USING (inventory_id) \
    JOIN payment USING (rental_id) \
    JOIN store USING (store_id) \
    WHERE store_id = $1 \
    GROUP BY title, store_id \
    ORDER BY SUM(amount) DESC LIMIT 10;";

    response = await dal.query(sql, [id]);
    return response.rows;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getStoresDisplay,
  topSellingRentalsByStoreId,
};
