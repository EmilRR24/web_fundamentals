console.log("page loaded...");

function mouseOverHandler(element){
    element.play();
    element.muted = "muted";
}
function mouseOutHandler(element){
    element.pause();
}