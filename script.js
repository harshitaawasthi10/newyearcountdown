function updateCountdown() {
    const newYearDate = new Date('January 1, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = newYearDate - now;

    // Time calculations
    const day = 1000 * 60 * 60 * 24;
    const hour = 1000 * 60 * 60;
    const minute = 1000 * 60;
    const second = 1000;

    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    if (gap <= 0) {
        clearInterval(countdownInterval);
        document.getElementById('timer').innerHTML = "<h2>Happy New Year 2025!</h2>";
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

// Button to Show New Year Message
document.getElementById('demoBtn').addEventListener('click', () => {
    alert('Happy New Year!');
});

document.getElementById('messageBtn').addEventListener('click', () => {
    alert('Happy New Year 2025!');
});
