document.addEventListener('DOMContentLoaded', () => {
 
    const chatBubble = document.getElementById('chat-bubble');
    const chatWindow = document.getElementById('chat-window');
    const closeChat = document.getElementById('close-chat');
  
    // Toggle chat window visibility when bubble is clicked
    chatBubble.addEventListener('click', () => {
        chatWindow.classList.toggle('hidden');
    });

    // Hide chat window when close button is clicked
    closeChat.addEventListener('click', () => {
        chatWindow.classList.add('hidden');
    });

    // All other functions (sendMessage, callGeminiAPI, appendMessage) are removed.
});