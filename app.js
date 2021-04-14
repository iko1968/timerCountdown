const startMinutes = 1;
let timeLeft = startMinutes * 60;

const countdownEl = document.getElementById('countdown');
setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    
    if(timeLeft <= 0) {
        clearInterval(timeLeft === 0);
    }
    seconds = seconds <= 1 ? '0' + seconds : seconds;
    countdownEl.innerHTML = `${minutes}:${seconds}`;
    timeLeft-=1;
}