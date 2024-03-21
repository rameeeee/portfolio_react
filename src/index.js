import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/scss/style.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const handleScroll = () => {
  const items = document.querySelectorAll('.move_up');
  items.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top - 100 < window.innerHeight && rect.bottom >= 0 && !item.classList.contains('on')) {
      item.classList.add('on'); 
    } 
  });
};

window.addEventListener('scroll', handleScroll);


document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("scroll", function() {
    const aboutSection = document.getElementById('About');
    const workSection = document.getElementById('Work');
    const contactSection = document.getElementById('Contact');

    const aboutOffsetTop = aboutSection.getBoundingClientRect().top + window.pageYOffset;
    const workOffsetTop = workSection.getBoundingClientRect().top + window.pageYOffset;
    const contactOffsetTop = contactSection.getBoundingClientRect().top + window.pageYOffset;

    const navItems = document.querySelectorAll('.nav_item');
    navItems.forEach(item => {
      item.classList.remove('on');
    });

    if (window.scrollY < workOffsetTop) {
      document.querySelector('.nav_item.about').classList.add('on');
    } else if (window.scrollY >= workOffsetTop && window.scrollY < contactOffsetTop && window.innerHeight + window.scrollY < document.body.offsetHeight) {
      document.querySelector('.nav_item.work').classList.add('on');
    } else if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      document.querySelector('.nav_item.contact').classList.add('on');
    } else {
      document.querySelector('.nav_item.contact').classList.remove('on');
    }
    
  });
});
