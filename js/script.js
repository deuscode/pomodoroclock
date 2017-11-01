// Declare global variables
var mainTimer = document.getElementById('startTimer');
var timerState = document.getElementById('displayTimer');
var breakState = document.getElementById('displayBreak');
var count = parseInt(document.getElementById('displayTimer').innerHTML);
var breakCount = parseInt(document.getElementById('displayBreak').innerHTML)
var alertSound = document.getElementById('alertsound');
var timerAdd = document.getElementById('timerAdd');
var timerSubtract = document.getElementById('timerSubtract');
var breakAdd = document.getElementById('breakAdd');
var breakSubtract = document.getElementById('breakSubtract');

// alertSound.play();

// Event handler for user clicks on main timer
mainTimer.addEventListener('click', activateTimer);

function activateTimer(event) {
    if (timerState.style.zIndex == '-1') {
        timerState.style.zIndex = '1';
        breakState.style.zIndex = '1';
    } else {
        timerState.style.zIndex = '-1';
        breakState.style.zIndex = '-1';
    }
    event.preventDefault();
}

timerAdd.addEventListener('click', function(event) {
        count += 1;
        timerState.innerHTML = count;
    event.preventDefault();
});

timerSubtract.addEventListener('click', function(event) {
    if(count > 0) {
        count -= 1;
        timerState.innerHTML = count;
    }
    event.preventDefault();
});

breakAdd.addEventListener('click', function(event) {
    breakCount += 1;
    breakState.innerHTML = breakCount;
event.preventDefault();
});

breakSubtract.addEventListener('click', function(event) {
if(breakCount > 0) {
    breakCount -= 1;
    breakState.innerHTML = breakCount;
}
event.preventDefault();
});