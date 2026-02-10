"use client";

import { motion } from "framer-motion";
import styles from "./FAQ.module.css";

const faqs = [
    {
        question: "Who is Simon Juma?",
        answer: "Simon Juma (also known as Simon Ombom) is a Software Engineer from Nyeri, Kenya, specializing in Node.js, MERN stack, AWS, Terraform, and AI solutions. He builds impactful technology for health, agriculture, and education sectors in Africa."
    },
    {
        question: "What are Simon Juma's technical skills?",
        answer: "Simon Juma is proficient in Node.js, Express.js, MongoDB, React, Next.js, AWS, Terraform, Python, AI/ML, RAG pipelines, backend development, and full-stack web development. He has experience with Docker, PostgreSQL, Redis, and Socket.io."
    },
    {
        question: "Where did Simon Juma study?",
        answer: "Simon Juma is an alumnus of Dedan Kimathi University of Technology (DeKUT) in Kenya, where he studied software engineering and technology."
    },
    {
        question: "What kind of projects has Simon Juma built?",
        answer: "Simon Juma has built garage management systems, e-commerce platforms, inventory management tools, insurance agency websites, educational platforms for students with dyslexia, and job hunting platforms. His projects focus on real-world impact in African communities."
    },
    {
        question: "Is Simon Juma available for hire?",
        answer: "Yes, Simon Juma is currently open to software engineering roles, manager positions, and artificial intelligence researcher opportunities. He is also available for freelance projects."
    },
    {
        question: "How can I contact Simon Juma?",
        answer: "You can contact Simon Juma via email at simonjuma465@gmail.com, connect with him on LinkedIn at linkedin.com/in/simon-ombom-603723253, or check out his GitHub at github.com/ALIBCJH."
    },
    {
        question: "What makes Simon Juma different as a developer?",
        answer: "Simon Juma focuses on building technology that creates real impact for communities in Africa, particularly in health, agriculture, and education sectors. He combines technical excellence with a deep understanding of local challenges and needs."
    },
    {
        question: "Where is Simon Juma located?",
        answer: "Simon Juma is based in Nyeri, Kenya, and is available for both remote and on-site opportunities across Kenya and internationally."
    }
];

export default function FAQ() {
    return (
        <section className={styles.faq} id="faq">
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.title}>Frequently Asked Questions</h2>
                    <p className={styles.subtitle}>Learn more about Simon Juma (Simon Ombom) and his work</p>
                </motion.div>

                <div className={styles.grid}>
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <h3 className={styles.question}>{faq.question}</h3>
                            <p className={styles.answer}>{faq.answer}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
