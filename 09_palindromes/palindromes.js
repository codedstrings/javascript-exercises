const palindromes = function (string) {
    // let regex=/[a-z0-9]/g;
    let regex=/\w/g;
    let processedString=string.toLowerCase().match(regex).join("");
    return processedString.split("").reverse().join("") == processedString;
};
console.log(palindromes('malayalamm'));

// Do not edit below this line
module.exports = palindromes;
