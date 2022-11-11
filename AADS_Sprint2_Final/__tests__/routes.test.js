const request = require("supertest");
const server = require("../server");
const app = server.setup_server();

describe("Testing Trees Routes", () => {
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

  test("Responds to /trees/", async () => {
    const res = await request(app).get("/trees/");
    expect(res.header["content-type"]).toMatch(/html/);
    expect(res.statusCode).toEqual(200);
  });

  test("Responds to /trees/create", async () => {
    const res = await request(app).get("/trees/create");
    expect(res.header["content-type"]).toMatch(/html/);
    expect(res.statusCode).toBe(200);
  });

  // test("Responds to /trees/create/new", async () => {
  //   const res = await request(app)
  //     .post("/trees/create/new")
  //     .send({
  //       input: "1,2,3,4,5",
  //     })
  //     .set("Accept", "application/json");
  //   expect(res.header["content-type"]).toMatch(/html/);
  //   expect(res.statusCode).toBe(200);
  // });
});
