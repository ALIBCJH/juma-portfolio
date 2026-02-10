"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import styles from "./ProjectCard.module.css";

interface ProjectProps {
    title: string;
    description: string;
    image: string;
    problem: string;
    features: string[];
    stack: string[];
    contribution: string;
    github: string | null;
    demo: string | null;
}

export default function ProjectCard({ project, index }: { project: ProjectProps; index: number }) {
    return (
        <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className={styles.imageContainer}>
                <Image
                    src={project.image}
                    alt={`${project.title} - ${project.description} built by Simon Juma`}
                    fill
                    className={styles.image}
                />
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{project.title}</h3>

                <div className={styles.sectionTitle}>Problem</div>
                <p className={styles.description}>{project.problem}</p>

                <div className={styles.sectionTitle}>Tech Stack</div>
                <div className={styles.tags}>
                    {project.stack.map((tech, i) => (
                        <span key={i} className={styles.tag}>{tech}</span>
                    ))}
                </div>

                <div className={styles.contribution}>
                    <strong>My Role:</strong> {project.contribution}
                </div>

                <div className={styles.links}>
                    {project.github && (
                        <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            <Github size={18} />
                            View Code
                        </a>
                    )}
                    {project.demo && (
                        <a 
                            href={project.demo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            <ExternalLink size={18} />
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
