/*
Reverse Array: Given an array, write a function that reverses values in place: Example: [5,10,15,20] Returns / Gives back the same array as: [20,15,10,5]
*/

function reverseArray(arr) {
    var arr = [ 5, 10, 15, 20];
    var j = arr.length - 1;
    for(var i=0; i < arr.length / 2; i++){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j--;
    }
    console.log(arr);
}
reverseArray();

/*
Outlook Negative: Given an array, create and return a new one containing all the values of the provided array made negative. Not simply multiplied by negative one. Given [ 1, -3, 5 ], return [ -1, -3, -5 ]
*/

function negArr() {
    var negArr = [1, -3, 5];
    for(var i=0; i < negArr.length; i++) {
        if(negArr[i] > 0) {
            negArr[i] = -negArr[i];
        }
    }
    console.log(negArr);
}
negArr();

// Instructor answer
function reverse_array(arr)
{
    var j = arr.length - 1;
    var half_length = arr.length / 2;

    for(var i = 0; i < half_length; i++)
    {
        /*
            arr    = [ 20, 15, 10, 5 ]
            half_length = 2
            i      = 0, 1, 2
            j      = 3, 2, 1
            temp   = 5, 10
            arr[i] = 20, 15
            arr[j] = 5
        */
        let temp = arr[ i ];
        arr[ i ] = arr[ j ];
        arr[ j ] = temp;
        j--;    
    }
    return arr;
}

var user_array = [ 5, 10, 15, 20 ];
/* [ 20, 15, 10, 5 ] */
var result_arr = reverse_array( user_array );
console.log( result_arr );