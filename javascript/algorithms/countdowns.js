// While Loops

var i =1;
while (i <=10) {
    console.log(i);
    i++;
}


// 1
for ( i = 2022; i > 0; i -=4) {
    console.log(i);
}

// 2

function flexibleCountdown(highNum, lowNum, mult) {
    for (i = highNum; i > lowNum; i--) {
        if(i % mult == 0) {
            console.log(i);
        }
    }
}
flexibleCountdown(14, 2, 3);

// 3
function finalCountdown(highNum, lowNum, mult, skip) {
    while (highNum > lowNum) {
        if(highNum != skip) {
            if(highNum % mult == 0) {
                console.log(highNum);
            }
        }
        highNum--;
    }
}
finalCountdown(17, 5, 3, 9);