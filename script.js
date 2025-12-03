let mining = false;
let interval;
let timeout;

let target = random8();
let balance = 0;

document.getElementById("target").innerText = target;

function random8() {
    return Math.floor(10000000 + Math.random() * 90000000).toString();
}

document.getElementById("startBtn").onclick = () => {
    if (mining) return;

    mining = true;

    interval = setInterval(() => {
        let n = Math.floor(Math.random() * 100000000)
                .toString().padStart(8, "0");
        document.getElementById("try").innerText = n;
    }, 30);

    let time = 300000 + Math.random() * 300000;

    timeout = setTimeout(() => {
        mining = false;
        clearInterval(interval);

        balance += 10;
        document.getElementById("balance").innerText = balance;

        target = random8();
        document.getElementById("target").innerText = target;
    }, time);
};

document.getElementById("withdrawBtn").onclick = () => {
    const shillings = balance * 240;

    document.getElementById("modalText").innerHTML =
        `Вы вывели <b>${balance} CHC</b><br>
         Это <b>${shillings}</b> шиллингов`;

    balance = 0;
    document.getElementById("balance").innerText = balance;

    document.getElementById("modal").style.display = "block";
};

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

document.getElementById("modeBtn").onclick = () => {
    document.body.classList.toggle("day");

    if (document.body.classList.contains("day"))
        document.getElementById("modeBtn").innerText = "Тёмный режим";
    else
        document.getElementById("modeBtn").innerText = "Светлый режим";
};
