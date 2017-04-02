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

    describe("MAX_CODE_LENGTH", () => {
      it("expects to be 3", () => {
        expect(codeState.MAX_CODE_LENGTH).to.equal(3);
      });
    });

    describe("canConvert", () => {
      it("expects to return 'YES' when 'a' is given", () => {
        expect(codeState.canConvert("a")).to.equal(KanaCodeState.YES);
      });

      it("expects to return 'NOT_YET' when 'ky' is given", () => {
        expect(codeState.canConvert("ky")).to.equal(KanaCodeState.NOT_YET);
      });

      it("expects to return 'NO' when 'xyz' is given", () => {
        expect(codeState.canConvert("xyz")).to.equal(KanaCodeState.NO);
      });
    });

    describe("toFixedKana", () => {
      it("expects to return 'あ' when 'a' is given", () => {
        expect(codeState.toFixedKana("a")).to.equal("あ");
      });

      it("expects to return 'か' when 'ka' is given", () => {
        expect(codeState.toFixedKana("ka")).to.equal("か");
      });

      it("expects to return 'っ' when 'kk' is given", () => {
        expect(codeState.toFixedKana("kk")).to.equal("っ");
      });

      it("expects to return 'xyz' when 'xyz' is given", () => {
        expect(codeState.toFixedKana("xyz")).to.equal("xyz");
      });
    });

    describe("toUnfixedKana", () => {
      it("expects to return '' when 'a' is given", () => {
        expect(codeState.toUnfixedKana("a")).to.equal("");
      });

      it("expects to return '' when 'ka' is given", () => {
        expect(codeState.toUnfixedKana("ka")).to.equal("");
      });

      it("expects to return 'k' when 'kk' is given", () => {
        expect(codeState.toUnfixedKana("kk")).to.equal("k");
      });

      it("expects to return '' when 'xyz' is given", () => {
        expect(codeState.toUnfixedKana("xyz")).to.equal("");
      });
    });
  });

  context("when roma-kana-table.json is given", () => {
    const jsonData = require("../lib/jis-kana-table.json");
    let codeState;

    beforeEach(() => {
      codeState = new KanaCodeState;
      codeState.setupCodeTable(jsonData);
    });

    describe("toFixedKana", () => {
      it("expects to return 'な' when 'u' is given", () => {
        expect(codeState.toFixedKana("u")).to.equal("な");
      });

      it("expects to return 't' when 't' is given", () => {
        expect(codeState.toFixedKana("t")).to.equal("t");
      });

      it("expects to return 'が' when 'か'' is given", () => {
        expect(codeState.toFixedKana("か'")).to.equal("が");
      });
    });

    describe("toUnfixedKana", () => {
      it("expects to return '' when 'u' is given", () => {
        expect(codeState.toUnfixedKana("u")).to.equal("");
      });

      it("expects to return 'か' when 't' is given", () => {
        expect(codeState.toUnfixedKana("t")).to.equal("か");
      });

      it("expects to return '' when 'か'' is given", () => {
        expect(codeState.toUnfixedKana("か'")).to.equal("");
      });
    });
  });
});
