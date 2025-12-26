import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './PortfolioSwitcher.scss';

const PortfolioSwitcher: React.FC = () => {
  const location = useLocation();
  const isGameActive = location.pathname.includes('/my-portfolio/game');
  const isWebActive = location.pathname.includes('/my-portfolio/web');

  if (!isGameActive && !isWebActive) return null;

  return (
    <div className="portfolio-switcher">
      <Link
        to="/my-portfolio/game"
        className={`switcher-btn ${isGameActive ? 'active' : ''}`}
      >
        Game Dev
      </Link>
      <Link
        to="/my-portfolio/web"
        className={`switcher-btn ${isWebActive ? 'active' : ''}`}
      >
        Web Dev
      </Link>
    </div>
  );
};

export default PortfolioSwitcher;
