// CONDITIONALS - logic gate checks; flow charts

//  BOOLEANS - TRUE OR FALSE; YES OR NO
var has_account = false // true

if(has_account) {
    console.log("login");
}
else{ // CATCH ALL STATEMENT
    console.log("create an account");
}

age = 19;

if(age >= 16) {
    console.log("Get a driver's license");
}

if(age >= 18) {
    console.log("Vote and buy lottery tickets");
}

if(age >= 21) {
    console.log("Buy alcohol and tobacco");
}
// Modulous question
for (var j = 1; j <= 15; j++) {
    if (j % 2 == 0) {
        j +=2;
    }
    else if (j % 3 == 0) { 
        j++;
    }
    console.log(j);
}