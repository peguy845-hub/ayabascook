import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    commande: '',
    emplacement: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Bonjour Ayaba's Cook ! Je suis ${formData.prenom} ${formData.nom}.\nJe souhaite commander : ${formData.commande}.\nMon adresse de livraison est : ${formData.emplacement}.\nJe vais procéder au paiement via Mobile Money.`;
    window.open(`https://wa.me/22991571785?text=${encodeURIComponent(message)}`, '_blank');
    setFormData({ nom: '', prenom: '', commande: '', emplacement: '' });
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="container contact-container">
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="subtitle">Passez Commande</span>
          <h2>Prêt à savourer ?</h2>
          <p>Remplissez le formulaire ci-contre pour passer votre commande via WhatsApp. Vous pourrez ensuite payer facilement par Mobile Money au +229 91 57 17 85.</p>
          
          <div className="contact-details">
            <div className="contact-item">
              <Phone className="text-primary" size={24} />
              <div>
                <strong>Téléphone / WhatsApp (Mobile Money)</strong>
                <span><a href="https://wa.me/22991571785" target="_blank" rel="noreferrer" style={{color: 'inherit', textDecoration: 'underline'}}>+229 91 57 17 85</a></span>
              </div>
            </div>
            <div className="contact-item">
              <Mail className="text-primary" size={24} />
              <div>
                <strong>Email</strong>
                <span>commande@ayabascook.com</span>
              </div>
            </div>
            <div className="contact-item">
              <MapPin className="text-primary" size={24} />
              <div>
                <strong>Restaurant</strong>
                <span>Abomey Calavi, Bénin</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="contact-form-wrapper"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="prenom">Prénom</label>
                <input 
                  type="text" 
                  id="prenom" 
                  name="prenom"
                  placeholder="Votre prénom" 
                  required
                  value={formData.prenom}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="nom">Nom</label>
                <input 
                  type="text" 
                  id="nom" 
                  name="nom"
                  placeholder="Votre nom" 
                  required
                  value={formData.nom}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="commande">Que souhaitez-vous commander ?</label>
              <textarea 
                id="commande" 
                name="commande"
                placeholder="Ex: 2 Poulet Yassa, 1 Jus de Bissap..." 
                rows="3" 
                required
                value={formData.commande}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="emplacement">Emplacement (Adresse de livraison)</label>
              <input 
                type="text" 
                id="emplacement" 
                name="emplacement"
                placeholder="Quartier, rue, repère..." 
                required
                value={formData.emplacement}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary w-full submit-btn">
              Confirmer la commande <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
