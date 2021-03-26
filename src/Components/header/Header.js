import React from 'react';

import './header.css';

const Header = () => {
  return (
    <div className="header">
      <a className="menu-item" href="/">
        Search
      </a>
      <a className="menu-item" href="/favorites">
        Favorites
      </a>
      </div>
  );
};

export default Header;
