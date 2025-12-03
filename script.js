let target = null;
let mining = false;
let balance = 0;

function newTarget() {
    target = String(Math.floor(Math.random() * 100000000)).padStart(8, '0');
    document.getElementById("numberBox").innerText = target;
}

newTarget();

document.getElementById("startBtn").onclick = () => {
    if (mining) return;
    mining = true;
    mine();
};

function mine() {
    let current = 0;
    const tryBox = document.getElementById("currentTry");
    
    let interval = setInterval(() => {
        current = Math.floor(Math.random() * 100000000);
        let formatted = String(current).padStart(8, '0');
        tryBox.innerText = "Текущее число: " + formatted;

        if (formatted === target) {
            clearInterval(interval);
            mining = false;

            balance += 10;
            document.getElementById("balance").innerText =
                "Баланс: " + balance + " CHC";

            newTarget();
        }
    }, 15);
}

document.getElementById("withdrawBtn").onclick = () => {
    const receipt = document.getElementById("receipt");
    const shillings = balance * 240;

    receipt.style.display = "block";

    receipt.innerHTML =
        "====== ЧЕК CHC ======<br>" +
        "Баланс: " + balance + " CHC<br>" +
        "Курс: 1 CHC = 240 шиллингов<br>" +
        "Выплачено: " + shillings + " шиллингов<br>" +
        "======================";

    balance = 0;
    document.getElementById("balance").innerText = "Баланс: 0 CHC";
};