// Declare global variables
var mainTimer = document.getElementById('startTimer');
var timerState = document.getElementById('displayTimer');
var currentTimer = document.getElementById('displayTimer').innerHTML;
var count = parseInt(document.getElementById('displayTimer').innerHTML);
var breakCount
var alertSound = document.getElementById('alertsound');

// alertSound.play();

// Event handler for user clicks on main timer
mainTimer.addEventListener('click', activateTimer);

function activateTimer() {
    if (timerState.style.zIndex == '-1') {
        timerState.style.zIndex = '1';
    } else {
        timerState.style.zIndex = '-1';
    }

}

var startTimer = setInterval(function() {
    if (timerState.style.zIndex == '1' || count === 0) {
        clearInterval(startTimer);
    } else {
        count--;
    }
}, 1000);
