"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download, CheckCircle } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/images/JUMA-CV-2.0.pdf';
        link.download = 'Simon_Juma_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className={styles.splash} />
                    
                    {/* Availability Status Badge */}
                    <motion.div 
                        className={styles.availabilityBadge}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <CheckCircle size={16} className={styles.availabilityIcon} />
                        <span>Available for opportunities</span>
                    </motion.div>

                    <span className={styles.greeting}>Hello World,</span>
                    <h1 className={styles.title}>
                        I'm <span className={styles.highlight}>Simon Juma</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Software Engineer (also known as Simon Ombom) building scalable solutions with Node.js, MERN stack, AWS, and AI. Specialized in health, agriculture, and education technology for Africa.
                    </p>

                    <div className={styles.ctaGroup}>
                        <button 
                            className={styles.primaryBtn}
                            onClick={() => scrollToSection('projects')}
                        >
                            View Work
                        </button>
                        <button 
                            className={styles.secondaryBtn}
                            onClick={() => scrollToSection('contact')}
                        >
                            Contact Me
                        </button>
                        <button 
                            className={styles.downloadBtn}
                            onClick={handleDownloadCV}
                        >
                            <Download size={18} />
                            Download CV
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.imageWrapper}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <div className={`${styles.shape} ${styles.shape1}`} />
                    <div className={styles.maskContainer}>
                        <Image
                            src="/images/simon-hero.jpg"
                            alt="Simon Juma (Simon Ombom) - Software Engineer specializing in Node.js, MERN stack, AWS, and AI solutions"
                            fill
                            priority
                            className={styles.image}
                        />
                    </div>
                    <div className={`${styles.shape} ${styles.shape2}`} />
                </motion.div>
            </div>
        </section>
    );
}
