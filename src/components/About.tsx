"use client";

import { motion } from "framer-motion";
import styles from "./About.module.css";

export default function About() {
    return (
        <section className={styles.about} id="about">
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.title}>About Me</h2>
                </motion.div>

                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <p className={styles.text}>
                        Hey, I'm <span className={styles.highlight}>Simon Juma</span> (also known as Simon Ombom) — a builder at heart.
                        I'm a <span className={styles.highlight}>Software Engineer</span> from Kenya who creates software that doesn't just sit in a repo… 
                        it moves the needle for real people. My work lives at the intersection of <span className={styles.highlight}>health, agriculture, and education in Africa</span>, 
                        where technology isn't a luxury — it's a lifeline.
                        <br /><br />
                        I love diving deep into the backend ocean, crafting systems that are clean, scalable, and stubbornly reliable. 
                        My toolbox? <span className={styles.highlight}>Node.js, Express, MongoDB, the MERN stack, AWS, Terraform</span>, and a growing love for 
                        <span className={styles.highlight}> agentic RAG pipelines in Python</span>. I'm a proud alumnus of 
                        <span className={styles.highlight}> Dedan Kimathi University of Technology (DeKUT)</span>, and I bring a warm, collaborative energy to every team.
                        <br /><br />
                        Whether I'm building AI assistants for farmers, creating multilingual health tools, or shaping next-gen educational platforms, 
                        I'm driven by one thing: <span className={styles.highlight}>impact over hype</span>. I'm currently open to 
                        <span className={styles.highlight}> software engineering, manager, and AI researcher roles</span>.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
