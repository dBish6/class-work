const getAllBinaryTrees = async () => {
  try {
    return await collection.find().toArray();
  } catch (error) {
    console.error(error);
  }
};

const addBinaryTree = async (input, tree) => {
  try {
    return await collection.insertOne({ input: input, tree: tree });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getAllBinaryTrees, addBinaryTree };
