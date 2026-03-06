import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const Atmosphere = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 0]); // Stabilize media
    const scrollUpY = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
    const scrollUpOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 1, 0]);

    return (
        <section id="atmosphere" className="atmosphere-premium" ref={sectionRef}>
            {/* Scroll Accent Badge */}
            <motion.div
                className="atm-scroll-bump"
                style={{
                    opacity: scrollUpOpacity,
                    left: '50%',
                    x: '-50%'
                }}
                initial={{ y: 0, opacity: 0 }}
                whileInView={{ y: -60, opacity: 1 }} // y: -60 matches its height
                transition={{ duration: 1, delay: 5, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="bump-curve">
                    <motion.div
                        animate={{ y: [4, -4, 4] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ChevronUp size={32} color="var(--color-gold)" />
                    </motion.div>
                </div>
            </motion.div>

            <div className="container">
                <div className="atmosphere-wrap">
                    {/* Floating Info Card */}
                    <motion.div
                        className="atm-info-card"
                        style={{ y: y1 }}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="atm-label">ИСТОРИЯ</span>
                        <h2 className="atm-title">Жеті Қазына</h2>
                        <p className="atm-desc">
                            Оазис казахского гостеприимства в самом сердце Павлодара.
                            Мы создали пространство, где вековые традиции встречаются с современным комфортом.
                        </p>

                        <div className="atm-stats">
                            <div className="atm-stat">
                                <span className="stat-val">04</span>
                                <span className="stat-txt">VIP ЗАЛОВ</span>
                            </div>
                            <div className="atm-stat">
                                <span className="stat-val">150</span>
                                <span className="stat-txt">МЕСТ</span>
                            </div>
                        </div>

                        <div className="atm-bottom-text">
                            <p>Интерьер, вдохновленный сокровищами степи. Каждый орнамент, каждая деталь рассказывает свою историю.</p>
                        </div>
                    </motion.div>

                    {/* Main Image/Video Container with Parallax */}
                    <motion.div
                        className="atm-media-container"
                        style={{ y: y2 }}
                    >
                        <div className="atm-video-box">
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="atm-video-element"
                            >
                                <source src="/videos/atmosphere.mp4" type="video/mp4" />
                            </video>
                            <div className="atm-video-overlay"></div>
                        </div>

                        {/* Decorative floating element */}
                        <motion.div
                            className="atm-floating-accent"
                            animate={{
                                y: [0, -20, 0],
                                rotate: [0, 5, 0]
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <div className="accent-inner">
                                <span>ТРАДИЦИИ</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Background large decorative text */}
            <div className="atm-bg-text">МҰРА</div>
        </section>
    );
};

export default Atmosphere;
