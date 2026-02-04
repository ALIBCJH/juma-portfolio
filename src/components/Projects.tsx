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
        github: "https://github.com/ALIBCJH/Muhoya-project-2-backend",
        demo: null,
    },
    {
        title: "Datani Insurance Agency",
        description: "A corporate website for Datani Insurance Agency showcasing services, policy information, and client testimonials.",
        image: "/images/datani2.jpeg",
        problem: "The agency needed a professional online presence to attract clients and showcase their insurance services.",
        features: ["Service Showcase", "Quote Calculator", "Client Portal", "Responsive Design"],
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
        contribution: "Built the entire frontend with modern design principles and integrated the contact system.",
        github: null,
        demo: "https://datanico.vercel.app/",
    },
    {
        title: "Elimu Picha",
        description: "A learning assistance tool that uses visuals, simplified instructions, and AI-powered guidance to help students with dyslexia.",
        image: "/images/project-elimu.png",
        problem: "Standard educational tools are often inaccessible to students with dyslexia due to text-heavy interfaces.",
        features: ["Visual Learning Aids", "AI Guidance", "Simplified Text", "Interactive Quizzes"],
        stack: ["Next.js", "OpenAI API", "Tailwind CSS", "Framer Motion"],
        contribution: "Led the frontend development and integrated the AI-powered text simplification engine.",
        github: null,
        demo: null,
    },
    {
        title: "E-Commerce Marketplace",
        description: "A cloud-based multi-vendor marketplace platform where sellers can list products, manage inventory, and handle orders.",
        image: "/images/project-ecommerce.png",
        problem: "Small businesses lacked an affordable, scalable platform to sell products online with multi-vendor capabilities.",
        features: ["Multi-vendor Support", "Inventory Management", "Order Processing", "Analytics Dashboard"],
        stack: ["Nest.js", "PostgreSQL", "React", "Redis"],
        contribution: "Built the vendor management microservice and optimized database queries for high-traffic loads.",
        github: "https://github.com/ALIBCJH/chuo-market-backend",
        demo: null,
    },
    {
        title: "Confirmed",
        description: "An inventory management system that helps small and medium enterprises track their stock in real-time as sales occur.",
        image: "/images/confirmed.jpeg",
        problem: "SMEs struggled with manual stock tracking, leading to overselling, stockouts, and lost revenue.",
        features: ["Real-time Stock Tracking", "Sales Analytics", "Low Stock Alerts", "Multi-location Support"],
        stack: ["Node.js", "MongoDB", "React", "Socket.io"],
        contribution: "Developed the real-time inventory sync system and built the analytics dashboard.",
        github: "https://github.com/ALIBCJH/confirmed-",
        demo: null,
    },
    {
        title: "Job Hunting Platform",
        description: "A comprehensive job search platform connecting job seekers with employers, featuring resume building and application tracking.",
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop",
        problem: "Job seekers needed a centralized platform to search opportunities, build resumes, and track applications efficiently.",
        features: ["Job Search", "Resume Builder", "Application Tracking", "Employer Dashboard"],
        stack: ["React", "Node.js", "MongoDB", "Express"],
        contribution: "Built the job search algorithm and implemented the application tracking system.",
        github: "https://github.com/ALIBCJH/Job-Hunting-Plartform",
        demo: null,
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
