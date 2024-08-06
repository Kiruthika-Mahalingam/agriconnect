document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    const responses = {
        'hi': 'Hello! How can I help you today?',
        'Hi': 'Hello! How can I help you today?',
        'hello': 'Hi there! How can I assist you?',
        'how are you?': 'I am just a bot, but I am doing great!',
        'bye': 'Goodbye! Have a great day!',
        'What is the company name': 'KaizenSpark Tech',
        'what is the company name?': 'KaizenSpark Tech',
        'Where is kaizenspark tech located': 'ILP Block, Chennai Institute Of Technology, Chennai-600069.',
        'where is kaizenspark tech located?': 'ILP Block, Chennai Institute Of Technology, Chennai-600069.',
        'Founder of this company': 'Gurubalan',
        'Who is the Founder of this company': 'Gurubalan',
        'who is the Founder of this company': 'Gurubalan',
        'When was this company founded': '2024',
        'when was this company founded': '2024',
        'When are areas that are they mainly focused': 'Digital Markiting , Ui/Ux design , Web development',
        'when are areas that are they mainly focused': 'Digital Markiting , Ui/Ux design , Web development',
    };

    function addMessage(message, sender) {
        const div = document.createElement('div');
        div.className = `message ${sender}`;
        div.textContent = message;
        chatBox.appendChild(div);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
    }

    function getResponse(userMessage) {
        const lowerCaseMessage = userMessage.toLowerCase();
        return responses[lowerCaseMessage] || 'Sorry, I don\'t understand that.';
    }

    function handleSend() {
        const userMessage = userInput.value.trim();
        if (userMessage) {
            addMessage(userMessage, 'user');
            const botResponse = getResponse(userMessage);
            addMessage(botResponse, 'bot');
            userInput.value = '';
        }
    }

    sendButton.addEventListener('click', handleSend);
    userInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            handleSend();
        }
    });
});
