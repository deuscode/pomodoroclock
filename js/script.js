// Declare global variables
var mainTimer = document.getElementById('startTimer');
var timerState = document.getElementById('displayTimer');
var currentTimer = document.getElementById('displayTimer').innerHTML;

// Event handler for user clicks on main timer
mainTimer.addEventListener('click', activateTimer);

function activateTimer() {
    if (timerState.style.zIndex == '-1') {
        timerState.style.zIndex = '1';
    } else {
        timerState.style.zIndex = '-1';
    }

}

function startTimer() {
    var count;
    if (timerState.style.zIndex == '-1') {
        
    }
}