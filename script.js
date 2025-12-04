let mining = false;
let balance = 0;
let interval;
let timeout;

let target = random8();
document.getElementById("target").innerText = target;

function random8(){
    return Math.floor(10000000 + Math.random() * 90000000).toString();
}

document.getElementById("startBtn").onclick = () => {

    if(mining) return;

    mining = true;

    interval = setInterval(() => {
        const cur = Math.floor(Math.random()*100000000).toString().padStart(8,"0");
        document.getElementById("current").innerText = cur;
    }, 30);

    const time = 300000 + Math.random()*300000; // 5-10 минут

    timeout = setTimeout(() => {
        mining = false;
        clearInterval(interval);

        balance += 10;
        document.getElementById("balance").innerText = balance;

        target = random8();
        document.getElementById("target").innerText = target;

    }, time);
};

document.getElementById("withdraw").onclick = () => {
    const sh = balance * 240;
    document.getElementById("checkText").innerHTML =
        `Вы вывели <b>${balance} CHC</b><br>Это <b>${sh}</b> шиллингов`;

    balance = 0;
    document.getElementById("balance").innerText = balance;

    document.getElementById("modal").style.display = "block";
};

document.getElementById("closeModal").onclick = () => {
    document.getElementById("modal").style.display = "none";
};
