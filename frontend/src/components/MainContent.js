import React from 'react';

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="post">
        <img src="path/to/image.jpg" alt="Aptiv Ad" />
        <h2>Move Your Career</h2>
        <p>Taking on new challenges is part of your career journey at Aptiv...</p>
      </div>
      <div className="community">
        <h3>Popular Communities</h3>
        <ul>
          <li>r/DestinyTheGame</li>
          <li>r/anime</li>
          <li>r/destiny2</li>
          <li>r/FortNiteBR</li>
          <li>r/dndnext</li>
        </ul>
      </div>
    </main>
  );
};

export default MainContent;
