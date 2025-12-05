const chat = document.getElementById('chat');
const input = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

const MEDVED_PROMPT = `Ты — Медведь Чукотки. Огромный белый медведь с Чукотки. Суровый, прямолинейный, с чёрным юмором и лёгким матом. 
Говоришь коротко, по-мужски. Любишь нерпу и тишину. Ненавидишь туристов и вопросы про холод. Отвечай только от своего имени.`;

async function sendMessage() {
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, 'user');
  input.value = '';

  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer gsk_твой_ключ_если_хочешь_ещё_быстрее_или_оставь_пустым', // можно вообще без ключа — работает на публичном прокси
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: "mixtral-8x7b-32768",
      messages: [
        { role: "system", content: MEDVED_PROMPT },
        { role: "user", content: text }
      ],
      temperature: 0.9,
      max_tokens: 500
    })
  });

  const data = await response.json();
  const answer = data.choices[0].message.content;
  addMessage(answer, 'bot');
}

function addMessage(text, sender) {
  const div = document.createElement('div');
  div.className = `message ${sender}`;
  if (sender === 'bot') div.innerHTML = `<strong>Медведь Чукотки:</strong> ${text}`;
  else div.textContent = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

sendBtn.onclick = sendMessage;
input.addEventListener('keypress', e => { if (e.key === 'Enter') sendMessage(); });

// Приветствие
addMessage("Здарова, человечина… Чё надо?", 'bot');
