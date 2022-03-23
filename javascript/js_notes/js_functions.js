/*
3. Print Ints and Sum 0-255
printIntsAndSum0To255()
Print integers from 0 to 255, and after each integer, print the running total of all integers so far.
0 - int
0 - run tot
1 - int
1 - run tot
2 - int
3 - run tot
3 - int
6 - run tot
4 - int
10 - run tot
PSEUDOCODE:
1.  Create a function called printIntsAndSum0To255 without parameters
2.  Inside the function:
    a.  Create a variable to hold the running total whose is 0
    b.  Create a for loop that starts i at 0, ends at 255, and increments by 1
    c.  Inside the for loop:
        i.   Print the current value of i
        ii.  Add the current integer to the running total
        iii. Print the running total
*/


function printIntsandSum0to255 () {
    var runningTotal = (0);
    for (var i = 0; i <= 255; i++) {
        console.log(i)
        runningTotal = (runningTotal + i);
        console.log(runningTotal);
    }
}
printIntsandSum0to255();

