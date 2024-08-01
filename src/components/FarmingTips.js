// src/components/FarmingTips.js
import React, { useState } from 'react';
import './FarmingTips.css';
import './FarmingTips.css';

const farmingTechniques = [
    {
        title: "Crop Rotation",
        description: "Crop rotation is the practice of growing a series of different types of crops in the same area in sequential seasons.",
        imageUrl: "/images/crop-rotation.jpg",
        videoUrl: "https://www.example.com/crop-rotation-video"
    },
    {
        title: "Organic Farming",
        description: "Organic farming relies on techniques such as crop rotation, green manure, compost, and biological pest control.",
        imageUrl: "/images/organic-farming.jpg",
        videoUrl: "https://www.example.com/organic-farming-video"
    },
    {
        title: "Shifting Cultivation",
        description: "Shifting cultivation involves clearing a piece of land, farming it for a few years, and then moving on to a new area.",
        imageUrl: "/images/shifting-cultivation.jpg",
        videoUrl: "https://www.example.com/shifting-cultivation-video"
    },
    {
        title: "Plantation Farming",
        description: "Plantation farming is a type of commercial farming where crops are grown for profit, often in tropical regions.",
        imageUrl: "/images/plantation-farming.jpg",
        videoUrl: "https://www.example.com/plantation-farming-video"
    },
    {
        title:"Subsistence Farming",
        description:"Subsistence farming methods typically do not incorporate the use of fertilizers and high-yielding variety (HYV) seeds.",
        imageUrl:"/images/subsistence-farming.jpg"
    },
    {
        title:"WetLand Farming",
        description:"This type of farming is particularly suited for the monsoon season, relying on rainfall and also adaptable to well-irrigated regions. It primarily involves the cultivation of crops such as rice, sugarcane, and jute. ",
        imageUrl:"/images/WetLand-farming.jpg"
    }
];

const faqData = [
    {
        question: "What is crop rotation?",
        answer: "Crop rotation is the practice of growing a series of different types of crops in the same area in sequential seasons."
    },
    {
        question: "How does organic farming work?",
        answer: "Organic farming relies on techniques such as crop rotation, green manure, compost, and biological pest control."
    },
    {
        question: "What is shifting cultivation?",
        answer: "Shifting cultivation involves clearing a piece of land, farming it for a few years, and then moving on to a new area."
    },
    {
        question: "What is plantation farming?",
        answer: "Plantation farming is a type of commercial farming where crops are grown for profit, often in tropical regions."
    }
    // Add more FAQs as needed
];

const FarmingTips = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            <section id="farming-tips">
                <h2>Farming Tips and Techniques</h2>
                <div className="grid-container">
                    {farmingTechniques.map((technique, index) => (
                        <div key={index} className="grid-item">
                            <div className="technique-content">
                                <img src={technique.imageUrl} alt={technique.title} className="technique-image" />
                                <div className="text-content">
                                    <h3>{technique.title}</h3>
                                    <p>{technique.description}</p>
                                    <a href={technique.videoUrl} target="_blank" rel="noopener noreferrer">Watch Video</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="faqs">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-container">
                    {faqData.map((faq, index) => (
                        <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
                            <div className="faq-question-container">
                                <div className="faq-question">
                                    {faq.question}
                                </div>
                                <div className="faq-toggle" onClick={() => toggleAnswer(index)}>
                                    {openIndex === index ? '^' : 'v'}
                                </div>
                            </div>
                            {openIndex === index && (
                                <div className="faq-answer">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default FarmingTips;