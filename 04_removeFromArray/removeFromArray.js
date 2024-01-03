const removeFromArray = function (arr, ...args) {
    //iterate throught the arguments array using i
    //delete one item per loop iteration.
    for (let i in args) {

        let index = arr.indexOf(args[i]);
        //check if value to delete is present in the array. -1 means not present.
        if (index != -1) {
            arr.splice(index, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
