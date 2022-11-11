const express = require("express");
const router = express.Router();

router.use(express.static("public"));

const treeData = require("../model/controllers/tree.dal");
const { AVLTree } = require("../classes/AVLTree");

// View the trees.
router.get("/", async (req, res) => {
  try {
    const trees = await treeData.getAllBinaryTrees();

    let JSONdata = trees;

    if (DEBUG) console.log(JSONdata);

    if (trees.length === 0) {
      res.status(502).render("502");
    } else {
      res.render("trees", { JSONdata, title: "View" });
    }
  } catch (error) {
    console.error(error);
    res.status(503).render("503");
  }
});

// Get the create form.
router.get("/create", async (req, res) => {
  try {
    res.render("create", { title: "Create Tree" });
  } catch (error) {
    console.error(error);
    res.status(503).render("503");
  }
});

// Post the new tree
router.post("/create/new", async (req, res) => {
  try {
    if (DEBUG) console.log(req.body);

    if (!req.body) {
      res.redirect("/trees/unsuccessful");
      // If it the input contains any letters.
    } else if (req.body.numbers.match(/[a-zA-Z]/)) {
      res.redirect("/trees/unsuccessful");
    } else {
      const newTree = new AVLTree();
      let input = [];
      // Makes into substrings.
      input = req.body.numbers.split(",");
      console.log(input);

      // Inserts each node from tree and changes it into actual floating-point numbers.
      input.map((number) => {
        newTree.insert(Number(number));
      });
      if (DEBUG) console.log("newTree:");
      if (DEBUG) console.log(newTree);

      // Inserts the new tree into the database and the input from the user.
      treeData.addBinaryTree(input, newTree);

      res.redirect("/trees/success");
    }
  } catch (error) {
    console.error(error);
    res.status(503).render("503");
  }
});

// When the user creates a tree.
router.get("/success", async (req, res) => {
  try {
    res.render("success", { title: "Successful" });
  } catch (error) {
    console.error(error);
    res.status(503).render("503");
  }
});

// When the user inputs something wrong.
router.get("/unsuccessful", async (req, res) => {
  try {
    res.render("unsuccess", { title: "Unsuccessful" });
  } catch (error) {
    console.error(error);
    res.status(503).render("503");
  }
});

module.exports = router;
