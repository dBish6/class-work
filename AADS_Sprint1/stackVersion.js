const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const Stack = require("./stackClass");

// Request from server.
const agentRequestStack = async (message, agentID, structureID) => {
  let agent = {
    data: message,
    AgentID: agentID,
    StructureID: structureID,
  };
  try {
    if (!fs.existsSync(path.join(__dirname, "json", "stack.json"))) {
      fs.openSync(path.join(__dirname, "json", "stack.json"), "w");

      // Adding to the stack.
      const stack = new Stack.Stack();

      stack.push(agent);

      console.log("stack items:");
      console.log(stack.items);

      let messageJSON = JSON.stringify(stack.items, null, 2);
      console.log(messageJSON);
      await fsPromises.writeFile(
        path.join(__dirname, "json", "stack.json"),
        messageJSON
      );
    } else {
      const data = await fsPromises.readFile(
        path.join(__dirname, "json", "stack.json")
      );

      let agents = JSON.parse(data);
      console.log("Agents:");
      console.log(agents);
      const stack = new Stack.Stack();
      stack.items = agents;
      // Just to tell the stack how many items are there.
      stack.count = agents.length;

      stack.push(agent);
      console.log("stack items:");
      console.log(stack.items);

      let messageJSON = JSON.stringify(stack.items, null, 2);
      console.log(messageJSON);
      await fsPromises.writeFile(
        path.join(__dirname, "json", "stack.json"),
        messageJSON
      );
    }
    console.log(`Message was retreived, ${agent.AgentID}.`);
  } catch (err) {
    console.error(err);
  }
};

// Poping "data:" out of the stack and from the file.
const agentRetrieveStack = async () => {
  let obj = new Object();
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "json", "stack.json")
    );

    let messages = JSON.parse(data);
    const stack = new Stack.Stack();
    stack.items = messages;
    stack.count = messages.length;
    const remove = stack.pop();

    obj.AgentID = remove.AgentID;
    obj.StructureID = remove.StructureID;

    // stack.items *into* newItems *up to* stack.count number of items.
    let newItems = [];

    for (let i = 0; i < stack.count; i++) {
      newItems.push(stack.items[i]);
    }

    let messageJSON = JSON.stringify(newItems, null, 2);
    await fsPromises.writeFile(
      path.join(__dirname, "json", "stack.json"),
      messageJSON
    );
    console.log(`Message SELF DESTRUCT, ${obj.AgentID}.`);
  } catch (err) {
    console.log(err);
  }
  return obj;
};

module.exports = {
  agentRequestStack,
  agentRetrieveStack,
};
