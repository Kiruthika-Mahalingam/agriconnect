import React, { useEffect, useRef } from 'react';
import './Chatbot.css';
import chaticon from '../assets/chat_icon.png'
import sendicon from '../assets/send_icon.png'

const Chatbot = () => {
    const chatBoxRef = useRef(null);
    const userInputRef = useRef(null);

    useEffect(() => {
        const chatBox = chatBoxRef.current;
        const userInput = userInputRef.current;
        const sendButton = document.getElementById('send-button');

        const responses = {
            'What is AgriConnects?': 'AgriConnects is a platform designed to connect farmers with resources, information, and each other to enhance agricultural productivity and sustainability.',
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
            chatBox.scrollTop = chatBox.scrollHeight; 
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

        return () => {
            sendButton.removeEventListener('click', handleSend);
            userInput.removeEventListener('keypress', handleSend);
        };
    }, []);

    return (
        <div className="chatbot">
        <div className="chat-container">
            <div className="chat-header">
                <h1>HI ! HOW CAN I <span>HELP YOU</span></h1>
                <div className="chat-icon">💬</div>
            </div>
            <div className="chat-box" ref={chatBoxRef}></div>
            <div className="input-container">
                <button className="icon-button"><img src={chaticon} alt="Chat Icon" /></button>
                <input type="text" id="user-input" ref={userInputRef} placeholder="Type a message..." />
                <button id="send-button" className="icon-button"><img src={sendicon} alt="Send Icon" /></button>
            </div>
        </div>
        </div>
    );
};

export default Chatbot;



