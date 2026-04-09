"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section
            className="py-16 px-4"
            style={{ backgroundColor: "var(--color-blush)" }}
        >
            <div className="max-w-2xl md:max-w-3xl mx-auto text-center">

                {/* TITLE */}
                <motion.h2
                    className="text-2xl md:text-4xl font-serif mb-8"
                    style={{ color: "var(--color-primary)" }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    Rólunk
                </motion.h2>

                {/* TEXT BLOCK */}
                <motion.div
                    className="space-y-5 md:space-y-6 text-base md:text-lg leading-relaxed will-change-transform"
                    style={{ color: "rgba(0,0,0,0.7)" }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    <p>
                        Régóta ismert, hogy az esküvő fő dekorációja a menyasszony.
                        Az ő szerelmes szemei sugároznak boldogságot, és egy minőségi
                        esküvői ruha, amelyre minden jelenlévő emlékezni fog ezen az ünnepen.
                    </p>

                    <p className="text-lg md:text-xl font-semibold" style={{ color: "var(--color-primary)" }}>
                        Fő küldetésünk: minőség elérhető áron!
                    </p>

                    <p>
                        Profi csapat dolgozik a tökéletes menyasszonyi ruhák megalkotásán,
                        akik folyamatosan követik a legújabb divattrendeket, a legjobb ötleteket,
                        minőségi anyagokat és kiegészítőket használnak fel a gyártás során.
                        Ezért minden ruha exkluzív, egyedi, tökéletes.
                    </p>

                    <p>
                        A menyasszonyi ruha ne csak szép legyen, hanem el is kell varázsolnia
                        és lekötni a férj és vendégek figyelmét. Ruháink tele vannak eleganciával,
                        nőiességgel és gyengédséggel.
                    </p>

                    <p>
                        Manapság számos szalon kínál gyönyörű esküvői ruhákat. Ennek ellenére
                        biztosak vagyunk abban, hogy nálunk bérlési ár alatt vásárolhatsz
                        minőségi, egyedi menyasszonyi ruhát, és nem fogsz csalódni.
                    </p>

                    <p>
                        Annak érdekében, hogy megismerkedj kínálatunkkal és meggyőződhess a ruhák
                        minőségéről és rendkívül kedvező árukról, javasoljuk, hogy látogass el
                        bemutató szalonunkba. Kérj időpontot ruhapróbára. Szeretettel várunk!
                    </p>
                </motion.div>

                {/* CTA */}
                <motion.div
                    className="mt-12 md:mt-14"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                >
                    <a
                        href="tel:+36707880888"
                        className="inline-block px-7 py-3.5 rounded-md text-base font-medium transition hover:opacity-90"
                        style={{
                            backgroundColor: "var(--color-primary)",
                            color: "white",
                        }}
                    >
                        Időpontfoglalás telefonon
                    </a>
                </motion.div>

            </div>
        </section>
    );
}