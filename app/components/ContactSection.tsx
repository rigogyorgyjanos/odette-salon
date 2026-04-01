"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
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
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h2
                        className="text-2xl md:text-4xl font-serif mb-4"
                        style={{ color: "var(--color-primary)" }}
                    >
                        Kapcsolat
                    </h2>
                    <p
                        className="text-sm md:text-base"
                        style={{ color: "rgba(0,0,0,0.7)" }}
                    >
                        Foglalj időpontot, és látogass el bemutató szalonunkba.
                    </p>
                </motion.div>

                {/* CONTENT */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    {/* LEFT SIDE */}
                    <motion.div
                        className="space-y-6 text-sm md:text-base"
                        style={{ color: "rgba(0,0,0,0.8)" }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <div className="flex items-center justify-between gap-4">
                            {/* Bal oldal: cím és konkrét cím */}
                            <div className="flex flex-col">
                                <p style={{ color: "var(--color-primary)", fontWeight: 500 }}>Cím</p>
                                <p>1138, Budapest Népfürdő utca 21/C</p>
                            </div>

                            {/* Jobb oldal: navigáció gomb */}
                            <a
                                href="https://maps.google.com?q=1138+Budapest+Népfürdő+utca+21/C"
                                target="_blank"
                                className="py-2 px-4 rounded-md text-sm transition"
                                style={{
                                    backgroundColor: "var(--color-primary)",
                                    color: "white"
                                }}
                                onMouseEnter={(e) => {
                                    const el = e.currentTarget as HTMLAnchorElement;
                                    el.style.backgroundColor = "var(--color-primary-hover)";
                                    el.style.color = "var(--color-gold)";
                                }}
                                onMouseLeave={(e) => {
                                    const el = e.currentTarget as HTMLAnchorElement;
                                    el.style.backgroundColor = "var(--color-primary)";
                                    el.style.color = "white";
                                }}
                            >
                                Navigálás
                            </a>
                        </div>

                        <div>
                            <p style={{ color: "var(--color-primary)", fontWeight: 500 }}>Telefonszám</p>
                            <a
                                href="tel:+36707880888"
                                className="transition hover:text-(--color-primary)"
                            >
                                06 70 788 0888
                            </a>
                        </div>

                        <div>
                            <p style={{ color: "var(--color-primary)", fontWeight: 500 }}>Nyitvatartás</p>
                            <p>Időpont egyeztetés alapján</p>
                        </div>

                        {/* BUTTONS */}
                        <div className="flex flex-col gap-4 pt-4">

                            <a
                                href="tel:+36707880888"
                                className="py-3 rounded-md text-center text-sm transition hover:opacity-90"
                                style={{ backgroundColor: "var(--color-primary)", color: "white" }}
                            >
                                Időpontfoglalás telefonon
                            </a>

                            <a
                                href="https://www.facebook.com/odetteszalon"
                                target="_blank"
                                className="py-3 rounded-md text-center text-sm border transition text-(--color-gold) hover:bg-(--color-gold) hover:text-white"
                                style={{ borderColor: "var(--color-gold)", }}
                            >
                                Facebook oldal megtekintése
                            </a>

                        </div>
                    </motion.div>

                    {/* RIGHT SIDE - MAP */}
                    <motion.div
                        className="w-full h-75 md:h-100 rounded-lg overflow-hidden shadow-md"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <iframe
                            src="https://www.google.com/maps?q=1138+Budapest+Népfürdő+utca+21/C&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}