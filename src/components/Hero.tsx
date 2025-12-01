"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
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
                    <span className={styles.greeting}>Hello World,</span>
                    <h1 className={styles.title}>
                        I’m <span className={styles.highlight}>Simon</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Crafting digital masterpieces with code. I turn complex problems into beautiful, scalable solutions.
                    </p>

                    <div className={styles.ctaGroup}>
                        <button className={styles.primaryBtn}>View Work</button>
                        <button className={styles.secondaryBtn}>Contact Me</button>
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
                            alt="Simon Juma"
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
