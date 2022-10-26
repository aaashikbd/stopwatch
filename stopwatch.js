let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");
let display = document.getElementById("display");

let i = 0;

// start button

startBtn.addEventListener("click", function () {
  start();
});

// start function
function start() {
  i++;

  hms(i);

  const reap = setTimeout(start, 1000);

  // stop button
  stopBtn.addEventListener("click", function () {
    clearTimeout(reap);
  });

  // reset button
  resetBtn.addEventListener("click", function () {
    clearTimeout(reap);
    display.innerHTML = "00:00:00";
  });
}

// converter

function hms(sec) {
  let s = String(Math.floor(sec % 60)).padStart(2, "0");

  let m = String(Math.floor((sec % 3600) / 60)).padStart(2, "0");

  let h = String(Math.floor((sec % (3600 * 24)) / 3600)).padStart(2, "0");

  display.innerHTML = h + ":" + m + ":" + s;
}
