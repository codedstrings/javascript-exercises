const findTheOldest = function(array) {
    let getAge=(object)=>{
        if(object.yearOfDeath){
            return object.yearOfDeath-object.yearOfBirth;
        }
        else {
            let death=new Date().getFullYear()
            return death-object.yearOfBirth;
        }
    }
    //sets the oldest age as array[0] 
    let oldestAge=getAge(array[0]);
    let oldestObj=array[0];
    
    //compare each object age with oldestAge
    for(let i in array){
        let age=getAge(array[i]);
        if(age>oldestAge) {
            oldestAge=age;
            oldestObj=array[i];
        }
    }
    return oldestObj;
};

// Do not edit below this line
module.exports = findTheOldest;
