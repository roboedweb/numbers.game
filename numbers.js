const slider = document.getElementById("myRange");
const maxWindow = document.querySelector('.max');
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const diapozonAlert = document.querySelector('.diapozon');
const numberField = document.getElementById('search-number');
const infoField = document.querySelector('.info-wrapper');
let diapozon, tries, randomNumber, number;
maxWindow.innerHTML = slider.value;

numberField.disabled = true;
diapAlert();

slider.oninput = function() {
    maxWindow.innerHTML = slider.value;
    diapAlert();
}

const start = document.getElementById("start");
start.addEventListener('click', generateNum);
minus.addEventListener('click', sliderminus);
plus.addEventListener('click', sliderplus);

function sliderminus() {
    slider.value--;
    maxWindow.innerHTML = slider.value;
    diapAlert();
}

function sliderplus() {
    slider.value++;
    maxWindow.innerHTML = slider.value;
    diapAlert();
}

function diapAlert() {
    diapozonAlert.innerHTML = `Потрібно вгадати число в діапазоні від 1 до ${slider.value}`;
}

function numbersGame(i) {
    document.querySelector(".number-icon").onclick = function() {
        number = numberField.value;
        numberField.value = '';
        if (i <= tries && i > 0) {
            if (isNaN(Number(number)) || Number(number) == 0) {
                infoField.innerHTML = 'Введіть, будь ласка, коректне число!';
                i--;
            }
            else if(Number(number) < randomNumber) {
                infoField.innerHTML = 'Загадане число більше за введене<br>' + `У вас залишилось ${tries - i} спроб`;
            }
            else if(Number(number) == randomNumber){
                infoField.innerHTML = 'Ви виграли! Супер!<br>' + `Ви вгадали за ${i} спроб `;
                numberField.disabled = true;
                start.disabled = false;
            }
            else{
                infoField.innerHTML = 'Загадане число менше за введене<br>' + `У вас залишилось ${tries - i} спроб`;
            }
        }
        else {
            infoField.innerHTML = 'Ви, на жаль, програли';
            numberField.disabled = true;
            start.disabled = false;
        }
        i++;
    }
}

function generateNum() {
    diapozon = Number(slider.value);
    let triesButton = document.getElementsByName('tries');
    for(let i=0; i<triesButton.length; i++) {
        if (triesButton[i].checked) {
            if (triesButton[i].id == 'easy') {
                tries = 15;
            }
            else if (triesButton[i].id == 'medium') {
                tries = 10;
            }
            else if (triesButton[i].id == 'hard') {
                tries = 5;
            }
            else if (triesButton[i].id == 'extreme') {
                tries = 3;
            }
        }
    }
    randomNumber = Math.floor(Math.random() * diapozon + 1);
    numberField.disabled = false;
    start.disabled = true;
    numbersGame(1);
}

document.getElementById('search-number').addEventListener('keypress', function(event) {
    if (event.key == 'Enter') {
        event.preventDefault();
        document.querySelector('.number-icon').click();
    }
});