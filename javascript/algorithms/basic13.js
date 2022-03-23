// 1. Print 1-255
// print1To255()
// Print all the integers from 1 to 255. 
function print1to255() {
    for(i = 1; i <= 255; i++) {
        console.log(i);
    }
}
print1to255();

// 2. Print Odds 1-255
// printOdds1To255()
// Print all odd integers from 1 to 255. 
function printOdds1to255() {
    for( i = 1; i <= 255; i++) {
        if(i % 2 == 1) {
            console.log(i);
        }
    }
}
printOdds1to255();

// 3. Print Ints and Sum 0-255
// printIntsAndSum0To255()
// Print integers from 0 to 255, and with each integer print the sum so far. 
function printIntsandSum0to255() {
    var runningTotal = 0;
    for (i = 0; i <= 255; i++) {
        console.log(i)
        runningTotal = runningTotal + i;
        console.log(runningTotal);
    }
}
printIntsandSum0to255();

// 4. Iterate and Print Array
// printArrayVals(arr)
// Iterate through a given array, printing each value. 
function printArraysVals(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
printArraysVals([2,4,5,2,4]);

// 5. Find and Print Max
// printMaxOfArray(arr)
// Given an array, find and print its largest element. 
function printMaxofArray(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(max);
}
printMaxofArray([14,5,62,24,2,11]);

// 6. Get and Print Average
// printAverageOfArray(arr)
// Analyze an array’s values and print the average. 

function printAverageofArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    var averageTotal = sum / arr.length;
    console.log(averageTotal);
}
printAverageofArray([12, 4, 8, 23, 2]);

// 7. Array With Odds:
// Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]).
function arrayOdds() {
    var newArray = []
    for (var i = 0; i <= 255; i++) {
        if (i % 2 == 1) {
            newArray.push(i)
        }
    }
    return newArray;
    console.log(newArray);
}
arrayOdds();

// 8. Square the values:
// Square each value in a given array, returning that same array with changed values.
function square(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
        return arr;
        console.log(arr)
    }
}
square([1,2,3,4]);

// 9. Greater Than Y:
// Given an array and a value Y, count and print the number of array values greater than Y.
function greaterthanY(arr, y) {
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] > y) {
            console.log(arr[i]);
        }
    }
}
greaterthanY([1,2,3,4,5], 2);

// 10. Zero Out Negative Numbers:
// Returns the given array, after setting any negative values to zero.
function zeroArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr
}
console.log(zeroArray([-1, 3, 5, -9]));

// 11. Min, max, and average:
// Given an array, print the max, min, and average values for that array.
function minMaxAverage(arr) {
    min = arr[0];
    max = arr[0];
    sum = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
        else if(arr[i] > max) {
            max = arr[i];
        }
        // sum = sum + arr[i];
        sum += arr[i]
    }
    console.log("min is" + " " + min)
    console.log("max is" + " " + max)
    console.log("average is" + " " + sum/arr.length)
}
minMaxAverage([1,2,-3,4,5,6,7]);


// 12. Shift array values:
// Given an array, move all values forward by one index, dropping the first and leaving a '0' value at the end.
function shiftArrayLeft(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i+1];
    }
    arr[arr.length-1] = 0;
    console.log(arr);
}
shiftArrayLeft([1,2,3,4,5]);

// 13. Swap String For Negative Values:
// Given an array of numbers, replace any negative values with the string "Dojo"
function dojoArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            arr[i] = 'Dojo';
        }
    }
    console.log(arr);
}
dojoArray([-1, 3, 5, -9]);