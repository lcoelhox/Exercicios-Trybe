
function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};
createDaysOfTheWeek();


let days = document.querySelector('#days');
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
function createDaysN() {
    for (let index = 0; index < dezDaysList.length; index += 1) {
        let dezDays = dezDaysList[index];
        let dezDaysItem = document.createElement('li')
        dezDaysItem.className = 'day';
        if (dezDays === 24 || dezDays === 31) {
            dezDaysItem.className = 'day ' + 'holiday';
        }
        if (dezDays === 4 || dezDays === 11 || dezDays === 18) {
            dezDaysItem.className = 'day ' + 'friday';
        }
        if (dezDays === 25) {
            dezDaysItem.className = 'day ' + 'holiday ' + 'friday';
        }
        dezDaysItem.innerHTML = dezDays;
        days.appendChild(dezDaysItem);

    }
}
createDaysN();

//function feriados(feriados);
//let button = document.querySelector('.buttons-container');
//if (dezDaysList === 24 || dezDaysList === 25 || dezDaysList === 31) {
//    let criarB = document.createElement(button)
//}
//button.appendChild(criarB);