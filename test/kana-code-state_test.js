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

    describe("fixTable", () => {
      beforeEach(() => {
        codeState = new KanaCodeState;
        codeState.setupCodeTable(jsonData);
      });

      it("expects to return 'a' in Hiragana when 'a' is given", () => {
        expect(codeState.fixTable["a"]).to.equal("あ");
      });

      it("expects to return hatsuon in Hiragana when 'xtu' is given", () => {
        expect(codeState.fixTable["xtu"]).to.equal("っ");
      });

      it("expects to return hatsuon in Hiragana when 'kk' is given", () => {
        expect(codeState.fixTable["kk"]).to.equal("っ");
      });
    });

    describe("unfixTable", () => {
      it("expects not to return a truthy value when 'a' is given", () => {
        expect(codeState.unfixTable["a"]).to.not.be.ok;
      });

      it("expects not to return a truthy value when 'xtu' is given", () => {
        expect(codeState.unfixTable["xtu"]).to.not.be.ok;
      });

      it("expects to return 'k' when 'kk' is given", () => {
        expect(codeState.unfixTable["kk"]).to.equal("k");
      });
    });
  });
});
