import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Clock, CreditCard, ShieldCheck } from 'lucide-react';
import './Delivery.css';

const Delivery = () => {
  const features = [
    {
      icon: <Truck size={32} />,
      title: "Livraison Express",
      description: "Votre commande arrive chaude et prête à être dégustée en moins de 45 minutes."
    },
    {
      icon: <CreditCard size={32} />,
      title: "Paiement Sécurisé",
      description: "Payez en ligne en toute sécurité via Mobile Money ou Carte Bancaire."
    },
    {
      icon: <Clock size={32} />,
      title: "Commandes 7j/7",
      description: "Nous sommes ouverts tous les jours pour satisfaire vos envies à tout moment."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Qualité Garantie",
      description: "Emballage hermétique pour conserver toute la saveur et la fraîcheur."
    }
  ];

  return (
    <section id="delivery" className="section">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Nos Services</span>
          <h2>Commandez, nous gérons le reste</h2>
          <p>Profitez de notre service de livraison rapide et fiable. Ayaba's Cook s'assure que votre repas arrive dans les meilleures conditions.</p>
        </div>

        <div className="delivery-grid">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="delivery-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="delivery-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Delivery;
