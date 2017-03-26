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

    this.toKataTable = this.generateConvTable(hira, kata);
    this.toHiraTable = this.generateConvTable(kata, hira);
  }
}

KanaMojiConv.setup();

exports.KanaMojiConv = KanaMojiConv;
