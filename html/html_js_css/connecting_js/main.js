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

// Method -- Query Selector
var likes = 13
function likeHandler(){
    console.log("LIKE HANDLER")
    // Increment likes 
    likes++
    // Targeting the button using Query Selector
    var likesButton = document.querySelector(".likes")
    likesButton.innerText = likes + " like(s)"
}

var likes2 = 44
// Method -- this
function likeHandler2(element){
    // increment likes
    likes2++
    // Element represents the button
    element.innerText = likes2 + " Like(s)"
}