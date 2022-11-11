// const treeData = require("../model/controllers/tree.dal");
const { AVLTree } = require("../classes/AVLTree");
const server = require("../server");
const app = server.setup_server();
const treeData = require("../model/controllers/tree.dal");

describe("Testing if Mongodb can Insert a Binary Tree", () => {
  beforeAll(async () => {
    try {
      await app.locals.dal.connect();
      global.collection = app.locals.dal
        .db("binarySearchTree")
        .collection("trees");
      global.DEBUG = true;
    } catch (error) {
      console.error(error);
    }
  });

  afterAll(async () => {
    app.locals.dal.close();
  });

  test("Test to see if you can insert a new tree with the mongo connection.", async () => {
    // Actually a bad unit test.
    const newTree = new AVLTree();
    input = [1, 2, 3, 4, 5];
    newTree.insert(1);
    newTree.insert(2);
    newTree.insert(3);
    newTree.insert(4);
    newTree.insert(5);
    await treeData.addBinaryTree(input, newTree);

    const insertedTreeCursor = await collection
      .find()
      .sort({ _id: -1 })
      .limit(1);

    const insertedTreeArray = await insertedTreeCursor.toArray();

    const insertedTree = insertedTreeArray[0].tree;

    console.log(insertedTree);
    const newTreeDataOnly = JSON.parse(JSON.stringify(newTree));
    expect(insertedTree).toMatchObject(newTreeDataOnly);
  });
});

describe("Testing the Functions that was Used From AVLTree Class", () => {
  test("Tests the inputs of the AVL tree.", () => {
    const newTree = new AVLTree();
    newTree.insert(10);
    newTree.insert(23);
    newTree.insert(35);
    newTree.insert(42);
    newTree.insert(50);
    expect(newTree.root).not.toBe(null);
    expect(newTree.root.key).toBe(23);
    expect(newTree.root.left.key).toBe(10);
    expect(newTree.root.right.key).toBe(42);
    expect(newTree.root.right.left.key).toBe(35);
    expect(newTree.root.right.right.key).toBe(50);
    // console.log(newTree, null, 2);
  });

  test("Test to see if inputs rotate left.", () => {
    const newTree = new AVLTree();
    newTree.insert(18);
    newTree.insert(25);
    newTree.insert(39);
    expect(newTree.root.key).toBe(25);
    expect(newTree.root.left.key).toBe(18);
    expect(newTree.root.right.key).toBe(39);
    // console.log(newTree, null, 2);
  });

  test("Test to see if inputs rotate left and right.", () => {
    const newTree = new AVLTree();
    newTree.insert(12);
    newTree.insert(27);
    newTree.insert(31);
    newTree.insert(48);
    newTree.insert(54);
    expect(newTree.root.key).toBe(27);
    expect(newTree.root.left.key).toBe(12);
    expect(newTree.root.right.key).toBe(48);
    expect(newTree.root.right.left.key).toBe(31);
    expect(newTree.root.right.right.key).toBe(54);
    // console.log(newTree, null, 2);
  });
});
