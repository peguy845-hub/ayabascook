import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Fifamè S.",
      role: "Cliente Fidèle",
      content: "Le meilleur Piron de la ville ! La livraison à Calavi a été super rapide et le repas était bien chaud. Je recommande à 100%.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98a?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      id: 2,
      name: "Mahougnon K.",
      role: "Amateur de bonne cuisine",
      content: "J'ai commandé le riz gras au poulet récemment et c'est une merveille. Exactement comme celui de ma mère !",
      rating: 5,
      image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      id: 3,
      name: "Sègbégnon C.",
      role: "Client Régulier",
      content: "Leurs chawarmas sont excellents, et j'adore le système de paiement par Mobile Money, tellement pratique !",
      rating: 4,
      image: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?auto=format&fit=crop&q=80&w=150&h=150"
    }
  ];

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Témoignages</span>
          <h2>Ce qu'ils disent de nous</h2>
          <p>La satisfaction de nos clients est notre plus grande fierté. Lisez leurs expériences avec <span translate="no">Ayaba's Cook</span>.</p>
        </div>

        <div className="testimonials-grid">
          {reviews.map((review, index) => (
            <motion.div 
              key={review.id}
              className="testimonial-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="stars">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="var(--color-primary)" color="var(--color-primary)" />
                ))}
              </div>
              <p className="testimonial-content">"{review.content}"</p>
              <div className="testimonial-author">
                <img src={review.image} alt={review.name} />
                <div>
                  <h4>{review.name}</h4>
                  <span>{review.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
