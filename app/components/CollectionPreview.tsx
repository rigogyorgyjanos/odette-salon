"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const collections = [
    {
        title: "Klasszikus elegancia",
        image: "/classic.webp",
        link: "https://www.facebook.com/media/set/?set=a.522665823307464&type=3",
    },
    {
        title: "Modern minimalizmus",
        image: "/modern.webp",
        link: "https://www.facebook.com/media/set/?set=a.522665823307464&type=3",
    },
    {
        title: "Plus size ",
        image: "/plus_size.webp",
        link: "https://www.facebook.com/media/set/?set=a.946883100885732&type=3"
    },
];

export default function CollectionPreview() {
    return (
        <section
            className="py-16 px-4"
            style={{ backgroundColor: "var(--color-background)" }}
        >
            <div className="max-w-6xl mx-auto">

                {/* TITLE */}
                <motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h2
                        className="text-3xl md:text-5xl font-serif mb-4"
                        style={{ color: "var(--color-primary)" }}
                    >
                        Kollekciók
                    </h2>
                    <p
                        className="text-base md:text-lg"
                        style={{ color: "rgba(0,0,0,0.6)" }}
                    >
                        Fedezd fel különböző stílusainkat, és találd meg a hozzád illőt.
                    </p>
                    <motion.div
                        className="text-center mb-8 mt-4 text-black/60 text-sm md:text-base"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <p>
                            Ruháink ára: <span className="font-medium" style={{ color: "var(--color-primary)" }}>
                                150 000 – 250 000 Ft
                            </span>
                        </p>
                    </motion.div>

                </motion.div>

                {/* GRID */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.2,
                            },
                        },
                    }}
                >
                    {collections.map((item, index) => (
                        <motion.div
                            key={index}
                            className="group relative w-full h-130 rounded-lg"
                            variants={{
                                hidden: { opacity: 0, y: 40 },
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
                            {/* IMAGE */}
                            <motion.div
                                className="absolute overflow-hidden inset-0"
                                initial={{ scale: 1.1 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition duration-500"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                                />
                            </motion.div>

                            {/* OVERLAY */}
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />

                            {/* TEXT */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h3 className="text-lg font-serif text-center px-2 text-white transition duration-300 group-hover:tracking-wide">
                                    {item.title}
                                </h3>
                            </div>

                            {/* BUTTON LINK */}
                            <div className="absolute left-1/2 -translate-x-1/2 text-center -bottom-5 z-10  w-full ">
                                <button
                                    onClick={() => {
                                        setTimeout(() => {
                                            window.open(item.link, "_blank");
                                        }, 300);
                                    }}
                                    className="inline-block px-6 py-3 text-(--color-gold) rounded-md text-sm border transition hover:bg-(--color-gold) hover:text-white bg-white/75 backdrop-blur-sm shadow-md cursor-pointer"
                                    style={{
                                        borderColor: "var(--color-gold)",
                                    }}
                                >
                                    Facebook katalógus megtekintése
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}