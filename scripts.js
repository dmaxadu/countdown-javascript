const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const indicatorDays = document.getElementById("1");
const indicatorHours = document.getElementById("2");
const indicatorMinutes = document.getElementById("3");
const indicatorSeconds= document.getElementById("4");

const concertDay = new Date('March 04, 2023 21:30 GMT-03:00').getTime();

const countdownConcert = setInterval(function time () {
    let actualDate = new Date().getTime();
    let concertDate = concertDay - actualDate;

    let concertSeconds = concertDate/1000;
    let concertMinutes = concertDate/60000;
    let concertHours = concertDate/3600000;
    let concertDays = concertDate/86400000;

    let secondsUntil = Math.trunc(concertSeconds%60);
    let minutesUntil = Math.trunc(concertMinutes%60);
    let hoursUntil = Math.trunc(concertHours%24);
    let daysUntil = Math.trunc(concertDays);

    days.textContent = daysUntil < 10 ? (daysUntil = '0' + daysUntil) : (daysUntil);
    hours.textContent = hoursUntil < 10 ? (hoursUntil = '0' + hoursUntil) : (hoursUntil);
    minutes.textContent = minutesUntil < 10 ? (minutesUntil = '0' + minutesUntil) : (minutesUntil);
    seconds.textContent = secondsUntil < 10 ? (secondsUntil = '0' + secondsUntil) : (secondsUntil);

    if(actualDate >= concertDay){
        itsToday();
    }
})

const itsToday = () => {
    days.textContent = '🎉';
    hours.textContent = '🐉';
    minutes.textContent = '🐉';
    seconds.textContent = '🎉';
    indicatorDays.textContent = 'ENJOY!!';
    indicatorHours.textContent = 'ENJOY!!';
    indicatorMinutes.textContent = 'ENJOY!!';
    indicatorSeconds.textContent = 'ENJOY!!';
}