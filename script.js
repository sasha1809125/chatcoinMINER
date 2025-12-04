const chat = document.getElementById("chat");
const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

function addMessage(text, author) {
    let div = document.createElement("div");
    div.className = "message " + author;
    div.innerText = text;
    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
}

async function askGPT(prompt) {
    try {
        const response = await fetch("https://free-gpt-proxy.vercel.app/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt })
        });

        const text = await response.text();
        return text;
    } catch (err) {
        return "Ошибка: не удалось получить ответ.";
    }
}

async function sendMessage() {
    const message = input.value.trim();
    if (!message) return;

    addMessage(message, "user");
    input.value = "";

    addMessage("Печатает...", "bot"); // индикатор

    const blocks = document.querySelectorAll(".bot");
    const lastBot = blocks[blocks.length - 1];

    const reply = await askGPT(message);
    lastBot.innerText = reply;
}

sendBtn.onclick = sendMessage;
input.addEventListener("keydown", e => {
    if (e.key === "Enter") sendMessage();
});
