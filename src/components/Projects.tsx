"use client";

import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

const projects = [
    {
        title: "Garage Management System",
        description: "A full-stack platform that helps garages streamline clients, vehicles, invoices, and service operations.",
        image: "/images/project-garage.png",
        problem: "Garages struggled with manual tracking of repairs and invoicing, leading to lost revenue and inefficiencies.",
        features: ["Client Management", "Vehicle Tracking", "Automated Invoicing", "Service History"],
        stack: ["MERN Stack", "Redux", "Docker", "AWS"],
        contribution: "Architected the database schema and built the core REST API. Implemented the real-time dashboard.",
    },
    {
        title: "Insurance App",
        description: "A digital-first insurance workflow system to help users apply, track, and manage policy information in real time.",
        image: "/images/project-insurance.png",
        problem: "Traditional insurance applications were slow and opaque. Users needed a transparent, real-time way to manage policies.",
        features: ["Policy Management", "Claims Tracking", "Real-time Notifications", "Secure Document Upload"],
        stack: ["React Native", "Node.js", "PostgreSQL", "Firebase"],
        contribution: "Developed the mobile frontend and integrated secure payment gateways.",
    },
    {
        title: "Elimu Picha",
        description: "A learning assistance tool that uses visuals, simplified instructions, and AI-powered guidance to help students with dyslexia.",
        image: "/images/project-elimu.png",
        problem: "Standard educational tools are often inaccessible to students with dyslexia due to text-heavy interfaces.",
        features: ["Visual Learning Aids", "AI Guidance", "Simplified Text", "Interactive Quizzes"],
        stack: ["Next.js", "OpenAI API", "Tailwind CSS", "Framer Motion"],
        contribution: "Led the frontend development and integrated the AI-powered text simplification engine.",
    },
    {
        title: "E-Commerce Marketplace",
        description: "A cloud-based multi-vendor marketplace platform where sellers can list products, manage inventory, and handle orders.",
        image: "/images/project-ecommerce.png",
        problem: "Small businesses lacked an affordable, scalable platform to sell products online with multi-vendor capabilities.",
        features: ["Multi-vendor Support", "Inventory Management", "Order Processing", "Analytics Dashboard"],
        stack: ["Nest.js", "PostgreSQL", "React", "Redis"],
        contribution: "Built the vendor management microservice and optimized database queries for high-traffic loads.",
    },
];

export default function Projects() {
    return (
        <section className={styles.projects} id="projects">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Featured Projects</h2>
                    <p className={styles.subtitle}>A selection of my recent work</p>
                </div>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
