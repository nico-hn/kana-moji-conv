"use strict";

const expect = require("chai").expect;
const KanaCodeState = require("../index").KanaCodeState;

describe("KanaCodeState", () => {
  context("when roma-kana-table.json is given", () => {
    const jsonData = require("../lib/roma-kana-table.json");
    let codeState;

    describe("setupCodeTable", () => {
      beforeEach(() => {
        codeState = new KanaCodeState;
        codeState.setupCodeTable(jsonData);
      });

      it("expects to setup codeState.fixTable", () => {
        expect(codeState).to.be.an.instanceof(KanaCodeState);
        expect(codeState.fixTable).to.not.be.empty;
      });

      it("expects to setup codeState.unfixTable", () => {
        expect(codeState).to.be.an.instanceof(KanaCodeState);
        expect(codeState.unfixTable).to.not.be.empty;
      });
    });
  });
});
