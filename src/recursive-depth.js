const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, maxd = [], curd = 1) {
    maxd.push(curd);
    for(let i = 0; i < arr.length; i++){
      if(Array.isArray(arr[i])){ this.calculateDepth(arr[i], maxd, curd + 1);}
    }
    let ans = 0;
    for(let i = 0; i < maxd.length; i++){
      if(maxd[i] > ans) ans = maxd[i];
    }
    return ans;
  }
};