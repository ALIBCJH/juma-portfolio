"use client";

import { motion } from "framer-motion";
import { Cloud, Database, Layers, Brain, Code } from "lucide-react";
import styles from "./TechStack.module.css";

const techCategories = [
    {
        title: "Cloud & DevOps",
        icon: <Cloud size={24} />,
        skills: ["AWS", "Oracle Cloud", "Docker", "CI/CD"],
    },
    {
        title: "Full Stack",
        icon: <Layers size={24} />,
        skills: ["MERN Stack", "Next.js", "Nest.js", "TypeScript"],
    },
    {
        title: "Database",
        icon: <Database size={24} />,
        skills: ["PostgreSQL", "MongoDB", "Redis"],
    },
    {
        title: "AI & Data",
        icon: <Brain size={24} />,
        skills: ["Building AI Agents", "RAG Pipelines", "LLM Integration"],
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function TechStack() {
    return (
        <section className={styles.techStack} id="skills">
            <div className={styles.container}>
                <motion.h2
                    className={styles.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Tech Stack
                </motion.h2>

                <motion.div
                    className={styles.grid}
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {techCategories.map((category, index) => (
                        <motion.div key={index} className={styles.card} variants={item}>
                            <div className={styles.categoryTitle}>
                                {category.icon}
                                {category.title}
                            </div>
                            <div className={styles.skills}>
                                {category.skills.map((skill, idx) => (
                                    <span key={idx} className={styles.badge}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
