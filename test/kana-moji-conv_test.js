"use strict";

const expect = require("chai").expect;
const KanaMojiConv = require("../index").KanaMojiConv;

describe("KanaMojiConv", () => {
  const hiraSmallA = String.fromCharCode(0x3041);
  const kataSmallA = String.fromCharCode(0x30a1);
  const hiraVu = String.fromCharCode(0x3094);
  const kataVu = String.fromCharCode(0x30f4);
  const hiraUwithDakuten = "\u3046\u309b";

  it("canary test", () =>  {
    expect(KanaMojiConv).to.be.an("function");
  });

  describe("charCodesToArray", () => {
    it("expects to return characters between given charCodes", () => {
      const start = "a".charCodeAt(0);
      const end = "c".charCodeAt(0);
      const result = KanaMojiConv.charCodesToArray(start, end);
      expect(result).to.deep.equal(["a", "b", "c"]);
    });
  });

  describe("generateConvTable", () => {
    it("expects to return an object", () => {
      const table = KanaMojiConv.generateConvTable(["a", "b"], ["A", "B"]);
      const expected = { "a": "A", "b": "B" };
      expect(table).to.deep.equal(expected);
    });
  });

  describe("toKataTable", () => {
    it("expects to return kataSmallA when hiraSmallA is given", () => {
      const table = KanaMojiConv.toKataTable;
      expect(table[hiraSmallA]).to.deep.equal(kataSmallA);
    });

    it("expects to return kataVu when hiraVu is given", () => {
      const table = KanaMojiConv.toKataTable;
      expect(table[hiraVu]).to.deep.equal(kataVu);
    });

    it("expects to return kataVu when hiraUwithDakuten is given", () => {
      const table = KanaMojiConv.toKataTable;
      expect(table[hiraUwithDakuten]).to.deep.equal(kataVu);
    });
  });

  describe("toKataTable", () => {
    it("expects to return hiraSmallA when kataSmallA is given", () => {
      const table = KanaMojiConv.toHiraTable;
      expect(table[kataSmallA]).to.deep.equal(hiraSmallA);
    });

    it("expects to return hiraVu when kataVu is given", () => {
      const table = KanaMojiConv.toHiraTable;
      expect(table[kataVu]).to.deep.equal(hiraVu);
    });
  });

  describe("KATA_REGEX", () => {
    it("expects to match kataSmallA", () => {
      expect(kataSmallA.match(KanaMojiConv.KATA_REGEX)).to.deep.equal([kataSmallA]);
    });

    it("does not expect to match hiraSmallA", () => {
      expect(hiraSmallA.match(KanaMojiConv.KATA_REGEX)).to.be.a("null");
    });
  });

  describe("HIRA_REGEX", () => {
    it("expects to match hiraUwithDakuten", () => {
      expect(hiraUwithDakuten.match(KanaMojiConv.HIRA_REGEX)).to.deep.equal([hiraUwithDakuten]);
    });

    it ("expects to match hiraVu", () => {
      expect(hiraVu.match(KanaMojiConv.HIRA_REGEX)).to.deep.equal([hiraVu]);
    });

    it("does not expect to match kataVu", () => {
      expect(kataVu.match(KanaMojiConv.HIRA_REGEX)).to.be.a("null");
    });
  });

  describe("toHiragana", () => {
    it("expects to convert a string from katakana to hiragana", () => {
      const kataIroha = "イロハニホヘト";
      const hiraIroha = "いろはにほへと";

      expect(KanaMojiConv.toHiragana(kataIroha)).to.equal(hiraIroha);
    });
  });
});
