import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import chefImage from '../assets/ayabas_chef.jpg';
import './About.css';

const About = () => {
  const features = [
    "Recettes traditionnelles authentiques",
    "Ingrédients locaux et frais",
    "Préparation hygiénique et soignée",
    "Chefs passionnés et expérimentés"
  ];

  return (
    <section id="about" className="section">
      <div className="container about-container">
        <motion.div 
          className="about-image-wrapper"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src={chefImage} 
            alt="Cuisine d'Ayaba" 
            className="about-image"
          />
          <div className="experience-badge">
            <span className="years">10+</span>
            <span className="text">Années<br/>d'expérience</span>
          </div>
        </motion.div>

        <motion.div 
          className="about-content"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="subtitle">À Propos de Nous</span>
          <h2>L'art culinaire africain, <br/> une affaire de passion.</h2>
          <p className="about-description">
            Chez Ayaba's Cook, nous croyons que la nourriture est le reflet de l'âme. 
            Notre mission est de vous faire voyager à travers le continent africain avec des plats riches en histoire, en couleurs et en saveurs.
          </p>
          <ul className="features-list">
            {features.map((feature, index) => (
              <li key={index}>
                <CheckCircle2 className="text-primary" size={20} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
