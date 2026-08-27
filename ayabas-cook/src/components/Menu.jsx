import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import './Menu.css';

const menuItems = [
  {
    id: 1,
    name: "Riz gras au poulet",
    description: "Délicieux riz gras accompagné de succulente viande de poulet.",
    price: "3 500 FCFA",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    id: 2,
    name: "Pâte rouge au poulet braisé",
    description: "Pâte rouge traditionnelle servie avec un poulet braisé parfaitement assaisonné.",
    price: "3 500 FCFA",
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    id: 3,
    name: "Piron aux brochettes d'escargot",
    description: "Le fameux piron béninois accompagné de savoureuses brochettes d'escargot.",
    price: "3 500 FCFA",
    image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4850?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    id: 4,
    name: "Chawarma",
    description: "Chawarma généreusement garni pour combler toutes vos petites faims.",
    price: "",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    id: 5,
    name: "Crêpes",
    description: "Crêpes douces et moelleuses, parfaites pour le dessert ou le goûter.",
    price: "",
    image: "https://images.unsplash.com/photo-1519676860045-814de5ce1381?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    id: 6,
    name: "Cakes",
    description: "Gâteaux faits maison avec amour, pour toutes vos envies sucrées.",
    price: "",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1ea9ce?auto=format&fit=crop&q=80&w=600&h=400",
  }
];

const Menu = () => {
  const handleOrder = (itemName, price) => {
    const message = `Bonjour Ayaba's Cook ! Je souhaite commander : ${itemName}${price ? ' à ' + price : ''}. Je suis prêt à payer via Mobile Money.`;
    window.open(`https://wa.me/22991571785?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="menu" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Notre Menu</span>
          <h2>Découvrez nos délices</h2>
          <p>Chaque plat est préparé avec des ingrédients frais et authentiques pour vous offrir un voyage gustatif au cœur de l'Afrique.</p>
        </div>

        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <motion.div 
              key={item.id}
              className="menu-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="menu-image-container">
                <img src={item.image} alt={item.name} className="menu-image" />
                {item.price && <div className="menu-price">{item.price}</div>}
              </div>
              <div className="menu-content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <button 
                  className="btn btn-primary w-full mt-4"
                  onClick={() => handleOrder(item.name, item.price)}
                >
                  <ShoppingBag size={18} /> Acheter via WhatsApp
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
