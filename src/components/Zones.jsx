import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Zones = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState(0);

    const zones = [
        {
            id: "vip",
            label: "01",
            title: t('zones.vip_title'),
            description: t('zones.vip_desc'),
            features: t('zones.vip_features', { returnObjects: true }),
            image: "/videos/вип.jpg"
        },
        {
            id: "yurts",
            label: "02",
            title: t('zones.yurts_title'),
            description: t('zones.yurts_desc'),
            features: t('zones.yurts_features', { returnObjects: true }),
            image: "/videos/юрты.jpg"
        },
        {
            id: "topchans",
            label: "03",
            title: t('zones.topchans_title'),
            description: t('zones.topchans_desc'),
            features: t('zones.topchans_features', { returnObjects: true }),
            image: "/videos/тапчаны.jpg"
        },
        {
            id: "main",
            label: "04",
            title: t('zones.main_title'),
            description: t('zones.main_desc'),
            features: t('zones.main_features', { returnObjects: true }),
            image: "/videos/основной зал.jpg"
        }
    ];

    return (
        <section id="zones" className="zones-premium">
            <div className="container">
                <div className="zones-header">
                    <motion.div
                        className="zones-title-wrap"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-label">{t('zones.label')}</span>
                        <h2 className="premium-title">{t('zones.title')}</h2>
                    </motion.div>

                    <nav className="zones-nav">
                        {zones.map((zone, index) => (
                            <button
                                key={zone.id}
                                className={`zones-nav-item ${activeTab === index ? 'active' : ''}`}
                                onClick={() => setActiveTab(index)}
                            >
                                <span className="nav-idx">{zone.label}</span>
                                <span className="nav-txt">{zone.title}</span>
                                {activeTab === index && (
                                    <motion.div className="active-line" layoutId="activeLine" />
                                )}
                            </button>
                        ))}
                    </nav>
                </div>

                <div className="zones-display">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="luxury-card"
                        >
                            <div className="luxury-card-info">
                                <motion.h3
                                    className="luxury-title"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    {zones[activeTab].title}
                                </motion.h3>
                                <motion.p
                                    className="luxury-desc"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    {zones[activeTab].description}
                                </motion.p>

                                <motion.ul
                                    className="luxury-features"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    {zones[activeTab].features.map((feature, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.5 + idx * 0.1 }}
                                        >
                                            <span className="feature-icon"></span>
                                            {feature}
                                        </motion.li>
                                    ))}
                                </motion.ul>

                                <motion.div
                                    className="luxury-actions"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <a href="#contact" className="btn btn-gold-outline">{t('zones.btn_price')}</a>
                                </motion.div>
                            </div>

                            <div className="luxury-card-media">
                                <motion.div
                                    className="luxury-img-wrapper"
                                    initial={{ scale: 1.1, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 1 }}
                                >
                                    <img
                                        src={zones[activeTab].image}
                                        alt={zones[activeTab].title}
                                        className="luxury-img"
                                    />
                                    {/* Background decorative text */}
                                    <div className="menu-bg-accent">{t('zones.bg_text')}</div>
                                    <div className="luxury-mask"></div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

        </section>
    );
};

export default Zones;
