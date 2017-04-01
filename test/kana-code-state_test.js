"use strict";

const expect = require("chai").expect;
const KanaCodeState = require("../index").KanaCodeState;

describe("KanaCodeState", () => {
  context("when roma-kana-table.json is given", () => {
    const jsonData = require("../lib/roma-kana-table.json");

    describe("setupCodeTable", () => {
      it("expects to setup codeState.fixTable", () => {
        const codeState = new KanaCodeState;

        codeState.setupCodeTable(jsonData);

        expect(codeState).to.be.an.instanceof(KanaCodeState);
        expect(codeState.fixTable).to.not.be.empty;
      });

      it("expects to setup codeState.unfixTable", () => {
        const codeState = new KanaCodeState;

        codeState.setupCodeTable(jsonData);

        expect(codeState).to.be.an.instanceof(KanaCodeState);
        expect(codeState.unfixTable).to.not.be.empty;
      });
    });
  });
});
