// Declare global variables
var mainTimer = document.getElementById("startTimer");
var timerState = document.getElementById("displayTimer");
var breakState = document.getElementById("displayBreak");
var count = parseInt(document.getElementById("displayTimer").innerHTML);
var breakCount = parseInt(document.getElementById("displayBreak").innerHTML);
var alertSound = document.getElementById("alertsound");
var timerAdd = document.getElementById("timerAdd");
var timerSubtract = document.getElementById("timerSubtract");
var breakAdd = document.getElementById("breakAdd");
var breakSubtract = document.getElementById("breakSubtract");

// Event handler for user clicks on main timer
mainTimer.addEventListener("click", activateTimer);

// Start timer and decrement down
function activateTimer(event) {
  if (timerState.style.zIndex == "-1") {
    timerState.style.zIndex = "1";
    breakState.style.zIndex = "1";

    var counter = setInterval(timer, 1000);
    count *= 60;

    // Format timer to minutes and seconds
    function timer() {
      count -= 1;
      if (count === 0) {
        alertSound.play();
        clearInterval(counter);
        var breakCounter = setInterval(breakTimer);
      }
      timerState.innerHTML = count;
      if (Math.floor(count / 60) > 10) {
        if (count % 60 >= 10) {
          timerState.innerHTML = Math.floor(count / 60) + ":" + count % 60;
        } else {
          timerState.innerHTML =
            "0" + Math.floor(count / 60) + ":" + "0" + count % 60;
        }
      } else {
        if (count % 60 >= 10) {
          timerState.innerHTML =
            "0" + Math.floor(count / 60) + ":" + count % 60;
        } else {
          timerState.innerHTML =
            "0" + Math.floor(count / 60) + ":" + "0" + count % 60;
        }
      }

      // Format break timer to minutes and seconds
      function breakTimer() {

      }
    }
  } else {
    timerState.style.zIndex = "-1";
    breakState.style.zIndex = "-1";
  }
  event.preventDefault();
}

// Event handlers for incrementing idle timer
timerAdd.addEventListener("click", function(event) {
  count += 1;
  if (count < 10) {
    timerState.innerHTML = timerState.innerHTML = "0" + count + ":00";
  }
  if (count >= 10) {
    timerState.innerHTML = timerState.innerHTML = count + ":00";
  }
  event.preventDefault();
});

// Event handlers for decrementing idle timer
timerSubtract.addEventListener("click", function(event) {
  if (count > 1) {
    count -= 1;
  }

  if (count >= 10) {
    timerState.innerHTML = timerState.innerHTML = count + ":00";
  }
  if (count < 10 && count > 0) {
    timerState.innerHTML = timerState.innerHTML = "0" + count + ":00";
  }
  event.preventDefault();
});

// Event handler for incrementing idle break timer
breakAdd.addEventListener("click", function(event) {
  breakCount += 1;
  breakState.innerHTML = breakCount;
  event.preventDefault();
});

// Event handler for decrementing idle break timer
breakSubtract.addEventListener("click", function(event) {
  if (breakCount > 0) {
    breakCount -= 1;
    breakState.innerHTML = breakCount;
  }
  event.preventDefault();
});
