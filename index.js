function saturdayFun(activity = "roller-skate"){
     return `This Saturday, I want to ${activity}!`;
}
function mondayWork(activity= "go to the office"){
    return `This Monday, I will ${activity}.`;
}
/*function wrapAdjective(singlePar="special"){
        if (singlePar = '*'){
            return function(emphatic){
                return `You are ${emphatic}`;
            }
        }if (singlePar = '||'){
            return function(emphatic){
                return `You are ${emphatic}`;
            }
        }
}*/




function wrapAdjective(singlePar) {
    const base = "You are";
    return function (visualFlair) {
      return `${base} ${singlePar}${visualFlair}${singlePar}!`;
    };
  }