// Countdown Timer Script
const countdown = () => {
    const newYear = new Date("January 1, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = newYear - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // Display the Happy New Year message immediately
    document.getElementById("newYearMessage").style.display = "block";
    document.getElementById("timer").style.display = "none";  // Hide the timer (optional)
};

countdown();
