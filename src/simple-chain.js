const { assert } = require("chai");
const CustomError = require("../extensions/custom-error");

const chainMaker = {

  ans: [],

  getLength() {
    return this.ans.length;
  },

  addLink(value) {
    this.ans.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (this.ans[position - 1] === undefined || isNaN(position)) {
      this.ans = [];
      throw new Error();
    }

    this.ans.splice(position-1, 1);
    return this;
  },
  
  reverseChain() {
    this.ans.reverse();
    return this;
  },

  finishChain() {
    let chain = this.ans.join('~~');
    this.ans = [];
    return chain;
  }
};

module.exports = chainMaker;