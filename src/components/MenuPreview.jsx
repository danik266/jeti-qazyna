import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const MenuPreview = () => {
    const { t } = useTranslation();
    const categories = [
        {
            id: "national",
            title: t('menu.title'),
            subtitle: t('menu.desc'),
            items: [
                { name: t('menu.dish_besh'), price: "12 000", desc: t('menu.dish_besh_desc') },
                { name: t('menu.dish_kuyrdak'), price: "5 500", desc: t('menu.dish_kuyrdak_desc') },
                { name: t('menu.dish_sirne'), price: "8 000", desc: t('menu.dish_sirne_desc') }
            ]
        },
        {
            id: "grill",
            title: t('menu.cat_grill_title'),
            subtitle: t('menu.cat_grill_subtitle'),
            items: [
                { name: t('menu.dish_shashlik'), price: "2 800", desc: t('menu.dish_shashlik_desc') },
                { name: t('menu.dish_lula'), price: "2 500", desc: t('menu.dish_lula_desc') },
                { name: t('menu.dish_assorti'), price: "15 000", desc: t('menu.dish_assorti_desc') }
            ]
        }
    ];

    return (
        <section id="menu" className="menu-premium">
            <div className="container">
                <div className="menu-header">
                    <motion.div
                        className="menu-title-box"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="premium-label">{t('menu.label')}</span>
                        <h2 className="premium-title">{t('menu.title')}</h2>
                    </motion.div>
                </div>

                <div className="menu-categories">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={cat.id}
                            className="menu-card"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.2 }}
                        >
                            <div className="menu-card-header">
                                <h3 className="menu-cat-title">{cat.title}</h3>
                                <p className="menu-cat-subtitle">{cat.subtitle}</p>
                            </div>

                            <div className="menu-list">
                                {cat.items.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        className="luxury-menu-item"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + i * 0.1 }}
                                    >
                                        <div className="m-item-main">
                                            <span className="m-item-name">{item.name}</span>
                                            <div className="m-item-line"></div>
                                            <span className="m-item-price">{item.price} ₸</span>
                                        </div>
                                        <p className="m-item-desc">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="menu-footer-actions"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <a href="https://wa.me/77774344050" target="_blank" rel="noopener noreferrer" className="btn btn-gold-fill">
                        {t('menu.btn_full_menu')}
                    </a>
                </motion.div>
            </div>

            {/* Background decorative text */}
            <div className="menu-bg-accent">{t('menu.bg_text')}</div>
        </section>
    );
};

export default MenuPreview;
