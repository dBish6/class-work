/* server.js
   List of functions for running the node express HTTP sever on LocalHost
   with routes for the following URL destinations on the server and for running the home page routes. 

   http://localhost:${PORT}/

   Author: David Bishop
   Creation Date: July 13, 2022
   Updates:
   Date, Author, Description
   July 13, 2022, David, set up everything; .use, imports, etc. Set up a plan of how 
   the index & indexDetails will go, implememted 404 page and needed ejs views.
   July 14, 2022, David, impemented getFilmsDisplay() and getFilmsDetails for home page using async await
   and coded the index.ejs and indexDetails.ejs; no styling and fix how css and images wasn't working.
   July 16, 2022, David, stores router, fixes.
   July 17, 2022, David, added favicon icon and styled all partials and index.ejs.
   July 18, 2022, David, styled indexDetails.ejs and 404.ejs.
   July 21, 2022, David, fixes and styled.
   
*/

const express = require("express");
// Creating express application to use the list of functions.
const app = express();

global.DEBUG = true;

const PORT = process.env.PORT || 3069;

// Setting the view engine to ejs.
app.set("view engine", "ejs");

// All ".use"'s is middleware.
// So express can use your static files, which is my public folder; css, images, HTML, etc.
app.use(express.static("public"));
// So express can read the new perameters off the url and encoding them corrently; we can now use req.body.
app.use(express.urlencoded({ extended: true }));
const methodOverride = require("method-override");
// To use method-override module; can override POST by using ?_method=DELETE query for example.
app.use(methodOverride("_method"));

const storesRouter = require("./routes/stores");
const customerRouter = require("./routes/customer");

// Lets express know what path to look for by setting the router.
app.use("/customers", customerRouter);
app.use("/stores", storesRouter);

app.listen(PORT, "localhost", () => {
  console.log(
    `Server is running on http://localhost:${PORT}; Ctrl-C to terminate...`
  );
});

const filmData = require("./data/films.dal");

// http://localhost:${PORT}/
// GET all films from the database and display it to the web page.
app.get("/", async (req, res) => {
  try {
    const films = await filmData.getFilmsDisplay();
    if (DEBUG) console.log(films);
    // If the query has no data.
    if (films.length === 0) {
      // Send the 502 status code and render 502.ejs to the user.
      res.status(502).render("502");
    } else {
      // Render this route with index.ejs with the getFilmsDisplay function.
      res.render("index", { films, title: "Home" });
      //res.render("index1", { title: "Home" });
    }
  } catch (err) {
    // Send the 503 status code and render 503.ejs to the user.
    res.status(503).render("503");
    console.error(err);
  }
});

// GET filmData with details about the films from the database by the id paramenter.
// Ex: /6
app.get("/:id", async (req, res) => {
  try {
    const filmDetails = await filmData.getFilmDetails(req.params.id);
    if (DEBUG) console.log(filmDetails);
    if (filmDetails.length === 0) {
      res.status(502).render("502");
    } else {
      // Render this route with indexDetails.ejs with the getFilmDetails function.
      res.render("indexDetails", { filmDetails, title: "Film Details" });
    }
  } catch (err) {
    res.status(503).render("503");
    console.error(err);
  }
});

// Renders the 404.ejs when there is no GET found; middleware.
app.use((req, res) => {
  res.status(404).render("404");
});
