/* customer.dal.js
   Anything to do with the customers of the DVD rentals database;

   resentCustomers() - fetches the resent customers name within the last 12 months from the database.
   resentCustomerRentalsById() - fetches resent customer rentals by the id of the customer from the database.
   customerMissingReturns() - fetches every customer that has missing returns by reading null values from the database.

   Author: David Bishop
   Creation Date: July 13, 2022
   Updates:
   Date, Author, Description
   July 13, 2022, David, inital set up; require method.
   July 14, 2022, David, implemented resentCustoemrs() and resentCustomerRentalsById() using async await.
   July 15, 2022, David, implemented customerMissingReturns() using async await.
   July 18, 2022, David, implemented updateCustomerName() using async await.
   
*/

const dal = require("./postgresDB");

// Fetching the sql query from the database.
// Fetches all resent customers name within the last 12 months from the vw_custResentUpdates view.
const resentCustomers = async () => {
  let response;
  try {
    response = await dal.query(`SELECT * FROM "vw_custResentUpdates";`);
    return response.rows;
  } catch (err) {
    console.error(err);
  }
};

// Fetches resent customer rentals by the id of the customer from the vw_resentRentals view.
const resentCustomerRentalsById = async (id) => {
  let response;
  try {
    response = await dal.query(
      `SELECT * FROM "vw_resentRentals" WHERE customer_id = $1;`,
      [id]
    );
    return response.rows;
  } catch (err) {
    console.error(err);
  }
};

// Fetches all customers that has missing returns from the vw_missingRentals view.
const customerMissingReturns = async () => {
  let response;
  try {
    response = await dal.query(`SELECT * FROM "vw_missingRentals";`);
    return response.rows;
  } catch (err) {
    console.error(err);
  }
};

// Updates the desired customer by changing the first_name and last_name in the customers table by the id of the customer.
const updateCustomerName = async (id, fname, lname) => {
  let response;
  try {
    const sql =
      "UPDATE customer SET first_name = $2, last_name = $3 WHERE customer_id = $1;";
    response = await dal.query(sql, [id, fname, lname]);
    return response.rows;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  resentCustomers,
  resentCustomerRentalsById,
  customerMissingReturns,
  updateCustomerName,
};
