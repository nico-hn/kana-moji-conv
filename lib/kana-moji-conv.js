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
}

exports.KanaMojiConv = KanaMojiConv;
