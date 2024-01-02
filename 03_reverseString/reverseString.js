const reverseString = function(str) {
    let tempArr=str.split('');
    tempArr.reverse();
    return tempArr.join('');
};

// Do not edit below this line
module.exports = reverseString;
