"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Gallery.module.css";

const galleryImages = [
    {
        src: "/images/image10.jpg",
        alt: "Simon Juma speaking at tech event",
        caption: "Global AI BOOT Camp 2024 - Nairobi"
    },
    {
        src: "/images/image9.jpg",
        alt: "Simon Juma at hackathon event",
        caption: "2nd Runners Up - Daystar University Hackathon 2024"
    },
    {
        src: "/images/image3.jpg",
        alt: "Simon Juma presenting at conference",
        caption: "Mount Kenya BushHack 2024"
    },
    {
        src: "/images/image4.jpg",
        alt: "Simon Juma at workshop",
        caption: "Technical Workshop - MountKenya Devfeast 2025"
    },
    {
        src: "/images/image5.jpg",
        alt: "Simon Juma with tech community",
        caption: "Mount Kenya BushHack 2024 project Presentation"
    },
    {
        src: "/images/image6.jpg",
        alt: "Simon Juma at tech event",
        caption: "Communications Authority Of Kenya - Hackathon 2023 2nd Place Runners up"
    },
    {
        src: "/images/image7.jpg",
        alt: "Simon Juma at tech gathering",
        caption: "Mount Kenya BushHack 2024, 4th Position Overall"
    },
    {
        src: "/images/image8.jpg",
        alt: "Simon Juma at conference",
        caption: "Africa's Talking Hackathon 2023"
    },
    {
        src: "/images/image1.jpg",
        alt: "Simon Juma at tech event",
        caption: "Speaker at Mount Kenya Devfeast 2025"
    },
    {
        src: "/images/image2.jpg",
        alt: "Simon Juma at tech eventr ",
        caption: "Recognision Of Speakers - Mount Kenya Devfeast 2025"
    },
    {
        src: "/images/image11.jpg",
        alt: "Simon Juma at tech event",
        caption: "Datascience and AI Hackathon 2024 -Dedan KImathi University"
    }
];

export default function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    // Auto-slide every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(timer);
    }, [currentIndex]);

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };

    const handleDotClick = (index: number) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    return (
        <section className={styles.gallery} id="gallery">
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.title}>Gallery</h2>
                    <p className={styles.subtitle}>
                        Moments from tech events, hackathons, and technical lectures
                    </p>
                </motion.div>

                <div className={styles.carouselContainer}>
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            className={styles.slide}
                        >
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={galleryImages[currentIndex].src}
                                    alt={galleryImages[currentIndex].alt}
                                    fill
                                    className={styles.image}
                                    priority={currentIndex === 0}
                                />
                                <div className={styles.overlay}>
                                    <p className={styles.caption}>
                                        {galleryImages[currentIndex].caption}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    <button
                        className={`${styles.navButton} ${styles.navButtonLeft}`}
                        onClick={handlePrev}
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={32} />
                    </button>
                    <button
                        className={`${styles.navButton} ${styles.navButtonRight}`}
                        onClick={handleNext}
                        aria-label="Next image"
                    >
                        <ChevronRight size={32} />
                    </button>

                    {/* Dots Indicator */}
                    <div className={styles.dotsContainer}>
                        {galleryImages.map((_, index) => (
                            <button
                                key={index}
                                className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
                                onClick={() => handleDotClick(index)}
                                aria-label={`Go to image ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Thumbnail Strip */}
                    <div className={styles.thumbnails}>
                        {galleryImages.map((img, index) => (
                            <button
                                key={index}
                                className={`${styles.thumbnail} ${index === currentIndex ? styles.thumbnailActive : ''}`}
                                onClick={() => handleDotClick(index)}
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className={styles.thumbnailImage}
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
