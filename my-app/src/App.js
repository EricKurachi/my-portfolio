import React from 'react';
import PortfolioHeader from './PortfolioHeader';
import SocialMediaBar from './SocialMediaBar';

const App = () => {
  return (
    <div>
      <h1>Eric Kurachi</h1>
      <PortfolioHeader />
      {/* Other components/content of portfolio */}
      <h2>About</h2>
      <p>
        Software developer with 2 years of professional
        experience. Created and optimized web apps and
        automation solutions assisting around 70 R&D
        technicians and engineers. Developed several
        projects aimed at teaching programming and
        artificial intelligence, impacting hundreds of
        students.
      </p>
      <SocialMediaBar />
      © 2023 Eric Kurachi.
    </div>
  );
};

export default App;