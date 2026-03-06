import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const videoY = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
    const brightness = useTransform(scrollYProgress, [0, 1], [1, 0.4]);
    const brightnessTemplate = useMotionTemplate`brightness(${brightness})`;


    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.5
            }
        }
    };

    const letterVariants = {
        hidden: { y: 100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section id="hero" className="hero-section" ref={containerRef}>
            <motion.div
                className="hero-video-wrapper"
                style={{ y: videoY }}
            >
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="hero-video"
                >
                    <source src="/videos/main.mp4" type="video/mp4" />
                </video>
                <div className="hero-overlay"></div>
            </motion.div>

            <div className="container hero-content">
                <motion.div
                    style={{ y, opacity, scale, filter: brightnessTemplate }}
                    className="hero-text-box"
                >
                    {/* Removed EST Tag */}

                    <motion.h1
                        className="hero-title-reveal"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {["JETI", "QAZYNA"].map((word, wIndex) => (
                            <div key={wIndex} className="title-word">
                                {word.split("").map((char, cIndex) => (
                                    <motion.span
                                        key={`${wIndex}-${cIndex}`}
                                        variants={letterVariants}
                                        style={{ display: 'inline-block' }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </div>
                        ))}
                    </motion.h1>

                    <motion.p
                        className="hero-description-premium"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.5 }}
                    >
                        <span className="gold-italic">Қазақ мәдениетінің жұпар иісі</span> —
                        оазис гостеприимства и изысканной кухни в центре Павлодара.
                    </motion.p>

                    <motion.div
                        className="hero-actions-new"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.8 }}
                    >
                        <a href="#atmosphere" className="btn btn-primary-glow">ОТКРЫТЬ АТМОСФЕРУ</a>
                        <a href="#zones" className="btn btn-minimal">НАШИ ЗАЛЫ</a>
                    </motion.div>
                </motion.div>
            </div>

        </section>
    );
};

export default Hero;
