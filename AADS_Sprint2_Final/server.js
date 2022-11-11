const express = require("express");
const app = express();

const treeRouter = require("./routes/trees");
const morgan = require("morgan");
const dal = require("./model/mongo.db.config");

const PORT = process.env.PORT || 3069;

global.DEBUG = true;

function setup_server() {
  // Setting the view engine to ejs.
  app.set("view engine", "ejs");
  // For jest testing.
  app.locals.dal = dal;

  // *Middleware*
  if (DEBUG) app.use(morgan("dev"));
  app.use(express.static("public"));
  app.use(express.urlencoded({ extended: true }));

  app.use("/trees", treeRouter);

  app.get("/", async (req, res) => {
    try {
      res.render("home", { title: "Home" });
    } catch (error) {
      console.error(error);
      res.status(503).render("503");
    }
  });

  app.use((req, res) => {
    res.status(404).render("404");
  });

  return app;
}

function main() {
  const app = setup_server();
  app.listen(PORT, "localhost", async () => {
    try {
      await dal.connect();
      global.collection = dal.db("binarySearchTree").collection("trees");

      console.log(
        `Server is running on http://localhost:${PORT}; Ctrl-C to terminate...`
      );
    } catch (error) {
      console.error(error);
    }
  });
  return app;
}

module.exports = {
  main,
  setup_server,
};

if (require.main === module) {
  main();
}
