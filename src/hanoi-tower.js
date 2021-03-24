const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let ans = {
    turns: 1,
    seconds: 0
  };
  for(let i = 1; i < disksNumber; i++)
    ans.turns = ans.turns * 2 + 1;
  ans.seconds = Math.floor(ans.turns / (turnsSpeed/3600));
  return ans;
};
