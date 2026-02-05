"use client";

import Image from "next/image";
import styles from "./Testimonials.module.css";

const testimonials = [
    {
        quote: "Simon is a brilliant engineer who consistently delivers high-quality code. His ability to solve complex problems is impressive.",
        name: "Dr. Jane Kuria",
        role: "Senior Lecturer",
        image: "/images/jane.png",
    },
    {
        quote: "Working with Simon was a pleasure. He brings great energy to the team and his technical skills are top-notch.",
        name: "Benson Munene",
        role: "Tech Lead",
        image: "/images/benson.jpeg",
    },
];

export default function Testimonials() {
    return (
        <section className={styles.testimonials} id="testimonials">
            <div className={styles.container}>
                <h2 className={styles.title}>What People Say</h2>
                <div className={styles.grid}>
                    {testimonials.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <p className={styles.quote}>"{item.quote}"</p>
                            <div className={styles.author}>
                                <div className={styles.avatar}>
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className={styles.avatarImage}
                                    />
                                </div>
                                <div className={styles.info}>
                                    <span className={styles.name}>{item.name}</span>
                                    <span className={styles.role}>{item.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
