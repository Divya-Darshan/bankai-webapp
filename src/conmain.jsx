// src/videoMain.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './maincont.css';
import Nav from './nav/nav'

function Contact() {
  return (
    <div className="contact-section" id="contact">
      <div className="contact-container">
        <h1>Contact Bankai Animation Tamil</h1>
        <p className="channel-desc">
          Bankai Animation Tamil is a hub for anime lovers — delivering high-quality AMVs, edits, and cinematic moments in Tamil. 
          For collabs, promotions, or inquiries, reach out through social platforms below.
        </p>

        <div className="social-links">
          <a href="https://www.instagram.com/bankai_animation_tamil?igsh=c294YjI3eWJyaTZj" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png" alt="Instagram" />
            <span>Instagram</span>
          </a>
          <a href="https://www.youtube.com/@BankaiAnimationTamil" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" />
            <span>YouTube</span>
          </a>
        </div>
      </div>
      <Nav/>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('cont')).render(
  <React.StrictMode>
    <Contact />
  </React.StrictMode>
);
