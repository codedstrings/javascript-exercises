const fibonacci = function(val) {
    if(val<0){
        return "OOPS"
    }
    let fibonacci=0; prev=1; temp=0;
    for(let i=0 ;i<val;i++){
        //   console.log("prev="+prev+" ,fibonacci="+fibonacci);
          temp=fibonacci;
        fibonacci=fibonacci+prev;
        prev=temp;
        // console.log("after: prev="+prev+" ,fibonacci="+fibonacci);
      
    }
    return fibonacci;
};

console.log("final: "+fibonacci(4))

// Do not edit below this line
module.exports = fibonacci;
