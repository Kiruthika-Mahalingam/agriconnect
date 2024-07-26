// src/pages/Feed.js
import React, { useState } from 'react';
import './Feed.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Feed = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [posts, setPosts] = useState([
        { id: 1, content: 'First post!', author: 'John Doe' },
        { id: 2, content: 'Hello, world!', author: 'Jane Smith' },
        { id: 3, content: 'Just setting up my feed.', author: 'Alice Johnson' },
        // Add more posts here
    ]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredPosts = posts.filter(post => post.content.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="feed-container">
            <div className="search-bar">
                <input 
                    type="text" 
                    placeholder="Search posts..." 
                    value={searchTerm} 
                    onChange={handleSearch} 
                />
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
            </div>
            <div className="posts">
                {filteredPosts.length ? (
                    filteredPosts.map(post => (
                        <div key={post.id} className="post">
                            <h3>{post.author}</h3>
                            <p>{post.content}</p>
                        </div>
                    ))
                ) : (
                    <p>No posts found</p>
                )}
            </div>
        </div>
    );
};

export default Feed;
