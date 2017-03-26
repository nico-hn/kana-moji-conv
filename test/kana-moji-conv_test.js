"use strict";

const expect = require("chai").expect;
const KanaMojiConv = require("../index").KanaMojiConv;

describe("KanaMojiConv", () => {
  it("canary test", () =>  {
    expect(KanaMojiConv).to.be.an("function");
  });
});
