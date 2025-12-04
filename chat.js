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

async function botReply(prompt) {
    addMessage("Печатает...", "bot");

    const blocks = document.querySelectorAll(".bot");
    const loadingBlock = blocks[blocks.length - 1];

    const response = await fetch("proxy.php", {
        method: "POST",
        body: JSON.stringify({ prompt }),
        headers: { "Content-Type": "application/json" }
    });

    const data = await response.json();

    loadingBlock.remove();
    addMessage(data.reply, "bot");
}

sendBtn.onclick = () => {
    const text = input.value.trim();
    if (!text) return;

    addMessage(text, "user");
    input.value = "";

    botReply(text);
};

input.addEventListener("keydown", e => {
    if (e.key === "Enter") sendBtn.onclick();
});