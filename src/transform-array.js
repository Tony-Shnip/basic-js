const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!(Array.isArray(arr))) throw Error;
  if(arr.length == 0)return arr;
  let ans = [];
  let key = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === '--discard-next') key++;
    if(arr[i] === '--discard-prev') key++;
    if(arr[i] === '--double-next') key++;
    if(arr[i] === '--double-prev')key++;
  }
  if(key == 0) return arr;
  key = 0;
  for(let i = 0; i < arr.length; i++){
    //if(Array.isArray(arr[i])){ i++; continue; }
    if(arr[i] === '--discard-next') { ans.push(undefined); i++; continue; }
    if(arr[i] === '--discard-prev') { if(ans.length > 0)ans.pop(); continue; }
    if(arr[i] === '--double-next') { if(i < arr.length - 1)ans.push(arr[i+1]); continue; }
    if(arr[i] === '--double-prev') { if(ans.length > 0)ans.push(ans[ans.length-1]); continue; }
    ans.push(arr[i]);
  }
  for(let i = 0; i < ans.length; i++){
    if(ans[i] == undefined){ans.splice(i, 1);i--;}
  }
  return ans;
};
