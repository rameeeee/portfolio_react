// import React, { useState } from 'react';

// const Nav = () => {
//   const [activeLink, setActiveLink] = useState('about');

//   const handleLinkClick = (link) => {
//     setActiveLink(link);
//   };

//   return (
//     <div className="nav_wrap">
//       <div className="nav_list">
//           <a className={`nav_item ${activeLink === 'about' ? 'on' : ''}`} href="#About" onClick={() => handleLinkClick('about')}>About</a>
//           <a className={`nav_item ${activeLink === 'work' ? 'on' : ''}`} href="#Work" onClick={() => handleLinkClick('work')}>Work Experience</a>
//           <a className={`nav_item ${activeLink === 'contact' ? 'on' : ''}`} href="#Contact" onClick={() => handleLinkClick('contact')}>Contact</a>
//       </div>
//     </div>
//   );
// };

// export default Nav;



import React, { useState, useEffect } from 'react';

const Nav = () => {
  const [activeLink, setActiveLink] = useState('about');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('About');
      const workSection = document.getElementById('Work');
      const contactSection = document.getElementById('Contact');

      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollTop >= aboutSection.offsetTop) {
        setActiveLink('about');
      } else if (scrollTop >= workSection.offsetTop && scrollTop < contactSection.offsetTop) {
        setActiveLink('work');
      } else if (scrollTop >= contactSection.offsetTop + contactSection.clientHeight - windowHeight) {
        setActiveLink('contact');
      }

      console.log('About Section Top:', aboutSection.offsetTop);
      console.log('Work Section Top:', workSection.offsetTop);
      console.log('Contact Section Top:', contactSection.offsetTop);
      
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="nav_wrap">
      <div className="nav_list">
          <a className={`nav_item ${activeLink === 'about' ? 'on' : ''}`} href="#About" onClick={() => handleLinkClick('about')}>About</a>
          <a className={`nav_item ${activeLink === 'work' ? 'on' : ''}`} href="#Work" onClick={() => handleLinkClick('work')}>Work Experience</a>
          <a className={`nav_item ${activeLink === 'contact' ? 'on' : ''}`} href="#Contact" onClick={() => handleLinkClick('contact')}>Contact</a>
      </div>
    </div>
  );
};

export default Nav;
