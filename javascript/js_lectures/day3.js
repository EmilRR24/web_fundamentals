// Functions and Parameters
// 1. Define the function
function print1to50(){
    for (var i = 0; i <51; i++){
        console.log(i);
    }
}

function add(a,b){
    return a + b;
}
// 2. Calling the function (Executing the function)
print1to50();

//(#, #) called the arguments -- opposite side of the parameter
console.log(add(2,4));

// example
var x = 5;

function setX(newValue) {
    x = newValue;
}

console.log(x);
setX(15);
console.log(x)

//  prints: 5, 15