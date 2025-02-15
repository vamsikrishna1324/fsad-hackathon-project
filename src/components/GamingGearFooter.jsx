import React from 'react';
import styles from '../styles/GamingGearFooter.module.css';
import { FaInstagram, FaFacebook, FaTwitter, FaTwitch, FaYoutube, FaDiscord } from 'react-icons/fa';

const GamingGearFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.appLinks}>
          <img src="/GamingGear/appstore.png" alt="Download on the App Store" />
          <img src="/GamingGear/googleplay.png" alt="Get it on Google Play" />
        </div>
        <div className={styles.socialIcons}>
          <FaInstagram />
          <FaFacebook />
          <FaTwitter />
          <FaTwitch />
          <FaYoutube />
          <FaDiscord />
        </div>
      </div>

      <div className={styles.paymentSection}>
        <p>Guaranteed safe 100% secured payment</p>
        <div className={styles.paymentIcons}>
          <img src="/GamingGear/mada.png" alt="Mada" />
          <img src="/GamingGear/applepay.png" alt="Apple Pay" />
          <img src="/GamingGear/stcpay.png" alt="STC Pay" />
          <img src="/GamingGear/visa.png" alt="Visa" />
          <img src="/GamingGear/mastercard.png" alt="MasterCard" />
          <img src="/GamingGear/amex.png" alt="American Express" />
          <img src="/GamingGear/ssl.png" alt="SSL Secure Payment" />
        </div>
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.links}>
          <div>
            <h3>About Gaming Gear</h3>
            <ul>
              <li>About</li>
              <li>Contact</li>
              <li>Featured Products</li>
              <li>Community</li>
              <li>Jobs</li>
            </ul>
          </div>
          <div>
            <h3>Business & Organizer Services</h3>
            <ul>
              <li>Partnerships</li>
              <li>Advertising</li>
              <li>Blog</li>
              <li>Invest in Gaming Gear</li>
            </ul>
          </div>
          <div>
            <h3>Legal</h3>
            <ul>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        © Gaming Gear 2025 All Rights Reserved.
      </div>
    </footer>
  );
};

export default GamingGearFooter;