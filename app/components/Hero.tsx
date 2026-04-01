"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative w-full h-[90vh] flex items-center justify-center text-center overflow-hidden">

            {/* BACKGROUND IMAGE (zoom animáció) */}
            <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/hero.webp')",
                }}
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/50 to-black/80" />

            {/* CONTENT */}
            <motion.div
                className="relative z-10 px-6 max-w-xl"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.2,
                            delayChildren: 0.3,
                        },
                    },
                }}
            >
                {/* TITLE */}
                <motion.h1
                    className="text-4xl md:text-5xl font-serif leading-tight mb-6"
                    style={{ color: "var(--color-primary)" }}
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                            },
                        },
                    }}
                >
                    Találd meg álmaid ruháját
                </motion.h1>

                {/* TEXT */}
                <motion.p
                    className="text-sm md:text-base mb-8"
                    style={{ color: "rgba(255,255,255,0.9)" }}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.7,
                                ease: [0.22, 1, 0.36, 1],
                            },
                        },
                    }}
                >
                    Prémium menyasszonyi ruhák, folyamatosan megújuló kollekcióval.
                </motion.p>

                {/* CTA BUTTONS */}
                <motion.div
                    className="flex flex-col gap-4 backdrop-blur-2xl"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.6,
                                ease: [0.22, 1, 0.36, 1],
                            },
                        },
                    }}
                >
                    {/* PHONE CTA */}
                    <a
                        href="tel:+36707880888"
                        className="py-3 rounded-md text-sm tracking-wide transition hover:opacity-90"
                        style={{
                            backgroundColor: "var(--color-primary)",
                            color: "white",
                        }}
                    >
                        Időpontfoglalás telefonon
                    </a>

                    {/* FACEBOOK CTA */}
                    <a href="https://www.facebook.com/odetteszalon"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3 rounded-md text-sm tracking-wide transition border"
                        style={{ borderColor: "var(--color-gold)", color: "var(--color-gold)", }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--color-gold)";
                            (e.currentTarget as HTMLAnchorElement).style.color = "white";
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                            (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-gold)";
                        }} >
                        Facebook oldal megtekintése
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}