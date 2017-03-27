"use strict";

class KanaMojiConv {
  static charCodesToArray(start, end) {
    let arr = [];

    for (let i = start; i <= end; i++) {
      arr.push(String.fromCharCode(i));
    }
    return arr;
  }

  static generateConvTable(from, to) {
    let table = {};

    from.forEach((chr, i) => table[chr] = to[i]);
    return table;
  }

  static setup() {
    const hira = this.charCodesToArray(0x3041, 0x3096);
    const kata = this.charCodesToArray(0x30a1, 0x30f6);
    const hiraUwithDakuten = "\u3046\u309b";
    const hiraVu = "\u3094";
    const kataVu = "\u30f4";

    this.toKataTable = this.generateConvTable(hira, kata);
    this.toKataTable[hiraUwithDakuten] = kataVu;
    this.toHiraTable = this.generateConvTable(kata, hira);
    //this.toHiraTable[kataVu] = hiraUwithDakuten;

    this.KATA_REGEX = /[\u30a1-\u30f4]/g;
    this.HIRA_REGEX = /(\u3046\u309b)|[\u3041-\u3094]/g;
  }
}

KanaMojiConv.setup();

exports.KanaMojiConv = KanaMojiConv;
