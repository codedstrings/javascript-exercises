const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (numArr) {
  // let sum=0;
  // for(let i in numArr){
  //   sum+=numArr[i];
  // }
  // return sum;
  return numArr.reduce((sum, val) => {
    return (sum += val);
  }, 0);
};

const multiply = function (array) {
  return array.reduce((product, val) => {
    return (product *= val);
  }, 1);
};

const power = function (a,b) {
  return Math.pow(a,b);
};

const factorial = function (num) {
  let fact=1,i=2;
  //loop doesn't run if num=1 or num=0; fact is returned as 1
  while(i<=num){
      // console.log("pass"+i+" | "+fact+" * "+i);
    fact=fact*i;
    i++;
  }
  return fact;
};
console.log("hello")

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
