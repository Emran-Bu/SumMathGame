var level = document.querySelector('.level')
var levelSelect = document.querySelector('#levelSelect')
var box = document.querySelector('.box')
var fnumber = document.querySelector('.fnumber')
var snumber = document.querySelector('.snumber')
var input = document.querySelector('.input')
var inputDiv = document.querySelector('.inputDiv')
var inputBox = document.querySelector('.inputBox')
var right = document.querySelector('.right')
var wrong = document.querySelector('.wrong')
var total = document.querySelector('.total')
var test = document.querySelector('.test');

var levelSelected = 1;

var rightCount = 0;
var wrongCount = 0;
var totalCount = 0;

var rightValue = 0;
var wrongValue = 0;

rand1 = Math.ceil(Math.random()*50+10);
rand2 = Math.ceil(Math.random()*50);

value = rand1 + rand2;

fnumber.innerHTML = rand1;
snumber.innerHTML = '+ ' +rand2;


input.addEventListener('keyup', function() {
        // input.value;

    if (input.value == value) {
        inputDiv.classList.remove('invalid')
        inputDiv.classList.add('valid')
        rightValue = 1;
        wrongValue = 0;
    } else {
        inputDiv.classList.remove('valid')
        inputDiv.classList.add('invalid')
        rightValue = 0;
        wrongValue = 1;
    }
})

input.addEventListener('keypress', function(e) {
    if (input.value == '') {
        console.log('It is working');
    } else if (e.keyCode=='13'){
        input.value = null;

        if (levelSelected == 1) {
            rand1 = Math.ceil(Math.random()*50+10);
            rand2 = Math.ceil(Math.random()*50);
            value = rand1 + rand2;
            fnumber.innerHTML = rand1;
            snumber.innerHTML = '+ ' +rand2;
        }

        else if (levelSelected == 2) {
            rand1 = Math.ceil(Math.random()*100+10);
            rand2 = Math.ceil(Math.random()*100);
            value = rand1 + rand2;
            fnumber.innerHTML = rand1;
            snumber.innerHTML = '+ ' +rand2;
        }

        else if (levelSelected == 3) {
            rand1 = Math.ceil(Math.random()*200+10);
            rand2 = Math.ceil(Math.random()*200);
            value = rand1 + rand2;
            fnumber.innerHTML = rand1;
            snumber.innerHTML = '+ ' +rand2;
        }
        
        fnumber.innerHTML = rand1;
        snumber.innerHTML = '+ ' +rand2;
        value = rand1 + rand2;
        totalCount++;
        total.innerHTML = "Total = " + totalCount;

        if (rightValue == 1) {
        rightCount++;
        right.innerHTML = "Right = " + rightCount;
        rightValue = 0;
        } else{
           wrongCount++;
           wrong.innerHTML = "Wrong = " + wrongCount;
        }
    }
})


levelSelect.addEventListener('change', function() {
    if (levelSelect.value == 1) {
        levelSelected = 1;

        rand1 = Math.ceil(Math.random()*50+10);
        rand2 = Math.ceil(Math.random()*50);
        value = rand1 + rand2;
        fnumber.innerHTML = rand1;
        snumber.innerHTML = '+ ' +rand2;
    } else if (levelSelect.value == 2) {
        levelSelected = 2;

        rand1 = Math.ceil(Math.random()*100+10);
        rand2 = Math.ceil(Math.random()*100);
        value = rand1 + rand2;
        fnumber.innerHTML = rand1;
        snumber.innerHTML = '+ ' +rand2;
    } else if (levelSelect.value == 3) {
        levelSelected = 3;
        
        rand1 = Math.ceil(Math.random()*200+10);
        rand2 = Math.ceil(Math.random()*200);
        value = rand1 + rand2;
        fnumber.innerHTML = rand1;
        snumber.innerHTML = '+ ' +rand2;
    }
})
