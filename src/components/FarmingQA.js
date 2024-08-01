// src/components/FarmingQA.js
import React, { useState } from 'react';
import './FarmingQA.css';

const faqs = [
    {
        question: "What is crop rotation?",
        answer: "Crop rotation is the practice of growing different types of crops in the same area in sequential seasons to improve soil health and reduce pests and diseases."
    },
    {
        question: "How does organic farming work?",
        answer: "Organic farming relies on natural processes and inputs, such as compost, green manure, and biological pest control, rather than synthetic chemicals."
    },
    {
        question: "What are the benefits of cover crops?",
        answer: "Cover crops help prevent soil erosion, improve soil fertility, and manage water, pests, and diseases in sustainable farming systems."
    },
    {
        question: "How can I improve soil fertility?",
        answer: "Soil fertility can be improved by adding organic matter like compost, practicing crop rotation, and using green manure."
    },
    // {
    //     question: "What are some methods of pest control in organic farming?",
    //     answer: "Organic farming uses biological pest control, crop rotation, polyculture, and natural pesticides to manage pests."
    // }
    // Add more FAQs as needed
];

const FarmingQA = () => {
    const [flipped, setFlipped] = useState(Array(faqs.length).fill(false));

    const handleFlip = index => {
        const newFlipped = [...flipped];
        newFlipped[index] = !newFlipped[index];
        setFlipped(newFlipped);
    };

    return (
        <section id="farming-qa">
            <h2>Frequently Asked Questions</h2>
            <div className="flashcards">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`flashcard ${flipped[index] ? 'flipped' : ''}`}
                        onClick={() => handleFlip(index)}
                    >
                        <div className="front">
                            <h3>Q: {faq.question}</h3>
                        </div>
                        <div className="back">
                            <p>A: {faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FarmingQA;