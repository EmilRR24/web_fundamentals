// miles start at 0. Every 2 runnerMiles candy is given out. Stops at mile 6. 

for (var runnerMiles = 0; runnerMiles < 10; runnerMiles++) {
    if (runnerMiles % 2 == 0 && runnerMiles > 0 && runnerMiles <= 6) {
        console.log('mile no:', runnerMiles);
        console.log('candy!');
    }
}
//Stretch Feature 1
//They have to be going more than 5.5 miles per hour.

var runnerSpeed = 5.7

if (runnerSpeed > 5.5) {
    for (var runnerMiles = 0; runnerMiles < 10; runnerMiles++) {
        if (runnerMiles % 2 == 0 && runnerMiles > 0 && runnerMiles <= 6) {
            console.log('mile no:', runnerMiles);
            console.log('candy!');
        }
    }
}
else {
    console.log('Sorry no candy!');
}