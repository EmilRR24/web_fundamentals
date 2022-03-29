function pizzaOven(crustType, sauceType, cheese, toppings){
    var pizza = {}
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese    = cheese;
    pizza.toppings  = toppings;
    return pizza;
}
var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(p1)
var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushroom", "olives", "onions"]);
console.log(p2)
var p3 = pizzaOven("thin crust", "traditional", ["mozzarella"], ["pepperoni", "sausage", "mushroom"]);
console.log(p3)
var p4 = pizzaOven("deep dish", "marinara", ["mozzarella"], ["ham", "pineapple"]);
console.log(p4)


var newPizza = ([p1, p2, p3, p4]);
function randomPizza(){
    var roll = Math.random();
    roll = roll * (newPizza.length);
    roll = Math.floor(roll)
    return roll;
}
var input = randomPizza();
console.log("Here is a random pizza!", newPizza[input]);