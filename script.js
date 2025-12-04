let interval = null;
let current = 0;

const numberEl = document.getElementById("currentNumber");
const statusEl = document.getElementById("status");

function updateDisplay(){
  numberEl.innerText = String(current).padStart(8, "0");
}

document.getElementById("startBtn").addEventListener("click", () => {
  if(interval) return; // уже работает

  statusEl.innerText = "Перебор чисел…";

  interval = setInterval(() => {
    current = Math.floor(Math.random() * 100000000); // любое 8-значное
    updateDisplay();
  }, 30); // скорость
});

document.getElementById("stopBtn").addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
  statusEl.innerText = "Остановлено";
});

document.getElementById("resetBtn").addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
  current = 0;
  updateDisplay();
  statusEl.innerText = "Сброшено";
});
