// print 1 to 100
// each multiple of 3 print Fizz
// multiple of 5 print Buzz
// multiple of 3 and 5 print Fizz Buzz
function print1to100(){
    for(var i = 0; i <= 100; i++) {
        if(i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz")
        }
        else if(i % 3 == 0) {
            console.log("Fizz");
        }
        else if(i % 5 == 0) {
            console.log("Buzz");
        }
        else{
            console.log(i);
        }
    }
}
print1to100();
