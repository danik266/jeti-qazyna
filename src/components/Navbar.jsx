import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Instagram } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'О нас', href: '#atmosphere' },
        { name: 'Залы', href: '#zones' },
        { name: 'Меню', href: '#menu' },
        { name: 'Галерея', href: '#gallery' },
        { name: 'Контакты', href: '#contact' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`navbar ${scrolled ? 'scrolled' : ''}`}
            >
                <div className="container nav-container">
                    <a href="#" className="logo">
                        <img src="/videos/logo.png" alt="Jeti Qazyna Logo" className="desktop-logo" />
                    </a>

                    <div className="desktop-nav">
                        {navLinks.map((link, idx) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                className="nav-link"
                                whileHover={{ y: -2 }}
                                transition={{ duration: 0.2 }}
                            >
                                <span className="nav-link-number">0{idx + 1}</span>
                                {link.name}
                            </motion.a>
                        ))}
                        <a href="tel:+77774344050" className="btn btn-outline nav-btn">
                            БРОНИРОВАНИЕ
                        </a>
                    </div>

                    <button
                        className="mobile-toggle"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <div className="toggle-line"></div>
                        <div className="toggle-line short"></div>
                    </button>
                </div>
            </motion.nav>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="mobile-menu-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="mobile-menu-content"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        >
                            <div className="mobile-menu-header">
                                <span className="menu-label">MENU</span>
                                <button className="close-btn" onClick={() => setMobileMenuOpen(false)}>
                                    <X size={32} />
                                </button>
                            </div>

                            <div className="mobile-links">
                                {navLinks.map((link, idx) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + idx * 0.05 }}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <span className="link-idx">0{idx + 1}</span>
                                        {link.name}
                                    </motion.a>
                                ))}
                            </div>

                            <div className="mobile-menu-footer">
                                <a href="tel:+77774344050" className="mobile-phone">
                                    <Phone size={20} /> +7 (777) 434-40-50
                                </a>
                                <div className="mobile-socials">
                                    <a href="https://www.instagram.com/jeti.qazyna.pvl/" target="_blank" rel="noopener noreferrer">
                                        <Instagram size={24} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
