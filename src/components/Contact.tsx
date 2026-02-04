"use client";

import { useState, useRef } from "react";
import { Mail, Phone, MapPin, Send, Check, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        title: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        if (!formRef.current) return;

        try {
            // Send email using EmailJS with form reference
            const result = await emailjs.sendForm(
                'service_3kb1xw9',           // Your Service ID
                'template_qhclsts',          // Your Template ID
                formRef.current,
                'UbCYSGlL2myEb892n'         // Your Public Key
            );

            console.log('SUCCESS!', result.text);
            setStatus("success");
            
            // Reset form
            if (formRef.current) {
                formRef.current.reset();
            }
            setFormData({ name: "", email: "", title: "", message: "" });
            
            setTimeout(() => setStatus("idle"), 5000);
            
        } catch (error: any) {
            console.error("EmailJS Error:", error.text || error);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    return (
        <section className={styles.contact} id="contact">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Let's Work Together</h2>
                    <p className={styles.subtitle}>
                        Have a project in mind? Let's discuss how I can help bring your ideas to life.
                    </p>
                </div>

                <div className={styles.content}>
                    <div className={styles.info}>
                        <h3 className={styles.infoTitle}>Get In Touch</h3>
                        <p className={styles.infoText}>
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>

                        <div className={styles.contactItems}>
                            <div className={styles.contactItem}>
                                <div className={styles.iconWrapper}>
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h4 className={styles.itemTitle}>Email</h4>
                                    <a href="mailto:simonjuma465@gmail.com" className={styles.itemValue}>
                                        simonjuma465@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className={styles.contactItem}>
                                <div className={styles.iconWrapper}>
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h4 className={styles.itemTitle}>Phone</h4>
                                    <a href="tel:+254712345678" className={styles.itemValue}>
                                        +254 712 345 678
                                    </a>
                                </div>
                            </div>

                            <div className={styles.contactItem}>
                                <div className={styles.iconWrapper}>
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className={styles.itemTitle}>Location</h4>
                                    <p className={styles.itemValue}>Nairobi, Kenya</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.label}>Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={styles.input}
                                required
                                placeholder="Your name"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={styles.input}
                                required
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="title" className={styles.label}>Subject</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className={styles.input}
                                required
                                placeholder="Project inquiry"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.label}>Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className={styles.textarea}
                                required
                                placeholder="Tell me about your project..."
                                rows={5}
                            />
                        </div>

                        <button 
                            type="submit" 
                            className={styles.submitBtn}
                            disabled={status === "sending"}
                        >
                            {status === "idle" && (
                                <>
                                    <Send size={18} />
                                    Send Message
                                </>
                            )}
                            {status === "sending" && "Sending..."}
                            {status === "success" && (
                                <>
                                    <Check size={18} />
                                    Message Sent!
                                </>
                            )}
                            {status === "error" && (
                                <>
                                    <AlertCircle size={18} />
                                    Try Again
                                </>
                            )}
                        </button>

                        {status === "success" && (
                            <p className={styles.successMessage}>
                                Thank you! I'll get back to you as soon as possible.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
