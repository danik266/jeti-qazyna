import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
    const items = [
        { type: "img", src: "/videos/вип.jpg", title: "VIP Караоке", size: "large" },
        { type: "video", src: "/videos/vip-karaoke.mp4", title: "VIP Зал Баян-Сулу", size: "small" },
        { type: "img", src: "/videos/основной зал.jpg", title: "Основной Зал", size: "small" },
        { type: "video", src: "/videos/atmosphere.mp4", title: "Атмосфера", size: "medium" },
        { type: "img", src: "/videos/юрты.jpg", title: "Юрты", size: "small" },
        { type: "video", src: "/videos/mangal.mp4", title: "Мангал", size: "small" },
        { type: "img", src: "/videos/тапчаны.jpg", title: "Топчаны", size: "medium" },
    ];

    return (
        <section id="gallery" className="gallery-premium">
            <div className="container">
                <div className="gallery-header">
                    <motion.div
                        className="gallery-title-wrap"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="premium-label">ГАЛЕРЕЯ</span>
                        <h2 className="premium-title">Наши Будни</h2>
                    </motion.div>
                </div>

                <div className="bento-grid">
                    {items.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className={`bento-item ${item.size}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.05 }}
                        >
                            <div className="bento-inner">
                                {item.type === "video" ? (
                                    <video autoPlay muted loop playsInline className="bento-media">
                                        <source src={item.src} type="video/mp4" />
                                    </video>
                                ) : (
                                    <img src={item.src} alt={item.title} className="bento-media" />
                                )}
                                <div className="bento-overlay">
                                    <span className="bento-title">{item.title}</span>
                                    <div className="bento-line"></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="gallery-footer"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <a href="https://www.instagram.com/jeti.qazyna.pvl/" target="_blank" rel="noopener noreferrer" className="insta-link">
                        <span>ЖДЕМ ВАС В INSTAGRAM</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Gallery;
