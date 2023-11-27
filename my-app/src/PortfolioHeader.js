import React, { useState, useEffect } from 'react';
import './PortfolioHeader.css';
import logo from './logo.png';

const PortfolioHeader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate some loading time (you can replace this with your actual loading logic)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 2000 milliseconds (2 seconds) as an example

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="portfolio-header">
      <div class="logo"> 
				<img src={logo} alt="Eric Kurachi's Logo"/> 
	    </div> 
      <h1 className={loading ? 'loading' : ''}>Em Construção</h1>
    </header>
  );
};

export default PortfolioHeader;
