/* stores.js
   List of functions for running router(routes) that has to do with the two stores for 
   displaying the top films based off both stores.

   http://localhost:${PORT}/stores/

   Author: David Bishop
   Creation Date: July 15, 2022
   Updates:
   Date, Author, Description
   July 15, 2022, David, inital set up.
   July 16, 2022, David, implemented getStoresDisplay(), topSellingRentalsByStoreId() and both stores views; no styling.
   July 18, 2022, David, styled all stores views. 
 
*/

const express = require("express");
const router = express.Router();

router.use(express.static("public"));

const storeData = require("../data/stores.dal");

// GET both stores from the database to display on the web page.
router.get("/", async (req, res) => {
  try {
    const stores = await storeData.getStoresDisplay();
    if (DEBUG) console.log(stores);
    // If the query has no data.
    if (stores.length === 0) {
      // Send the 502 status code and render 502.ejs to the user.
      res.status(502).render("502");
    } else {
      // Render this route with stores.ejs with the getStoresDisplay function.
      res.render("stores/stores", {
        stores,
        title: "Stores",
      });
    }
  } catch (err) {
    // Send the 503 status code and render 503.ejs to the user.
    res.status(503).render("503");
    console.error(err);
  }
});

// GET the top selling films by the id of the certain store and display it to the web page.
router.get("/:id", async (req, res) => {
  try {
    const topRentals = await storeData.topSellingRentalsByStoreId(
      req.params.id
    );
    if (DEBUG) console.log(topRentals);
    if (topRentals.length === 0) {
      res.status(502).render("502");
    } else {
      // Render this route with topSellers.ejs with the topSellingRentalsByStoreId function.
      res.render("stores/topSellers", {
        topRentals,
        title: "Store Top Sellers",
      });
    }
  } catch (err) {
    res.status(503).render("503");
    console.error(err);
  }
});

module.exports = router;
