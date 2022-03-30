// toggle user name
function profile(){
    var newProfile = document.querySelector("#userName");
    if(newProfile.innerText == "Jane Doe"){
        newProfile.innerText = "John Smith";
    }
    else{
        newProfile.innerText = "Jane Doe";
    }
}
var requests = document.querySelector("#requests")
var num = 2
var num2 = 418
function requestsPhil(){
    var requestPhil = document.querySelector("#phil-s");
    var requests = document.querySelector(".num");
    num--;
    requests.innerText = num;
    console.log(num)
    requestPhil.remove();
    return num;
}
function acceptPhil(){
    var requestPhil = document.querySelector("#phil-s");
    var requests = document.querySelector(".num");
    var connections = document.querySelector("#connections")
    num--;
    requests.innerText = num;
    num2++;
    connections.innerText = num2;
    requestPhil.remove();
    return num;
}
function requestsTodd(){
    var requestTodd = document.querySelector("#todd-s");
    var requests = document.querySelector(".num");
    num--;
    requests.innerText = num;
    console.log(num)
    requestTodd.remove();
    return num;
}
function acceptTodd(){
    var requestTodd = document.querySelector("#todd-s");
    var requests = document.querySelector(".num");
    var connections = document.querySelector("#connections")
    num--;
    requests.innerText = num;
    num2++;
    connections.innerText = num2;
    requestTodd.remove();
    return num;
}