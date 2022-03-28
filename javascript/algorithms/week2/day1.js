var floor = Math.floor(1.8); // round down to 1
var ceiling = Math.ceil( Math.PI ); //round up to 4
var random = Math.random(); // random = any number from 0.0 -.99
    
console.log(floor); // round down
console.log(ceiling); // round up
console.log(random);

// Dice Roller activity

function d6() {
    var max = 6
    var roll = Math.random();
    // your code here
    roll = roll * max;
    roll = Math.floor(roll) + 1;
    return roll;
}
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);

// Consult the Oracle

var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function d6() {
    var roll = Math.random();
    // your code here
    roll = roll * (lifesAnswers.length);
    roll = Math.floor(roll) + 1;
    return roll;
}
var input = d6();
console.log(lifesAnswers[input]);
