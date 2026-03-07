import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Instagram, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const MapAndContact = () => {
    const { t } = useTranslation();

    return (
        <section id="contact" className="contact-premium">
            <div className="container">
                <div className="contact-wrap">
                    <motion.div
                        className="contact-info-premium"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="premium-label">{t('contact.label')}</span>
                        <h2 className="premium-title">{t('contact.title')}</h2>
                        <p className="contact-intro">
                            {t('contact.intro', 'Забронируйте столик или VIP-зал для вашего особого вечера. Мы позаботимся о каждой детали вашего отдыха.')}
                        </p>

                        <div className="contact-list-premium">
                            <div className="c-item-p">
                                <div className="c-icon-p"><MapPin size={20} /></div>
                                <div className="c-content-p">
                                    <span className="c-label-p">{t('contact.address')}</span>
                                    <span className="c-val-p">{t('contact.address_val')}</span>
                                </div>
                            </div>
                            <div className="c-item-p">
                                <div className="c-icon-p"><Phone size={20} /></div>
                                <div className="c-content-p">
                                    <span className="c-label-p">{t('contact.phone')}</span>
                                    <a href="tel:+77774344050" className="c-val-p">+7 (777) 434-40-50</a>
                                </div>
                            </div>
                            <div className="c-item-p">
                                <div className="c-icon-p"><Clock size={20} /></div>
                                <div className="c-content-p">
                                    <span className="c-label-p">{t('contact.hours')}</span>
                                    <span className="c-val-p">{t('contact.hours_val')}</span>
                                </div>
                            </div>
                        </div>

                        <div className="contact-actions-p">
                            <a href="https://wa.me/77774344050" target="_blank" rel="noopener noreferrer" className="btn-premium-wa">
                                <MessageCircle size={20} />
                                <span>{t('contact.btn_book', 'ЗАБРОНИРОВАТЬ')}</span>
                            </a>
                            <a href="https://www.instagram.com/jeti.qazyna.pvl/" target="_blank" rel="noopener noreferrer" className="btn-social-p">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="map-premium-wrapper"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <div className="map-glass">
                            <iframe
                                src="https://widgets.2gis.com/widget?type=firmsonmap&options=%7B%22pos%22%3A%7B%22lat%22%3A52.260655%2C%22lon%22%3A76.953839%2C%22zoom%22%3A16%7D%2C%22opt%22%3A%7B%22city%22%3A%22pavlodar%22%7D%2C%22org%22%3A%2270000001062280453%22%7D"
                                width="100%"
                                height="100%"
                                frameBorder="no"
                                title="2GIS Map Jeti Qazyna"
                                className="map-iframe"
                            ></iframe>
                        </div>
                        <div className="map-accent"></div>
                    </motion.div>
                </div>
            </div>

            <div className="contact-bg-text">{t('contact.bg_text')}</div>
        </section>
    );
};

export default MapAndContact;
