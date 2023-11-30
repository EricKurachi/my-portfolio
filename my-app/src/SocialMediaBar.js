import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './SocialMediaBar.css'

import { Container } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'

const SocialMediaBar = () => {
  return (
    <div className="social-media-bar">
      <Container>
        <div className='single-col social-media-icons-white d-flex justify-content-evenly'>
          <a href="https://www.linkedin.com/in/eric-kurachi/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/EricKurachi" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.youtube.com/channel/UCLN0lEdo6TT61Jn9jTpzFpA" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </Container>

    </div>
  );
};

export default SocialMediaBar;