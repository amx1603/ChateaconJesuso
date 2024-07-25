// Variables para referenciar elementos del DOM
const messageInput = document.getElementById('messageInput');
const messagesContainer = document.getElementById('messages');

// Función para enviar un mensaje
function sendMessage() {
    const messageText = messageInput.value.trim();
    if (messageText !== '') {
        // Mostrar el mensaje en el propio dispositivo
        displayMessage('Tú', messageText);

        // Guardar el mensaje en localStorage
        saveMessage('local', { sender: 'Tú', message: messageText });

        // Aquí normalmente se enviaría el mensaje al servidor
        // Pero en este ejemplo lo guardaremos solo localmente
    }
    messageInput.value = '';
}

// Función para mostrar un mensaje en el chat
function displayMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Función para guardar un mensaje en localStorage
function saveMessage(key, messageObj) {
    let storedMessages = JSON.parse(localStorage.getItem(key)) || [];
    storedMessages.push(messageObj);
    localStorage.setItem(key, JSON.stringify(storedMessages));
}
