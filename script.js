let mining = false;
let currentGuess = 0;
let target = "????????";
let balance = 0;
let miningTimeout;

const guessDisplay = document.getElementById("guess");
const targetDisplay = document.getElementById("target");
const balanceDisplay = document.getElementById("balance");
const startButton = document.getElementById("startBtn");

updateUI();

// Запуск майнинга
function startMining() {
    if (mining) return;

    mining = true;
    startButton.disabled = true;

    // Генерируем скрытое 8-значное число
    target = generateRandomNumber(8);
    targetDisplay.textContent = "????????";

    startGuessAnimation();

    // Время добычи: 5–10 минут
    const timeToWin = randomRange(5 * 60_000, 10 * 60_000);

    miningTimeout = setTimeout(() => {
        finishMining();
    }, timeToWin);
}

// Показывает быстро меняющиеся числа
function startGuessAnimation() {
    if (!mining) return;

    currentGuess = generateRandomNumber(8);
    guessDisplay.textContent = currentGuess;

    requestAnimationFrame(startGuessAnimation);
}

// Когда число найдено
function finishMining() {
    mining = false;
    targetDisplay.textContent = target;

    balance += 10;
    updateUI();

    startButton.disabled = false;
}

// Генерация n-значного числа
function generateRandomNumber(len) {
    let out = "";
    for (let i = 0; i < len; i++) {
        out += Math.floor(Math.random() * 10);
    }
    return out;
}

// Случайное число в диапазоне
function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Обновление баланса
function updateUI() {
    balanceDisplay.textContent = balance;
}
