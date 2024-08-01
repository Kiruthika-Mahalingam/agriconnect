import React from 'react';
import './SuccessStories.css';

const SuccessStories = () => {
    const stories = [
        { link: "story1.html", imgSrc: "/images/farmer1.jpg", alt: "Person 1", name: "Name 1", heading: "Article Heading 1" },
        { link: "story2.html", imgSrc: "/images/farmer2.jfif", alt: "Person 2", name: "Name 2", heading: "Article Heading 2" },
        { link: "story3.html", imgSrc: "/images/farmer3.jfif", alt: "Person 3", name: "Name 3", heading: "Article Heading 3" },
        { link: "story4.html", imgSrc: "/images/farmer4.jpg", alt: "Person 4", name: "Name 4", heading: "Article Heading 4" },
        { link: "story5.html", imgSrc: "/images/farmer2.jfif", alt: "Person 5", name: "Name 5", heading: "Article Heading 5" },
        { link: "story6.html", imgSrc: "/images/farmer1.jpg", alt: "Person 6", name: "Name 6", heading: "Article Heading 6" },
        { link: "story7.html", imgSrc: "/images/farmer3.jfif", alt: "Person 7", name: "Name 7", heading: "Article Heading 7" },
        { link: "story8.html", imgSrc: "/images/farmer4.jpg", alt: "Person 8", name: "Name 8", heading: "Article Heading 8" }
    ];

    return (
        <div className='ss'>
            <header>
                <div className="parallax">
                    <div className="header-text">Success Stories</div>
                </div>
            </header>
            <main>
                <div className="stories">
                    {stories.map((story, index) => (
                        <div className="story" key={index}>
                            <a href={story.link}>
                                <img src={story.imgSrc} alt={story.alt} />
                            </a>
                            <p>{story.name}</p>
                            <h3>{story.heading}</h3>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default SuccessStories;

