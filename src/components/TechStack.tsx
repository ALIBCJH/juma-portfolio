"use client";

import { motion } from "framer-motion";
import { 
    Cloud, 
    Database, 
    Layers, 
    Brain, 
    Code2,
    Server,
    Smartphone,
    GitBranch
} from "lucide-react";
import styles from "./TechStack.module.css";

const techCategories = [
    {
        title: "Frontend",
        icon: <Code2 size={28} />,
        color: "#06b6d4",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
        title: "Backend",
        icon: <Server size={28} />,
        color: "#8b5cf6",
        skills: ["Node.js", "Nest.js", "Express", "REST APIs", "GraphQL"],
    },
    {
        title: "Database",
        icon: <Database size={28} />,
        color: "#10b981",
        skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma"],
    },
    {
        title: "Cloud & DevOps",
        icon: <Cloud size={28} />,
        color: "#f59e0b",
        skills: ["AWS", "Oracle Cloud", "Docker", "CI/CD", "Nginx"],
    },
    {
        title: "Full Stack",
        icon: <Layers size={28} />,
        color: "#0ea5e9",
        skills: ["MERN Stack", "JAMstack", "Microservices", "WebSockets"],
    },
    {
        title: "AI & Data",
        icon: <Brain size={28} />,
        color: "#ec4899",
        skills: ["AI Agents", "RAG Pipelines", "LLM Integration", "OpenAI API"],
    },
    {
        title: "Mobile",
        icon: <Smartphone size={28} />,
        color: "#14b8a6",
        skills: ["React Native", "Expo", "Mobile-First Design"],
    },
    {
        title: "Version Control",
        icon: <GitBranch size={28} />,
        color: "#f97316",
        skills: ["Git", "GitHub", "GitLab", "Collaborative Workflows"],
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08
        }
    }
};

const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 }
};

export default function TechStack() {
    return (
        <section className={styles.techStack} id="skills">
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className={styles.title}>Tech Stack & Skills</h2>
                    <p className={styles.subtitle}>
                        Technologies I use to bring ideas to life
                    </p>
                </motion.div>

                <motion.div
                    className={styles.grid}
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {techCategories.map((category, index) => (
                        <motion.div 
                            key={index} 
                            className={styles.card} 
                            variants={item}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                        >
                            <div 
                                className={styles.iconWrapper}
                                style={{ background: `${category.color}15` }}
                            >
                                <div style={{ color: category.color }}>
                                    {category.icon}
                                </div>
                            </div>
                            <h3 className={styles.categoryTitle}>{category.title}</h3>
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
