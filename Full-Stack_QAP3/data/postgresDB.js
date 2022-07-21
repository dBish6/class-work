// Database connection pool for using the dvdrental database.
const Pool = require("pg").Pool;
const pool = new Pool({
  user: "dBish",
  host: "localhost",
  database: "dvdrental",
  password: "Popcap123",
  port: 5432,
});
module.exports = pool;
