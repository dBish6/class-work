const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://dBish:Popcap123@sprint-cluster.ijdtggu.mongodb.net/test";
const pool = new MongoClient(uri);

module.exports = pool;
