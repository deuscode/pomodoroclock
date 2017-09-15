// Declare global variables
var mainTimer = document.getElementById('startTimer');
var timerState = document.getElementById('displayTimer');

// Event handler for user clicks on main timer
mainTimer.addEventListener('click', startTimer);

function startTimer() {
    if (timerState.style.zIndex == '-1') {
        timerState.style.zIndex = '1';
    } else {
        timerState.style.zIndex = '-1';
    }

}