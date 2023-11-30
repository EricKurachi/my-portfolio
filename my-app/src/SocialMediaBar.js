import React from 'react';

const SocialMediaBar = () => {
  return (
    <div className="social-media-bar">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook">teste</i>
        
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
      </a>
      {/* Add more social media icons as needed */}
    </div>
  );
};

export default SocialMediaBar;