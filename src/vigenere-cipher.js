const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mode) {
    this.mode = mode;
  }
  encrypt(message, key) {
    message = message.toUpperCase();
    let keycode = key.toUpperCase();
    let mLength = message.length;
    keycode = keycode.repeat(Math.ceil(mLength / key.length)).split('');
    let ans = "";
    for(let i = 0; i < mLength; i += 1) {
      if(65 <= message.charCodeAt(i) &&  message.charCodeAt(i) < 91) {
        ans += String.fromCharCode(((message.charCodeAt(i) + keycode[0].charCodeAt(0)) % 26) + 65);
        keycode.shift();
      } else {
        ans += message.charAt(i);
      }
    }
    if(this.mode === false) {
      return ans.split('').reverse().join('');
    }
    else {
      return ans;
    }
  }    
  decrypt(message, key) {
    message = message.toUpperCase();
    let keycode = key.toUpperCase();
    let mLength = message.length;
    keycode = keycode.repeat(Math.ceil(mLength / key.length)).split('');

    let ans = "";
    for(let i = 0; i < mLength; i += 1) {
      if(65 <= message.charCodeAt(i) &&  message.charCodeAt(i) < 91) {
        ans += String.fromCharCode(((message.charCodeAt(i) + 26 - keycode[0].charCodeAt(0)) % 26) + 65);
        keycode.shift();
      } else {
        ans += message.charAt(i);
      }
    }

    if(this.mode === false) {
      return ans.split('').reverse().join('');
    }
    else {
      return ans;
    }
  }
}

module.exports = VigenereCipheringMachine;