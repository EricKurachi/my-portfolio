import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projetos</Link></li>
        <li><Link to="/contact">Contato</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation;