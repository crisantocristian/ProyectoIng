const chatContainer = document.getElementById("chat-container");
const chatTitle = document.getElementById("chat-title");
const chatMessages = document.getElementById("chat-messages");
const chatForm = document.getElementById("chat-form");

let currentChat = null;

function openChat(chatId, chatName) {
  chatTitle.textContent = `Chat: ${chatName}`;
  chatContainer.classList.remove("hidden");

  // Aquí puedes cargar los mensajes guardados del chat seleccionado desde la base de datos
  // Por ahora, solo mostramos un mensaje de bienvenida
  chatMessages.innerHTML = `<p>Bienvenido al chat ${chatName}!</p>`;
  
  currentChat = chatId;
}

document.querySelectorAll(".chat-button").forEach((button) => {
  button.addEventListener("click", () => {
    const chatId = button.getAttribute("data-chat");
    const chatName = button.previousElementSibling.textContent;
    openChat(chatId, chatName);
  });
});

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const chatInput = document.getElementById("chat-input");
  const message = chatInput.value.trim();

  if (message && currentChat) {
    // Aquí puedes guardar el mensaje en la base de datos
    // y luego actualizar la lista de mensajes

    const messageElement = document.createElement("p");
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatInput.value = "";
  }
});
