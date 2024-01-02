const repeatString = function(str, repeatVal) {
    if(repeatVal<0) return "ERROR";
    let returnStr='';
    for (let index = 0; index < repeatVal; index++) {
        returnStr=returnStr.concat(str);
    }
    return returnStr;
};

// Do not edit below this line
module.exports = repeatString;
