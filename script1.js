let timer;
let seconds = 0;
let isRunning = false;

const display = document.getElementById('display');
const lapsList = document.getElementById('laps');

function updateDisplay() {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
}

function pad(num) {
    return num < 10 ? '0' + num : num;
}

function startTimer() {
    if (!isRunning) {
        timer = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
        isRunning = true;
    }
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    seconds = 0;
    updateDisplay();
    isRunning = false;
    lapsList.innerHTML = '';
}

function recordLap() {
    const lapTime = display.textContent;
    const li = document.createElement('li');
    li.textContent = lapTime;
    lapsList.appendChild(li);
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('lap').addEventListener('click', recordLap);
