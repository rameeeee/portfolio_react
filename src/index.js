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

