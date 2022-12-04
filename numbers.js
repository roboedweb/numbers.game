function numbersGame() {
    let diapozon = +prompt('Ведіть інтервал від 2 до ...');

    while (true) {
        if (isNaN(diapozon)) {
            alert('Потрібно ввести число!');
            diapozon = +prompt('Ведіть інтервал від 2 до ...');
        }
        else {
            break;    
        }
    }

    alert(`Потрібно вгадати число в діапазоні від 1 до ${diapozon}`);
    let tries;
    switch (diapozon) {
        case 50:
            tries = 5;
            break;
        case 100:
            tries = 7;
            break;
        case 200:
            tries = 10;
            break;
        default:
            tries = 3;
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
numbersGame();

while (true) {
    let Continue = prompt('Ще раз?', '1 - ТАК, 2 - НІ');
    if (Continue == 1) {
        numbersGame();
    }
    else if (Continue == 2) {
        break;
    }
    else {
        alert('Потрібно ввести 1 чи 2');
    }
}