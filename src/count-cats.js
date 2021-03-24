const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  if(!(Array.isArray(matrix)))return false;
  let ans = 0;
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
      if(typeof matrix[i][j] === 'string'){
        if(matrix[i][j].length == 2 && matrix[i][j][0] == '^' && matrix[i][j][1] == '^')ans++;
      }
    }
  }
  return ans;
};
