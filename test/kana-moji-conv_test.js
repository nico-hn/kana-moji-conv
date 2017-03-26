"use strict";

const expect = require("chai").expect;
const KanaMojiConv = require("../index").KanaMojiConv;

describe("KanaMojiConv", () => {
  it("canary test", () =>  {
    expect(KanaMojiConv).to.be.an("function");
  });

  describe("charCodesToArray", () => {
    it("expect to return characters between given charCodes", () => {
      const start = "a".charCodeAt(0);
      const end = "c".charCodeAt(0);
      const result = KanaMojiConv.charCodesToArray(start, end);
      expect(result).to.deep.equal(["a", "b", "c"]);
    });
  });
});
