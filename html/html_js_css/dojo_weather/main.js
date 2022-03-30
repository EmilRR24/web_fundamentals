function cookies(){
    var alertBox = document.querySelector(".alert");
    alertBox.remove();
}
function getOption(){
    var x = document.getElementById('temp').value;
    var tempFer = document.querySelector('.fer')
    var tempFer_2 = document.querySelector('.fer-2')
    var tempFer_3 = document.querySelector('.fer-3')
    var tempFer_4 = document.querySelector('.fer-4')
    var tempCel = document.querySelector('.cel')
    var tempCel_2 = document.querySelector('.cel-2')
    var tempCel_3 = document.querySelector('.cel-3')
    var tempCel_4 = document.querySelector('.cel-4')
    if(x == '°C'){
        tempFer.style.display = 'none';
        tempFer_2.style.display = 'none';
        tempFer_3.style.display = 'none';
        tempFer_4.style.display = 'none';
        tempCel.style.display = 'block';
        tempCel_2.style.display = 'block';
        tempCel_3.style.display = 'block';
        tempCel_4.style.display = 'block';
    }
    else if(x == '°F'){
        console.log('hello');
        tempCel.style.display = 'none';
        tempCel_2.style.display = 'none';
        tempCel_3.style.display = 'none';
        tempCel_4.style.display = 'none';
        tempFer.style.display = 'block';
        tempFer_2.style.display = 'block';
        tempFer_3.style.display = 'block';
        tempFer_4.style.display = 'block';
    }
        else {
            tempCel.style.display = 'block';
            tempCel_2.style.display = 'block';
            tempCel_3.style.display = 'block';
            tempCel_4.style.display = 'block';
            tempFer.style.display = 'block';
            tempFer_2.style.display = 'block';
            tempFer_3.style.display = 'block';
            tempFer_4.style.display = 'block';
        }
}