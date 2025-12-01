"use client";

import { Code, Smartphone, Cloud, Brain } from "lucide-react";
import styles from "./Services.module.css";

const services = [
    {
        title: "Web Development",
        icon: <Code size={40} />,
        description: "Building responsive, high-performance web applications using modern frameworks like Next.js and React.",
    },
    {
        title: "Mobile Apps",
        icon: <Smartphone size={40} />,
        description: "Creating intuitive mobile experiences for iOS and Android with React Native.",
    },
    {
        title: "Cloud Solutions",
        icon: <Cloud size={40} />,
        description: "Architecting scalable cloud infrastructure on AWS and Oracle Cloud.",
    },
    {
        title: "AI Integration",
        icon: <Brain size={40} />,
        description: "Implementing AI agents and RAG pipelines to add intelligence to your applications.",
    },
];

export default function Services() {
    return (
        <section className={styles.services} id="services">
            <div className={styles.container}>
                <h2 className={styles.title}>What do I help?</h2>
                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.icon}>{service.icon}</div>
                            <h3 className={styles.serviceTitle}>{service.title}</h3>
                            <p className={styles.description}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
