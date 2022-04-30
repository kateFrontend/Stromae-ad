function saleCountdown() {
    const saleDate = new Date ("October 25, 2022 00:00");
    const now = new Date();
    const diff = saleDate - now;

    const msInSecond = 1000; //сколько милисекунд в секунде - 1000
    const msInMinute = 60 * 1000; //сколько милисекунд в минуте - 60 000
    const msInHour = 60 * 60 * 1000; //сколько милисекунд в часе - 3 600 000
    const msInDay = 24 * 60 * 60 * 1000; //сколько милисекунд в сутках - 86 400 000

    const displayDay = Math.floor(diff/msInDay);
    document.querySelector('.days').textContent = displayDay;

    const displayHour = Math.floor((diff%msInDay) / msInHour);
    document.querySelector('.hours').textContent = displayHour;

    const displayMinutes = Math.floor((diff%msInHour) / msInMinute);
    document.querySelector('.minutes').textContent = displayMinutes;

    const displaySeconds = Math.floor((diff%msInMinute) / msInSecond);
    document.querySelector('.seconds').textContent = displaySeconds;

    if (diff <= 0) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;
        clearInterval(timerID);
        start();

    }

}

let timerID = setInterval(saleCountdown, 1000);

function start() {
    const heading = document.querySelector("h1");
    heading.textContent = "La prévente des billets a commencé!";
    heading.classList.add("red");
}

const button = document.querySelector(".music");
const audio = document.querySelector("#myAudio");
button.addEventListener("click", function() {
    if (audio.paused) {
        audio.play();
    }
    else {
        audio.pause();
    }
})
