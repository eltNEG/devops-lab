import chai from "chai";
import { expect, assert } from "chai";
import loadConfig from "../settings/loadConfig";

describe("Environment variable", () => {
  describe("Development", () => {
    it("returns environment configuration for developement", done => {
      loadConfig("DEVELOPMENT", true);
      expect(process.env.NODE_ENV).to.equal("DEVELOPMENT");
      assert(typeof process.env.PORT, "number");
      done();
    });
  });
  describe("Production", () => {
    it("returns environment configuration for production", done => {
      loadConfig("TEST", true);
      expect(process.env.NODE_ENV).to.equal("TEST");
      assert(typeof process.env.PORT, "number");
      done();
    });
  });
  describe("Test", () => {
    it("returns environment configuration for test", done => {
      loadConfig("PRODUCTION", true);
      expect(process.env.NODE_ENV).to.equal("PRODUCTION");
      assert(typeof process.env.PORT, "number");
      done();
    });
  });
});
