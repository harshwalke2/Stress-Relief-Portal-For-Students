document.addEventListener('DOMContentLoaded', () => {
    // Timer settings
    const MODES = {
        pomodoro: 25,
        shortBreak: 5,
        longBreak: 15,
    };
    let currentMode = 'pomodoro';
    let timerInterval = null;
    let totalSeconds = MODES[currentMode] * 60;
    let isRunning = false;

    // Get elements
    const minutesEl = document.getElementById('timer-minutes');
    const secondsEl = document.getElementById('timer-seconds');
    const startStopBtn = document.getElementById('timer-start-stop');
    const resetBtn = document.getElementById('timer-reset');
    const tabButtons = document.querySelectorAll('.tab-btn');

   
    function updateDisplay() {
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;
        minutesEl.textContent = String(minutes).padStart(2, '0');
        secondsEl.textContent = String(seconds).padStart(2, '0');
    }

    
    function startTimer() {
        if (isRunning) return;
        isRunning = true;
        startStopBtn.textContent = 'PAUSE';

        timerInterval = setInterval(() => {
            if (totalSeconds <= 0) {
                clearInterval(timerInterval);
                alert('Time is up!');
                resetTimer();
                return;
            }
            totalSeconds--;
            updateDisplay();
        }, 1000);
    }

    
    function pauseTimer() {
        if (!isRunning) return;
        isRunning = false;
        startStopBtn.textContent = 'START';
        clearInterval(timerInterval);
    }

    
    function resetTimer() {
        pauseTimer();
        totalSeconds = MODES[currentMode] * 60;
        updateDisplay();
    }

    
    function switchMode(newMode) {
        currentMode = newMode;

        tabButtons.forEach(btn => btn.classList.remove('active'));

        document.querySelector(`.tab-btn[data-mode="${newMode}"]`).classList.add('active');
        resetTimer();
    }

 
    startStopBtn.addEventListener('click', () => {
        if (isRunning) {
            pauseTimer();
        } else {
            startTimer();
        }
    });

   
    resetBtn.addEventListener('click', resetTimer);

    
    tabButtons.forEach(button => {
        button.addEventListener('click', ()F => {
            switchMode(button.dataset.mode);
        });
    });

    
    updateDisplay();
});