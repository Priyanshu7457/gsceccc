// let test = new Quiz().showFinalScore();
// console.log(test);

document.addEventListener("DOMContentLoaded", function () {
    const countdownElement = document.getElementById("timer");
    let timeInSeconds = 10800; // Set the countdown time in seconds

    function updateCountdown() {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        countdownElement.innerText = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

        if (timeInSeconds <= 0) {
            countdownElement.innerText = "Time's up!";
        } else {
            timeInSeconds--;
        }
    }

    setInterval(updateCountdown, 1000);
});
