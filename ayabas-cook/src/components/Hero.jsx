import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import './Hero.css';
import heroImg from '../assets/hero.jpg'; // We copied this earlier

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="hero-badge">
              <Star size={16} className="text-primary" />
              <span>Cuisine Africaine Authentique</span>
            </div>
            <h1 className="hero-title">
              L'essence de l'Afrique,<br />
              <span>livrée chez vous.</span>
            </h1>
            <p className="hero-subtitle">
              Découvrez des saveurs vibrantes et des plats préparés avec passion. 
              Ayaba's Cook vous offre une expérience culinaire inoubliable, de la commande à la première bouchée.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                Commander Maintenant <ArrowRight size={18} />
              </a>
              <a href="#menu" className="btn btn-secondary">
                Découvrir le Menu
              </a>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero-image-inner">
            <img src={heroImg} alt="Plats africains délicieux" className="hero-image" />
            
            {/* Floating Element */}
            <motion.div 
              className="floating-card"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <div className="card-icon">🚀</div>
              <div className="card-text">
                <strong>Livraison Rapide</strong>
                <span>Commandez, savourez !</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
