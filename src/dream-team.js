const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!(Array.isArray(members)))return false;
  let team = [];
  for(let i = 0; i < members.length; i++){
    if(typeof members[i] === "string")team.push(members[i][0])
  }
  for(let i = 0; i < team.length; i++){
    if(Array.isArray(team[i])){
      for(let j = 0; j < team[i][0].length; j++){
        if(team[i][0][j] !== ' ') { team[i] == team[i][0][j]; break; }
      }
    }
    else {
      for(let j = 0; j < team[i].length; j++){
        if(team[i][j] !== ' '){ team[i] == team[i][j]; break; }
    }
    }

  }
  for(let i = 0; i < team.length; i++){
    team[i] = team[i].toUpperCase();
  }
  team.sort();
  return team;
};
