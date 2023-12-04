import React from 'react';
import PortfolioHeader from './PortfolioHeader';
import SocialMediaBar from './SocialMediaBar';

const App = () => {
  return (
    <div>
      <PortfolioHeader />
      {/* Other components/content of portfolio */}
      <SocialMediaBar />
      © 2023 Eric Kurachi.
    </div>
  );
};

export default App;