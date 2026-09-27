import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`section-container ${styles.container}`}>
        
        <div className={styles.topSection}>
          <div className={styles.brandCol}>
            <div className={styles.brandHeader}>
              <img 
                src="/images/alpinenestlogo.webp" 
                alt="Alpine Nest Logo" 
                className={styles.footerLogoImg} 
              />
              <span className={styles.logo}>ALPINE NEST</span>
            </div>
            <p className={styles.description}>
              Where Comfort Meets Class. Dibrugarh's first capsule-themed luxury homestay, offering premium 1RK, 1BHK, and 2BHK accommodations in Amolapatty.
            </p>
          </div>
          
          <div className={styles.linksGrid}>
            <div className={styles.linkGroup}>
              <h4>EXPLORE</h4>
              <a href="/">Home</a>
              <a href="/#rooms">Rooms</a>
              <a href="/#amenities">Amenities</a>
              <a href="/#gallery">Gallery</a>
              <a href="/#rules">House Rules</a>
              <a href="/#location">Location</a>
            </div>
            
            <div className={styles.linkGroup}>
              <h4>COMPANY</h4>
              <a href="/#about">About Alpine Nest</a>
              <a href="/#contact">Contact Host</a>
              <a href="/rooms">All Suites</a>
              <a href="/#faq">FAQs</a>
            </div>
            
            <div className={styles.linkGroup}>
              <h4>TALK TO US</h4>
              <a href="tel:+918486627950">+91 84866 27950</a>
              <a href="tel:+919678784771">+91 96787 84771</a>
              <a href="https://wa.me/918486627950" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
              <a href="https://www.instagram.com/alpinenest_homestay_dibrugarh/" target="_blank" rel="noopener noreferrer">@alpinenest_homestay_dibrugarh</a>
            </div>
          </div>
        </div>
        
        <div className={styles.bottomSection}>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} Alpine Nest. All rights reserved.
          </div>
          <div className={styles.location}>
            <div>Alpine Nest</div>
            <div>Dibrugarh, Amolapatty</div>
          </div>
        </div>
        
      </div>
      
      {/* Decorative Background Element */}
      <div className={styles.decorativeBg}>AN</div>
    </footer>
  );
};

export default Footer;
