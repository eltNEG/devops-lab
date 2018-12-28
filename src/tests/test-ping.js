import chaiHttp from "chai-http";
import chai from "chai";
import { expect, assert } from "chai";
import server from "../index";

const baseUrl = "http://localhost:3000";
chai.use(chaiHttp);

describe("Server", () => {
  after(() => {
    server.close();
  });

  describe("Base route is working", () => {
    it("returns status code 200 and a message", done => {
      chai
        .request(server)
        .get("/")
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body.message).to.be.a("string");
          expect(res.body.success).to.equal(true);
          done();
        });
    });
  });

  describe("Ping route is working", () => {
    it("returns status code 200 and a pong message", done => {
      chai
        .request(server)
        .get("/ping")
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body.message).to.be.a("string");
          expect(res.body.message).to.equal("pong");
          expect(res.body.success).to.equal(true);
          done();
        });
    });
  });

  describe("404 route is working", () => {
    it("returns status code 404 and an error message", done => {
      chai
        .request(server)
        .get("/404")
        .end((err, res) => {
          expect(res.status).to.equal(404);
          expect(res.body.message).to.be.a("string");
          expect(res.body.message).to.equal("route not found");
          expect(res.body.success).to.equal(false);
          assert(typeof res.body, "json")
          done();
        });
    });
  });
});
