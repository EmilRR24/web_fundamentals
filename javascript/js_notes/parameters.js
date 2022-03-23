function greet(person) {
    var d = new Date().getHours();
    if (person == "Count Dooku") {
        console.log("I'm coming for you, Count Dooku!");
    }
    else if (d >= 18 && d < 24) {
        console.log("Good evening,", person + "!");
    }
    else if (d >= 12 && d < 18) {
        console.log("Good afternoon,", person + "!");
    }
    else {
        console.log("Good morning,", person + "!");
    }
}
greet("Count");