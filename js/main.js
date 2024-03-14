function sendMessage() {
    var messageInput = document.getElementById("messageInput");
    var message = messageInput.value;
    if (message.trim() !== "") {
        var messagesContainer = document.getElementById("messages");
        var messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.classList.add("sent-message"); 
        messageElement.innerHTML = message;
        messagesContainer.appendChild(messageElement);
        messageInput.value = "";
    }
}

