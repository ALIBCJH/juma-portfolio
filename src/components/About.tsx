"use client";

import { motion } from "framer-motion";
import { Code2, Cloud, Cpu, Rocket } from "lucide-react";
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
                    <h2 className={styles.title}>The Engineer Behind The Code</h2>
                </motion.div>

                <motion.div
                    className={styles.storyGrid}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className={styles.storyCard}>
                        <div className={styles.iconWrapper}>
                            <Rocket className={styles.icon} />
                        </div>
                        <h3>The Journey</h3>
                        <p>
                            Hey, I'm <strong>Simon Juma</strong> (also known as <strong>Simon Ombom</strong>)—a <strong>Kenyan software engineer</strong> who transforms complex problems into elegant digital solutions. From the classrooms of <strong>Dedan Kimathi University of Technology (DeKUT)</strong> to architecting cloud-native systems, my path has been driven by one question: <em>How can technology uplift Africa?</em>
                        </p>
                    </div>

                    <div className={styles.storyCard}>
                        <div className={styles.iconWrapper}>
                            <Cpu className={styles.icon} />
                        </div>
                        <h3>The Craft</h3>
                        <p>
                            I specialize in <strong>Agentic AI systems</strong> powered by <strong>RAG pipelines</strong>, where autonomous agents make intelligent decisions. My expertise spans <strong>Infrastructure as Code (Terraform)</strong>, <strong>AWS cloud architecture</strong>, and <strong>Node.js/MERN stack</strong> development. I don't just write code—I engineer <strong>self-healing, scalable systems</strong> that think.
                        </p>
                    </div>

                    <div className={styles.storyCard}>
                        <div className={styles.iconWrapper}>
                            <Cloud className={styles.icon} />
                        </div>
                        <h3>The Mission</h3>
                        <p>
                            Every line of code I write serves a purpose: <strong>democratizing technology for Africa</strong>. From <strong>AI-powered health diagnostics</strong> to <strong>smart agriculture platforms</strong> and <strong>educational tech innovations</strong>, I build systems that bridge the digital divide. My work touches lives across <strong>Kenya, Tanzania, Uganda, and beyond</strong>.
                        </p>
                    </div>

                    <div className={styles.storyCard}>
                        <div className={styles.iconWrapper}>
                            <Code2 className={styles.icon} />
                        </div>
                        <h3>The Vision</h3>
                        <p>
                            I'm not just seeking a job—I'm looking for <strong>partnerships that challenge conventions</strong>. Whether as a <strong>Senior Software Engineer</strong>, <strong>AI/ML Engineer</strong>, <strong>Cloud Architect</strong>, or <strong>Engineering Manager</strong>, I bring a unique blend of technical depth and strategic thinking. Let's build the future of <strong>African tech</strong> together.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.expertise}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h3 className={styles.expertiseTitle}>Core Expertise</h3>
                    <div className={styles.expertiseTags}>
                        <span className={styles.tag}>Agentic AI & RAG Systems</span>
                        <span className={styles.tag}>Terraform & IaC</span>
                        <span className={styles.tag}>AWS Cloud Architecture</span>
                        <span className={styles.tag}>Node.js & Express.js</span>
                        <span className={styles.tag}>React & Next.js</span>
                        <span className={styles.tag}>MongoDB & PostgreSQL</span>
                        <span className={styles.tag}>Docker & Kubernetes</span>
                        <span className={styles.tag}>CI/CD Pipelines</span>
                        <span className={styles.tag}>Microservices Architecture</span>
                        <span className={styles.tag}>Python & FastAPI</span>
                        <span className={styles.tag}>Machine Learning</span>
                        <span className={styles.tag}>REST & GraphQL APIs</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
