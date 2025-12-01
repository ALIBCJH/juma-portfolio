"use client";

import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer} id="contact">
            <div className={styles.container}>
                <div className={styles.socials}>
                    <h2 className={styles.socialTitle}>Let's Build Something Amazing</h2>
                    <p>Open for opportunities and collaborations.</p>

                    <div className={styles.socialLinks}>
                        <a href="#" className={styles.socialLink}><Github size={24} /></a>
                        <a href="#" className={styles.socialLink}><Linkedin size={24} /></a>
                        <a href="#" className={styles.socialLink}><Twitter size={24} /></a>
                        <a href="mailto:simon@example.com" className={styles.socialLink}><Mail size={24} /></a>
                    </div>
                </div>

                <form className={styles.contactForm} onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Your Name" className={styles.input} />
                    <input type="email" placeholder="Your Email" className={styles.input} />
                    <textarea placeholder="Message" className={styles.textarea}></textarea>
                    <button type="submit" className={styles.button}>Send Message</button>
                </form>
            </div>

            <div className={styles.copyright}>
                © {new Date().getFullYear()} Simon Juma. All rights reserved.
            </div>
        </footer>
    );
}
