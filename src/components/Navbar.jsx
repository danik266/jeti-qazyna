import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'ru' ? 'kz' : 'ru';
        i18n.changeLanguage(newLang);
    };

    const navLinks = [
        { name: t('nav.about'), href: '#atmosphere' },
        { name: t('nav.zones'), href: '#zones' },
        { name: t('nav.menu'), href: '#menu' },
        { name: t('nav.gallery'), href: '#gallery' },
        { name: t('nav.contacts'), href: '#contact' },
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
                                key={link.href}
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
                            {t('nav.booking')}
                        </a>
                        <button onClick={toggleLanguage} className="lang-switcher desktop-lang">
                            {i18n.language === 'ru' ? 'KZ' : 'RU'}
                        </button>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <button onClick={toggleLanguage} className="lang-switcher mobile-lang">
                            {i18n.language === 'ru' ? 'KZ' : 'RU'}
                        </button>
                        <button
                            className="mobile-toggle"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <div className="toggle-line"></div>
                            <div className="toggle-line mid"></div>
                            <div className="toggle-line short"></div>
                        </button>
                    </div>
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
                                <span className="menu-label">{t('nav.menu_label')}</span>
                                <button className="close-btn" onClick={() => setMobileMenuOpen(false)}>
                                    <X size={32} />
                                </button>
                            </div>

                            <div className="mobile-links">
                                {navLinks.map((link, idx) => (
                                    <motion.a
                                        key={link.href}
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
