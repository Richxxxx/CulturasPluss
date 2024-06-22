let monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre','Octubre', 'Noviembre', 'Diciembre'];

let currentDate = new Date();
let currentDay = currentDate.getDate();
let monthNumber = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

let dates = document.getElementById('dates');
let month = document.getElementById('month');
let year = document.getElementById('year');

let prevMonthDOM = document.getElementById('prev-month');
let nextMonthDOM = document.getElementById('next-month');

month.textContent = monthNames[monthNumber];
year.textContent = currentYear.toString();

prevMonthDOM.addEventListener('click', ()=>lastMonth());
nextMonthDOM.addEventListener('click', ()=>nextMonth());



const writeMonth = (month) => {

    //numeros mes pasado
    for(let i = startDay(); i>0;i--){
        dates.innerHTML += ` <div class="calendar__date calendar__item calendar__last-days">
            ${getTotalDays(monthNumber-1)-(i-1)}
        </div>`;
    }

    //numeros mes actual
    for(let i=1; i<=getTotalDays(month); i++){
        if(i===currentDay) {
            dates.innerHTML += ` <div class="calendar__date calendar__item calendar__today">${i}</div>`;
        }else if(i==1){
            dates.innerHTML += `<div class="calendar__date calendar__item calendar_day_select">${i} <h6 title="Esposicion en el museo de Alemania Berlin \nHorario: 6:00 am - 3:00 pm">Exposicion de arte</h6></div>`;
        }else if(i==22 && month==5){
            dates.innerHTML += `<div class="calendar__date calendar__item calendar_day_select">${i} <h6 title="Exposicion unica y exclusiva, se mostrara un poco de \ntoda el arte Alemana en especial el barroco y \nsus derivados, solo por esta fecha. \nHorario: 6:00 am - 7:00 pm">Exposicion de arte</h6></div>`;
        }else if(i==16 && month==5){
            dates.innerHTML += `<div class="calendar__date calendar__item calendar_day_select">${i} <h6 title="Exposicion unica y exclusiva, se garan demostraciones \nde como se realizaba el arte Bizantino en Turquia, unica fecha.\nHorario: 6:00 am - 7:00 pm">Exposicion de arte</h6></div>`;
        }else if(i==14 && month==6){
            dates.innerHTML += `<div class="calendar__date calendar__item calendar_day_select">${i} <h6 title="Exposicion unica y exclusiva, se mostrara un poco de \ntoda el arte Alemana, su Clasicismo y Romanticismo  \nsolo por esta fecha. \nHorario: 6:00 am - 7:00 pm">Exposicion de arte</h6></div>`;
        }else if(i==24 && month==6){
            dates.innerHTML += `<div class="calendar__date calendar__item calendar_day_select">${i} <h6 title="Exposicion unica y exclusiva, se mostrara un poco de \ntoda el arte Turca en especial la arquitectura Republicana y \nalgunos planos de la primeras casas. \nHorario: 6:00 am - 7:00 pm">Exposicion de arte</h6></div>`;
        }
        else{
            dates.innerHTML += ` <div class="calendar__date calendar__item">${i}</div>`;
        }
    }
}

const getTotalDays = month => {
    if(month === -1) month = 11;

    if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
        return  31;

    } else if (month == 3 || month == 5 || month == 8 || month == 10) {
        return 30;

    } else {

        return isLeap() ? 29:28;
    }
}

const isLeap = () => {
    return ((currentYear % 100 !==0) && (currentYear % 4 === 0) || (currentYear % 400 === 0));
}

const startDay = () => {
    let start = new Date(currentYear, monthNumber, 1);
    return ((start.getDay()-1) === -1) ? 6 : start.getDay()-1;
}

const lastMonth = () => {
    if(monthNumber !== 0){
        monthNumber--;
    }else{
        monthNumber = 11;
        currentYear--;
    }

    setNewDate();
}

const nextMonth = () => {
    if(monthNumber !== 11){
        monthNumber++;
    }else{
        monthNumber = 0;
        currentYear++;
    }

    setNewDate();
}

const setNewDate = () => {
    currentDate.setFullYear(currentYear,monthNumber,currentDay);
    month.textContent = monthNames[monthNumber];
    year.textContent = currentYear.toString();
    dates.textContent = '';
    writeMonth(monthNumber);
}

writeMonth(monthNumber);