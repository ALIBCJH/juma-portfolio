"use client";

import { useState, useEffect } from "react";
import styles from "./Navigation.module.css";

const sections = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
];

export default function Navigation() {
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const toggleTheme = () => {
        const html = document.documentElement;
        const current = html.getAttribute("data-theme");
        if (current === "light") {
            html.setAttribute("data-theme", "dark");
        } else {
            html.setAttribute("data-theme", "light");
        }
    };

    return (
        <nav className={styles.nav}>
            {sections.map(({ id, label }) => (
                <div
                    key={id}
                    className={`${styles.link} ${activeSection === id ? styles.active : ""}`}
                    onClick={() => scrollTo(id)}
                >
                    <span className={styles.tooltip}>{label}</span>
                </div>
            ))}

            <button
                className={styles.themeToggle}
                onClick={toggleTheme}
                aria-label="Toggle Theme"
            />
        </nav>
    );
}
