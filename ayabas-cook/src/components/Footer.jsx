import React from 'react';
import logoImage from '../assets/Logo.png';
import './Footer.css';
// Lucide-react doesn't have brand icons, so we'll use text or generic icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <a href="#" className="logo" style={{ display: 'block', marginBottom: '1rem' }}>
            <img src={logoImage} alt="Ayaba's Cook" style={{ height: '80px', width: 'auto' }} />
          </a>
          <p className="footer-desc">
            Des repas africains authentiques, cuisinés avec amour et livrés chez vous.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">Fb</a>
            <a href="#" aria-label="Instagram">Ig</a>
            <a href="#" aria-label="Twitter">Tw</a>
          </div>
        </div>

        <div className="footer-links-group">
          <h4>Liens Rapides</h4>
          <ul className="footer-links">
            <li><a href="#about">À Propos</a></li>
            <li><a href="#menu">Notre Menu</a></li>
            <li><a href="#delivery">Livraison</a></li>
            <li><a href="#testimonials">Témoignages</a></li>
          </ul>
        </div>

        <div className="footer-links-group">
          <h4>Légal</h4>
          <ul className="footer-links">
            <li><a href="#">Conditions Générales</a></li>
            <li><a href="#">Politique de Confidentialité</a></li>
            <li><a href="#">Mentions Légales</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} <span translate="no">Ayaba's Cook</span>. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
