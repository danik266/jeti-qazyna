import React from 'react';
import { motion } from 'framer-motion';

const MenuPreview = () => {
    const categories = [
        {
            id: "national",
            title: "Национальная Кухня",
            subtitle: "Вкус степных традиций",
            items: [
                { name: "Бешбармак", price: "12 000", desc: "Конина, баранина, тонкое домашнее тесто." },
                { name: "Куырдак", price: "5 500", desc: "Свежая баранина, картофель, луковая заправка." },
                { name: "Сырне", price: "8 000", desc: "Молодая баранина, томленная 6 часов." }
            ]
        },
        {
            id: "grill",
            title: "Мангал & Гриль",
            subtitle: "Аромат живого огня",
            items: [
                { name: "Шашлык Баран", price: "2 800", desc: "Мякоть барашка в фирменном маринаде." },
                { name: "Люля-Кебаб", price: "2 500", desc: "Рубленое мясо с восточными пряностями." },
                { name: "Ассорти", price: "15 000", desc: "Плато из 5 видов мяса для большой компании." }
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
                        <span className="premium-label">КУХНЯ</span>
                        <h2 className="premium-title">Избранное Меню</h2>
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
                        ПОЛНОЕ МЕНЮ В WHATSAPP
                    </a>
                </motion.div>
            </div>

            {/* Background decorative text */}
            <div className="menu-bg-accent">ДӘМ</div>
        </section>
    );
};

export default MenuPreview;
