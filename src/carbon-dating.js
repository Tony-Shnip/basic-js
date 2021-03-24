const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(!(typeof sampleActivity === "string"))return false;
  if(String(parseFloat(sampleActivity)) !== sampleActivity)return false;
  if(parseFloat(sampleActivity) <= 0 || parseFloat(sampleActivity) > MODERN_ACTIVITY)return false;
  let ans = 0;
  let k = 0.693 / HALF_LIFE_PERIOD;
  ans = Math.ceil(Math.log( MODERN_ACTIVITY / parseFloat(sampleActivity))/k);
  return ans;
};
