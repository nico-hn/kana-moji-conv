"use strict";

class KanaMojiConv {
  static charCodesToArray(start, end) {
    let arr = [];
    for (let i = start; i <= end; i++) {
      arr.push(String.fromCharCode(i));
    }
    return arr;
  }
}

exports.KanaMojiConv = KanaMojiConv;
