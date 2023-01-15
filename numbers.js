const slider = document.getElementById("myRange");
const maxWindow = document.querySelector('.max');
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const diapozonAlert = document.querySelector('.diapozon');
maxWindow.innerHTML = slider.value;
diapAlert();

slider.oninput = function() {
    maxWindow.innerHTML = slider.value;
    diapAlert();
}

const start = document.getElementById("start");
start.addEventListener('click', numbersGame);
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

function numbersGame() {
    let diapozon = Number(slider.value);
    
    let tries;
    

    let triesButton = document.getElementsByName('tries');
    for(let i=0; i<triesButton.length; i++) {
        if (triesButton[i].checked) {
            switch (triesButton[i].id) {
            case easy:
                tries = 15;
                break;
            case medium:
                tries = 10;
                break;
            case hard:
                tries = 5;
                break;
            default:
                tries = 3;
            }
            break;
        }
    }

    const randomNumber = Math.floor(Math.random() * diapozon + 1);
    let number;

    for(let i = 1; i <= tries; i++){
        number = +prompt('Введіть ваш варінт');
            if(number < randomNumber) {
                alert('Загадане число більше за введене');
                alert(`У вас залишилось ${tries - i} спроб`);
            }
            else if(number === randomNumber){
                alert('Ви виграли! Супер!');
                alert(`Ми вгадали за ${i} спроб `);
                break;
            }
            else{
                alert('Загадане число менше за введене');
                alert(`У вас залишилось ${tries - i} спроб`);
            }
        }
}