"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.brand}>
                        <h3 className={styles.brandName}>Simon Juma</h3>
                        <p className={styles.brandTagline}>
                            AI Architect & Cloud Engineer | Building Autonomous Systems
                        </p>
                    </div>

                    <div className={styles.links}>
                        <h4 className={styles.linksTitle}>Quick Links</h4>
                        <a href="#hero" className={styles.link}>Home</a>
                        <a href="#about" className={styles.link}>About</a>
                        <a href="#projects" className={styles.link}>Projects</a>
                        <a href="#contact" className={styles.link}>Contact</a>
                    </div>

                    <div className={styles.social}>
                        <h4 className={styles.socialTitle}>Connect</h4>
                        <div className={styles.socialLinks}>
                            <a
                                href="https://github.com/ALIBCJH"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                aria-label="GitHub"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/simon-ombom-603723253/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {currentYear} Simon Juma. All rights reserved.
                    </p>
                    <p className={styles.made}>
                        Made with <Heart size={14} className={styles.heart} /> using Next.js
                    </p>
                </div>
            </div>
        </footer>
    );
}
