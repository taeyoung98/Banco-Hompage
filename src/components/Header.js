import React, { useState, useEffect } from 'react';
import bancoLogo2 from '../assets/items/banco-logo2.png';
import './header.css';

const ScrollNavigation = () => {
  const [actionGolfTop, setActionGolfTop] = useState(0);
  const [bannerTop, setBannerTop] = useState(0);

  useEffect(() => {
    const actionGolfElement = document.querySelector('.main__action-golf');
    const bannerElement = document.querySelector('.main__banner');

    setActionGolfTop(actionGolfElement.offsetTop);
    setBannerTop(bannerElement.offsetTop);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const scrollToActionGolf = () => {
    window.scrollTo({ top: actionGolfTop, behavior: 'smooth' });
  };
  const scrollToBanner = () => {
    window.scrollTo({ top: bannerTop, behavior: 'smooth' });
  };

  return { scrollToTop, scrollToActionGolf, scrollToBanner };
};

const Header = () => {
  const {
    scrollToTop,
    scrollToActionGolf,
    scrollToBanner,
  } = ScrollNavigation();

  return (
    <header className="App-header">
      <div className="navigation">
        <div className="navigation__business">
          <span>
            <a onClick={scrollToActionGolf}>BUSINESS</a>
          </span>
        </div>
        <div className="navigation__logo">
          <a onClick={scrollToTop}>
            <img src={bancoLogo2} alt="header__logo" />
          </a>
        </div>
        <div className="navigation__banco">
          <span>
            <a onClick={scrollToBanner}>BANCO</a>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
