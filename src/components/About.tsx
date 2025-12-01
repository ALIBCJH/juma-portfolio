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
                        I’m a <span className={styles.highlight}>Software Engineer</span> driven by the challenge of building systems that matter.
                        With a practical approach to problem-solving and a passion for scalable architecture, I turn complex requirements into
                        <span className={styles.highlight}> robust digital products</span>.
                        <br /><br />
                        Whether it's optimizing backend pipelines or crafting intuitive user interfaces, I bring a
                        <span className={styles.highlight}> warm, collaborative energy</span> to every team.
                        I believe in technology that empowers people—building the future, one line of code at a time.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
