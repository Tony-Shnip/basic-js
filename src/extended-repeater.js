const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, {
  repeatTimes = 1,
  separator = '+',
  addition = '',
  additionRepeatTimes = 1,
  additionSeparator = '|',
}
){
  str = String(str);
  let strBuf = str;

  if (addition !== undefined) {
    addition = String(addition);
    let addBuff = addition;

    for (let i = 1; i < additionRepeatTimes; i++) {
      addition = addition + additionSeparator + addBuff;
    }

    str = str + addition;
    strBuf = str;
    }

    for (let i = 1; i < repeatTimes; i++) {
      str = str + separator + strBuf;
    }
    return str;
  };