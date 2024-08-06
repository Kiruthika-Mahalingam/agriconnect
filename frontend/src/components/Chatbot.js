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
            'What is Agriconnects?':' AgriConnects is a platform designed to connect farmers with resources, information, and each other to enhance agricultural productivity and sustainability.',

 'How can AgriConnects help me as a farmer?':' AgriConnects offers resources such as market information, weather forecasts, farming tips, and access to agricultural experts and community forums to help you improve your farming practices.',

'Is AgriConnects free to use?': 'Yes, AgriConnects offers free access to a range of basic resources and community features. Some premium features and services may require a subscription.',                                                                                                                                                                                                  
 'How do I sign up for AgriConnects?':' You can sign up by visiting our website and clicking on the Sign Up button. Fill in the required information, and youll be ready to start using AgriConnects.',
'Can I access AgriConnects on my mobile device?': 'Yes, AgriConnects is mobile-friendly and can be accessed via any smartphone or tablet with an internet connection. We also have a dedicated mobile app available for download.',
'What kind of information can I find on AgriConnects?':' AgriConnects provides information on a variety of topics including crop management, pest control, market prices, weather updates, sustainable farming practices, and more.',
 'How do I contact customer support for AgriConnects?': 'You can contact our customer support team through the Contact Us section on our website or by sending an email to support@agriconnects.com.',

'Can I share my own farming experiences on AgriConnects?':' Absolutely! You can share your experiences, tips, and success stories with the community through our forums and discussion groups.',

'What languages is AgriConnects available in?': 'Currently, AgriConnects is available in English, but we are working on adding support for more languages to better serve our global community.',

'How does AgriConnects ensure the accuracy of the information provided?':' AgriConnects collaborates with agricultural experts and relies on verified sources to provide accurate and up-to-date information. We continuously review and update our content to ensure its reliability.',
'Can I customize the type of information I receive on AgriConnects?': 'Yes, you can customize your preferences and interests in your profile settings to receive personalized information and updates relevant to your farming needs.',

'Are there any events or workshops hosted by AgriConnects?': 'Yes, AgriConnects hosts various events, webinars, and workshops to educate and connect farmers. You can find information about upcoming events in the Events section on our platform.',
'How does AgriConnects support sustainable farming?': 'AgriConnects promotes sustainable farming practices by providing information on eco-friendly techniques, resources for organic farming, and connecting farmers with sustainability experts.',

 'Can I access historical weather data on AgriConnects?': 'Yes, AgriConnects provides access to historical weather data to help you analyze past trends and make informed decisions for your farming activities.',

 'What is the community forum on AgriConnects?':' The community forum is a place where farmers can discuss various topics, ask questions, share advice, and support each other. It’s a great way to connect with fellow farmers.',

'How do I update my profile information on AgriConnects?': 'To update your profile information, log in to your account, go to the Profile section, and make the necessary changes. Don’t forget to save your updates.',

 'Can I get notifications for specific updates on AgriConnects?':' Yes, you can set your notification preferences in your account settings to receive alerts for specific updates such as market prices, weather changes, and new forum posts.',

'How secure is my data on AgriConnects?': 'AgriConnects takes data security seriously. We use advanced encryption and security measures to protect your personal information and ensure your data is safe.',

 'What types of crops and farming methods are covered on AgriConnects?': 'AgriConnects covers a wide range of crops and farming methods, including traditional, organic, and modern techniques. Our resources are designed to cater to diverse farming needs.',

'How do I get started with AgriConnects after signing up?':'After signing up, you can start by exploring our resources, joining community discussions, and setting up your profile to receive personalized recommendations.',

'What are the best practices for planting corn?': 'For planting corn, ensure you select a suitable variety for your region, prepare the soil with adequate nutrients, plant at the right depth and spacing, and provide consistent watering and pest control.',

'How do I prevent pests in my vegetable garden?':' To prevent pests, use integrated pest management techniques, such as crop rotation, natural predators, and organic pesticides. Regularly inspect your plants for early signs of pest infestation.',


'How can I get weather updates for my farm?': 'You can receive weather updates through the AgriConnects platform, which provides real-time weather forecasts and alerts specific to your location.',

'How does climate change affect farming?':' Climate change can affect farming by altering growing seasons, increasing the frequency of extreme weather events, and impacting water availability. Adaptation strategies include using drought-resistant crops and efficient water management practices',

'Where can I find current market prices for my crops?':' AgriConnects provides up-to-date market prices for various crops. You can access this information through our platform to make informed decisions about selling your produce.',

'How do I sell my produce through AgriConnects?':' To sell your produce, register on the AgriConnects platform, list your products, and connect with potential buyers. Our platform facilitates secure transactions and helps you reach a wider market.',


 'What is organic farming, and how can I start?':'Organic farming involves growing crops without synthetic pesticides or fertilizers. To start, focus on soil health, use organic inputs, and practice crop rotation and composting.',

'What are the benefits of using drip irrigation?':' Drip irrigation conserves water by delivering it directly to the plant roots, reduces weed growth, and can improve crop yield and quality.',

'How can I connect with other farmers on AgriConnects?':' You can connect with other farmers through our community forums, discussion groups, and events. Share experiences, ask questions, and collaborate on projects.',

 'Where can I find expert advice on specific agricultural issues?':'AgriConnects provides access to agricultural experts who can offer advice on various topics. You can ask questions through our platform and receive personalized guidance.',


'What are some sustainable farming practices?':' Sustainable farming practices include crop rotation, conservation tillage, cover cropping, agroforestry, and using renewable energy sources. These practices help maintain soil health, reduce environmental impact, and ensure long-term productivity.',

 'How can I reduce the environmental impact of my farm?':'Reduce your farms environmental impact by minimizing chemical use, implementing efficient water management, preserving natural habitats, and adopting conservation practices.',

'Are there any government programs available for farmers?':'Yes, various government programs offer financial assistance, training, and resources for farmers. AgriConnects provides information on these programs and how to apply for them.',

'How can NGOs help me improve my farming practices?':'NGOs can provide training, resources, and support for adopting sustainable farming practices, improving productivity, and accessing markets.',


'What should I do if I encounter a new pest or disease on my farm?': 'If you encounter a new pest or disease, document its appearance, take pictures, and seek advice from agricultural experts through AgriConnects. Early identification and treatment are crucial.',

' How can I keep up with the latest agricultural research and trends?':'Stay updated with the latest agricultural research and trends by following AgriConnects’ news section, subscribing to newsletters, and participating in webinars and training sessions offered through our platform',
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
                <h1>HI ! HOW CAN I <span className='span'>HELP YOU</span></h1>
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

// import React, { useEffect, useRef } from 'react';
// import './Chatbot.css';
// import chaticon from '../assets/chat_icon.png';
// import sendicon from '../assets/send_icon.png';

// const Chatbot = () => {
//     const chatBoxRef = useRef(null);
//     const userInputRef = useRef(null);

//     useEffect(() => {
//         const chatBox = chatBoxRef.current;
//         const userInput = userInputRef.current;
//         const sendButton = document.querySelector('.icon-button');

//         const responses = {
//             'what is agricconnects?': 'AgriConnects is a platform designed to connect farmers with resources, information, and each other to enhance agricultural productivity and sustainability.',
//             'how can agricconnects help me as a farmer?': 'AgriConnects offers resources such as market information, weather forecasts, farming tips, and access to agricultural experts and community forums to help you improve your farming practices.',
//             'is agricconnects free to use?': 'Yes, AgriConnects offers free access to a range of basic resources and community features. Some premium features and services may require a subscription.',
//             'how do i sign up for agricconnects?': 'You can sign up by visiting our website and clicking on the Sign Up button. Fill in the required information, and you’ll be ready to start using AgriConnects.',
//             'can i access agricconnects on my mobile device?': 'Yes, AgriConnects is mobile-friendly and can be accessed via any smartphone or tablet with an internet connection. We also have a dedicated mobile app available for download.',
//             'what kind of information can i find on agricconnects?': 'AgriConnects provides information on a variety of topics including crop management, pest control, market prices, weather updates, sustainable farming practices, and more.',
//             'how do i contact customer support for agricconnects?': 'You can contact our customer support team through the Contact Us section on our website or by sending an email to support@agriconnects.com.',
//             'can i share my own farming experiences on agricconnects?': 'Absolutely! You can share your experiences, tips, and success stories with the community through our forums and discussion groups.',
//             'what languages is agricconnects available in?': 'Currently, AgriConnects is available in English, but we are working on adding support for more languages to better serve our global community.',
//             'how does agricconnects ensure the accuracy of the information provided?': 'AgriConnects collaborates with agricultural experts and relies on verified sources to provide accurate and up-to-date information. We continuously review and update our content to ensure its reliability.',
//             'can i customize the type of information i receive on agricconnects?': 'Yes, you can customize your preferences and interests in your profile settings to receive personalized information and updates relevant to your farming needs.',
//             'are there any events or workshops hosted by agricconnects?': 'Yes, AgriConnects hosts various events, webinars, and workshops to educate and connect farmers. You can find information about upcoming events in the Events section on our platform.',
//             'how does agricconnects support sustainable farming?': 'AgriConnects promotes sustainable farming practices by providing information on eco-friendly techniques, resources for organic farming, and connecting farmers with sustainability experts.',
//             'can i access historical weather data on agricconnects?': 'Yes, AgriConnects provides access to historical weather data to help you analyze past trends and make informed decisions for your farming activities.',
//             'what is the community forum on agricconnects?': 'The community forum is a place where farmers can discuss various topics, ask questions, share advice, and support each other. It’s a great way to connect with fellow farmers.',
//             'how do i update my profile information on agricconnects?': 'To update your profile information, log in to your account, go to the Profile section, and make the necessary changes. Don’t forget to save your updates.',
//             'can i get notifications for specific updates on agricconnects?': 'Yes, you can set your notification preferences in your account settings to receive alerts for specific updates such as market prices, weather changes, and new forum posts.',
//             'how secure is my data on agricconnects?': 'AgriConnects takes data security seriously. We use advanced encryption and security measures to protect your personal information and ensure your data is safe.',
//             'what types of crops and farming methods are covered on agricconnects?': 'AgriConnects covers a wide range of crops and farming methods, including traditional, organic, and modern techniques. Our resources are designed to cater to diverse farming needs.',
//             'how do i get started with agricconnects after signing up?': 'After signing up, you can start by exploring our resources, joining community discussions, and setting up your profile to receive personalized recommendations.',
//             'what are the best practices for planting corn?': 'For planting corn, ensure you select a suitable variety for your region, prepare the soil with adequate nutrients, plant at the right depth and spacing, and provide consistent watering and pest control.',
//             'how do i prevent pests in my vegetable garden?': 'To prevent pests, use integrated pest management techniques, such as crop rotation, natural predators, and organic pesticides. Regularly inspect your plants for early signs of pest infestation.',
//             'how can i get weather updates for my farm?': 'You can receive weather updates through the AgriConnects platform, which provides real-time weather forecasts and alerts specific to your location.',
//             'how does climate change affect farming?': 'Climate change can affect farming by altering growing seasons, increasing the frequency of extreme weather events, and impacting water availability. Adaptation strategies include using drought-resistant crops and efficient water management practices.',
//             'where can i find current market prices for my crops?': 'AgriConnects provides up-to-date market prices for various crops. You can access this information through our platform to make informed decisions about selling your produce.',
//             'how do i sell my produce through agricconnects?': 'To sell your produce, register on the AgriConnects platform, list your products, and connect with potential buyers. Our platform facilitates secure transactions and helps you reach a wider market.',
//             'what is organic farming, and how can i start?': 'Organic farming involves growing crops without synthetic pesticides or fertilizers. To start, focus on soil health, use organic inputs, and practice crop rotation and composting.',
//             'what are the benefits of using drip irrigation?': 'Drip irrigation conserves water by delivering it directly to the plant roots, reduces weed growth, and can improve crop yield and quality.',
//             'how can i connect with other farmers on agricconnects?': 'You can connect with other farmers through our community forums, discussion groups, and events. Share experiences, ask questions, and collaborate on projects.',
//             'where can i find expert advice on specific agricultural issues?': 'AgriConnects provides access to agricultural experts who can offer advice on various topics. You can ask questions through our platform and receive personalized guidance.',
//             'what are some sustainable farming practices?': 'Sustainable farming practices include crop rotation, conservation tillage, cover cropping, agroforestry, and using renewable energy sources. These practices help maintain soil health, reduce environmental impact, and ensure long-term productivity.',
//             'how can i reduce the environmental impact of my farm?': 'Reduce your farm’s environmental impact by minimizing chemical use, implementing efficient water management, preserving natural habitats, and adopting conservation practices.',
//             'are there any government programs available for farmers?': 'Yes, various government programs offer financial assistance, training, and resources for farmers. AgriConnects provides information on these programs and how to apply for them.',
//             'how can ngos help me improve my farming practices?': 'NGOs can provide training, resources, and support for adopting sustainable farming practices, improving productivity, and accessing markets.',
//             'what should i do if i encounter a new pest or disease on my farm?': 'If you encounter a new pest or disease, document its appearance, take pictures, and seek advice from agricultural experts through AgriConnects. Early identification and treatment are crucial.',
//             'how can i keep up with the latest agricultural research and trends?': 'Stay updated with the latest agricultural research and trends by following AgriConnects’ news section, subscribing to newsletters, and participating in webinars and training sessions offered through our platform.',
//         };

//         function addMessage(message, sender) {
//             const div = document.createElement('div');
//             div.className = `message ${sender}`;
//             div.textContent = message;
//             chatBox.appendChild(div);
//             chatBox.scrollTop = chatBox.scrollHeight; 
//         }

//         function getResponse(userMessage) {
//             const lowerCaseMessage = userMessage.trim().toLowerCase();
//             return responses[lowerCaseMessage] || 'Sorry, I don\'t understand that.';
//         }

//         function handleSend() {
//             const userMessage = userInput.value;
//             if (userMessage.trim() === '') return;
//             addMessage(userMessage, 'user');
//             const response = getResponse(userMessage);
//             setTimeout(() => addMessage(response, 'bot'), 500);
//             userInput.value = '';
//         }

//         sendButton.addEventListener('click', handleSend);
//         userInput.addEventListener('keypress', (e) => {
//             if (e.key === 'Enter') {
//                 e.preventDefault();
//                 handleSend();
//             }
//         });

//         return () => {
//             sendButton.removeEventListener('click', handleSend);
//             userInput.removeEventListener('keypress', handleSend);
//         };
//     }, []);

//     return (
//         <div className="chatbot">
//             <div className="chat-container">
//                 <div className="chat-header">
//                     <h1>Chatbot</h1>
//                     <div className="chat-icon">
//                         <img src={chaticon} alt="Chat Icon" />
//                     </div>
//                 </div>
//                 <div className="chat-box" ref={chatBoxRef}></div>
//                 <div className="input-container">
//                     <input
//                         type="text"
//                         id="user-input"
//                         ref={userInputRef}
//                         placeholder="Type your message..."
//                     />
//                     <button className="icon-button">
//                         <img src={sendicon} alt="Send" />
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Chatbot;
