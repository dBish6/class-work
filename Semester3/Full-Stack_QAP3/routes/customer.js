/* customer.js
   List of functions for running the customer router(routes) for displaying
   resent rentals on the web page.

   http://localhost:${PORT}/customers/

   Author: David Bishop
   Creation Date: July 13, 2022
   Updates:
   Date, Author, Description
   July 13, 2022, David, basic set up and implemented basic resentCustomers().
   July 14, 2022, David, implemented resentCustomerRentalsById() and added try catch and status codes.
   July 15, 2022, David, finished resentCustomers.ejs, customerRentals.ejs views; no styling.
   July 18, 2022, David, styled all customers views.
   July 19, 2022, David, implemented editCusomers.ejs with get and patch route; not working.
   July 21, 2022, David, Added 503.ejs, 502.ejs error pages and fixed patch route; was missing module.

*/

const express = require("express");
const router = express.Router();

router.use(express.static("public"));

const customerData = require("../data/customer.dal");

// GET all resent customers within the 12 month period to display on the web page.
router.get("/", async (req, res) => {
  try {
    const customers = await customerData.resentCustomers();
    if (DEBUG) console.log(customers);
    // If the query has no data.
    if (customers.length === 0) {
      // Send the 502 status code and render 502.ejs to the user.
      res.status(502).render("502");
    } else {
      // Render this route with resentCustomers.ejs with the resentCustomers function.
      res.render("customers/resentCustomers", {
        customers,
        title: "Resent Customers",
      });
    }
  } catch (err) {
    // Send the 503 status code and render 503.ejs to the user.
    res.status(503).render("503");
    console.error(err);
  }
});

// GET all of the missing rentals by null values in the database and displaying to the web page.
// Ex: /customers/missingRentals
router.get("/missingRentals", async (req, res) => {
  try {
    const missingRentals = await customerData.customerMissingReturns();
    if (DEBUG) console.log(missingRentals);
    if (missingRentals.length === 0) {
      res.status(502).render("502");
    } else {
      // Render this route with customerMissingRentals.ejs with the customerMissingReturns function.
      res.render("customers/customerMissReturns", {
        missingRentals,
        title: "Missing Rentals",
      });
    }
  } catch (err) {
    res.status(503).render("503");
    console.error(err);
  }
});

// GET the resent customer rentals by the id of the customer and display it to the web page.
// Ex: /customers/6
router.get("/:id", async (req, res) => {
  try {
    const custRentals = await customerData.resentCustomerRentalsById(
      req.params.id
    );
    if (DEBUG) console.log(custRentals);
    if (custRentals.length === 0) {
      res.status(502).render("502");
    } else {
      // Render this route with customerRentals.ejs with the resentCustomerRentalsById function.
      res.render("customers/customerRentals", {
        custRentals,
        title: "Customer Rentals",
      });
    }
  } catch (err) {
    res.status(503).render("503");
    console.error(err);
  }
});

//EDIT PART.

// GET the edit form to update a customer by the id of the customer and display it to the web page.
router.get("/:id/edit", async (req, res) => {
  try {
    if (DEBUG) console.log("GET edit.");
    // Render this route with editCustomers.ejs with the following parameters.
    res.render("customers/editCustomer", {
      editId: req.params.id,
      editFirstName: req.params.first_name,
      editLastName: req.params.last_name,
      title: "Edit Customer",
    });
  } catch (err) {
    res.status(503).render("503");
    console.error(err);
  }
});

// When the user submits the form data the action will send the user to this route and then will patch(update) by the id of the customer.
router.patch("/edit/complete/:id", async (req, res) => {
  try {
    if (DEBUG) console.log(req.body);
    // Function call; Send the req.body values from the form and pass it as parameters.
    await customerData.updateCustomerName(
      req.params.id,
      req.body.first_name,
      req.body.last_name
    );

    if (DEBUG) console.log("Patch(UPDATE) has ran.");

    // Redirect the user back to /customers/ when the patch is complete.
    res.redirect("/customers/");
  } catch (err) {
    res.status(503).render("503");
    console.error(err);
  }
});

module.exports = router;
