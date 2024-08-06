
import React from 'react';
import './Feed.css';
import photo4 from '../assets/photo4.png';

const Feed = () => {
    return (
        <div className='feed'>
            <header>
                <div className="search-container">
                    <input type="text" id="search-input" placeholder="Search..." />
                </div>
            </header>
            <main>
                <Gallery />
            </main>
        </div>
    );
};

const Gallery = () => {
    const images = [
        { type: 'video', src: '/images/video_1_f.mp4', alt: 'Video 1' },
        { type: 'image', src: photo4, alt: 'Image 2' },  // Imported image
        { type: 'image', src: '/images/photo2_f.png', alt: 'Image 3' },
        { type: 'image', src: '/images/p1_f.jpeg', alt: 'Image 4' },
        { type: 'image', src: '/images/p2_f.jpg', alt: 'Image 5' },
        { type: 'image', src: '/images/p9_f.jpeg', alt: 'Image 6' },
        { type: 'image', src: '/images/Water irrigation1.jpg', alt: 'Image 7' },
        { type: 'image', src: '/images/photo_1_f.png', alt: 'Image 8' },
        { type: 'video', src: '/images/video_2_f.mp4', alt: 'Video 2' },
        { type: 'image', src: '/images/p4_f.jpg', alt: 'Image 9' },
        { type: 'image', src: '/images/photo7_f.png', alt: 'Image 10' },
        { type: 'image', src: '/images/photo5_f.jpg', alt: 'Image 11' },
        { type: 'image', src: '/images/veg1_f.jpg', alt: 'Image 12' },
        { type: 'image', src: '/images/ps_f.jpeg', alt: 'Image 13' },
        { type: 'image', src: '/images/p12_f.jpg', alt: 'Image 14' },
        { type: 'image', src: '/images/p0_f.webp', alt: 'Image 15' },
        { type: 'image', src: '/images/p10_f.jpeg', alt: 'Image 16' }
    ];

    return (
        <div className="feed">
            <div className="gallery">
                {images.map((media, index) => (
                    <div className="item" key={index}>
                        {media.type === 'video' ? (
                            <video controls>
                                <source src={media.src} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <img src={media.src} alt={media.alt} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Feed;

