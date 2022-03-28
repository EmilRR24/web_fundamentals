// var fullName = "Emil R";

// console.log(fullName);

// for(var i = 0; i < 255; i++){
//     console.log(i);
// }

// VANILLA JS METHODS

// alert("Welcome to my Page!!!")

// var response = confirm("Are you sure you want to delete this?")

// if(response){
//     console.log("Okay, I hope you know what you are doing!")
// }
// else{
//     console.log("Okay, Delete has been cancelled!")
// }

function clickHandler(element){
    console.log('CLICK HANDLER FUNCTION')
    console.log(element)
}
function darkMode(){
    // console.log(document)
    // TARGETING AN HTML ELEMENT
    var h1 = document.querySelector("#container > h1")
    console.log(h1)

    // Change text color white 
    h1.style.color = "white"
    // Change background color black
    h1.style.backgroundColor = "black"
}
function liteMode(){
    var h1 = document.querySelector("#container > h1")
    h1.style.color = "black"
    h1.style.backgroundColor = "wheat"
}

// 1. Event Listener -- HTML
// 2. Event Handler Function -- Javscript