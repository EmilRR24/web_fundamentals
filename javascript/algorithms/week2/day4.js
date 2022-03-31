
// flatten array
var arr2d = [[2, 5, 8], [3, 6, 1], [5, 7, 7]];
// we can print '8' in this array if we
console.log(arr2d[0],[2]);
// First index '0' will select '[2, 5, 8]' sub-array
// Second index '2' will select the '8' out of that sub-array

function flatten(arr2d){
    var flat = [];
    // your code here
    // iterate through arr2d = 3 arrays not the values
    for (i = 0; i < arr2d.length; i++){
        for (j = 0; j < arr2d[i].length; j++){
            flat.push(arr2d[i][j])
        }
    }
    // nested loop will loop a second time to iterate through the arrays
    // push the numbers to var flat
    return flat;
}
var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ]);
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]