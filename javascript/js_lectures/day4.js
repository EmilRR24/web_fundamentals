// Arrays - ORDERED data structure

var name = "Ray" // string
var age = 35 // number
var truth = false // boolean 

var userInfo = ["Ray", 35 ,"Hawaii", false]; // index starts at 0, 1, 2, 3...
console.log(userInfo[3]);

// 1. Arrays should have all the same data types
// 2. Arrays should have relative information
var names = ["Ray", "Jane", "John"]
var numbers = [4, 8, 6, 1]


function hello(){

}

// Adding a value to the end of an array - PUSH
var nameArray = [];
nameArray.push("Ray");

console.log(nameArray);

// Removing last value from an Array - POP
nameArray.pop();

// Getting the Length(size) of the Array
nameArray.length // Attribute

// Last value in a given array
nameArray[nameArray.length -1];

// First value in a given array
nameArray[0];

// Iterating through an Array -- (Iterating, start thinking For Loop)

// 1.Defining the function
function printArray(array){
    for(var i = 0; i < array.length; i++){
        console.log(array[i]);
    }
    return "Hello World"
}

// 2. Calling (Executing the function)
console.log(printArray([1, 2, 3, 4 ]));
