const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const concertDay = new Date('March 04, 2023 21:30 GMT-03:00').getTime();

const countdownConcert = setInterval(function time () {
    let actualDate = new Date().getTime();
    let concertDate = concertDay - actualDate;

    let concertSeconds = concertDate/1000;
    let concertMinutes = concertSeconds/60;
    let concertHours = concertMinutes/60;
    let concertDays = concertHours/24;

    let secondsUntil = Math.trunc(concertSeconds%60);
    let minutesUntil = Math.trunc(concertMinutes%60);
    let hoursUntil = Math.trunc(concertHours%24);
    let daysUntil = Math.trunc(concertDays);

    days.textContent = daysUntil < 10 ? (daysUntil = '0' + daysUntil) : (daysUntil);
    hours.textContent = hoursUntil < 10 ? (hoursUntil = '0' + hoursUntil) : (hoursUntil);
    minutes.textContent = minutesUntil < 10 ? (minutesUntil = '0' + minutesUntil) : (minutesUntil);
    seconds.textContent = secondsUntil < 10 ? (secondsUntil = '0' + secondsUntil) : (secondsUntil);
})