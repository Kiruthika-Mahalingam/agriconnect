import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/popular">Popular</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
