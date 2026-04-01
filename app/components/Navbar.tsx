"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants, Variant } from "framer-motion";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const menuVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2,
            },
        },
        exit: { opacity: 0 }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    return (
        <nav
            className="w-full shadow-sm fixed top-0 left-0 z-50"
            style={{ backgroundColor: "var(--color-background)" }}
        >
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

                {/* LOGO */}
                <Link
                    href="/"
                    className="font-serif text-xl tracking-wide"
                    style={{ color: "var(--color-primary)" }}
                >
                    ODETTE
                </Link>

                {/* MOBILE BUTTON */}
                <button
                    className="md:hidden text-2xl"
                    style={{ color: "var(--color-primary)" }}
                    onClick={() => setOpen(true)}
                >
                    ☰
                </button>

                {/* DESKTOP */}
                <div className="hidden md:flex gap-8 text-sm font-medium">
                    <Link href="/collections" style={{ color: "var(--color-primary)" }}>Kollekciók</Link>
                    <Link href="/about" style={{ color: "var(--color-primary)" }}>Rólunk</Link>
                    <Link href="/contact" style={{ color: "var(--color-primary)" }}>Kapcsolat</Link>
                </div>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        className="fixed inset-0 z-50 flex flex-col backdrop-blur-sm px-6 pt-6 pb-8"
                        style={{ backgroundColor: "var(--color-background)" }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        {/* TOP BAR */}
                        <div className="flex items-center justify-between">
                            <span
                                className="font-serif text-xl tracking-wide"
                                style={{ color: "var(--color-primary)" }}
                            >
                                ODETTE
                            </span>

                            <button
                                className="text-3xl"
                                style={{ color: "var(--color-primary)" }}
                                onClick={() => setOpen(false)}
                            >
                                ✕
                            </button>
                        </div>

                        {/* DIVIDER */}
                        <div
                            className="w-full h-px my-6 opacity-30"
                            style={{ backgroundColor: "var(--color-primary)" }}
                        />

                        {/* MENU ITEMS */}
                        <motion.div
                            variants={menuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="flex flex-col gap-6"
                        >
                            <motion.div variants={itemVariants}>
                                <Link href="/" onClick={() => setOpen(false)} className="text-xl">
                                    Főoldal
                                </Link>
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <Link href="/collections" onClick={() => setOpen(false)} className="text-xl">
                                    Kollekciók
                                </Link>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <Link href="/about" onClick={() => setOpen(false)} className="text-xl">
                                    Rólunk
                                </Link>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <Link href="/contact" onClick={() => setOpen(false)} className="text-xl">
                                    Kapcsolat
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* BOTTOM SECTION */}
                        <div className="mt-auto">
                            {/* DIVIDER */}
                            <div
                                className="w-full h-px my-6 opacity-30"
                                style={{ backgroundColor: "var(--color-primary)" }}
                            />

                            <div className="flex flex-col gap-4 text-center">
                                {/* FACEBOOK */}
                                <Link
                                    href="https://www.facebook.com/odetteszalon/photos"
                                    className="inline-block px-6 py-3 text-(--color-gold) rounded-md text-sm border transition hover:bg-(--color-gold) hover:text-white"
                                    style={{
                                        borderColor: "var(--color-gold)",
                                    }}
                                >
                                    Facebook
                                </Link>

                                {/* CALL BUTTON */}
                                <a
                                    href="tel:+36707880888"
                                    className="py-3 rounded-md text-sm tracking-wide transition hover:opacity-90"
                                    style={{
                                        backgroundColor: "var(--color-primary)",
                                        color: "white",
                                    }}
                                >
                                    Hívjon minket
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}