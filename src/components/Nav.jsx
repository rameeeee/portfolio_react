import React, { useState } from 'react';

const Nav = () => {
  const [activeLink, setActiveLink] = useState('about');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="nav_wrap">
      <div className="nav_list">
          <a className={`nav_item about ${activeLink === 'about' ? 'on' : ''}`} href="#About" onClick={() => handleLinkClick('about')}>About</a>
          <a className={`nav_item work ${activeLink === 'work' ? 'on' : ''}`} href="#Work" onClick={() => handleLinkClick('work')}>Work Experience</a>
          <a className={`nav_item contact ${activeLink === 'contact' ? 'on' : ''}`} href="#Contact" onClick={() => handleLinkClick('contact')}>Contact</a>
      </div>
    </div>
  );
};

export default Nav;
