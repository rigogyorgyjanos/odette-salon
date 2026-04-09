"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
    return (
        <section style={{ backgroundColor: "var(--color-background)" }}>
            <div className="w-full mx-auto">

                {/* SOCIAL */}
                <div
                    className="py-16 px-4 text-center"
                    style={{ backgroundColor: "var(--color-blush)" }}
                >
                    <motion.div
                        className="max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9 }}
                    >
                        <h2
                            className="text-3xl md:text-5xl font-serif mb-4"
                            style={{ color: "var(--color-primary)" }}
                        >
                            Kapcsolat
                        </h2>

                        <p className="text-base md:text-lg text-black/70">
                            Kövess minket inspirációkért és valódi menyasszonyi pillanatokért
                        </p>

                        <p
                            className="text-sm md:text-base mt-2"
                            style={{ color: "var(--color-primary)" }}
                        >
                            Valódi menyasszonyok. Valódi pillanatok.
                        </p>

                        {/* SOCIAL BUTTONS */}
                        <div className="flex flex-wrap justify-center gap-4 mt-8">

                            <a
                                href="https://www.facebook.com/odetteszalon"
                                target="_blank"
                                className="px-5 py-2.5 rounded-md text-sm border transition hover:scale-105  hover:text-white"
                                style={{
                                    color: "var(--color-primary)",
                                    borderColor: "var(--color-primary)",
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--color-primary)";
                                    (e.currentTarget as HTMLAnchorElement).style.color = "white";
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-primary)";
                                }} >
                                Facebook
                            </a>

                            <a
                                href="https://www.instagram.com/odette_menyasszonyi_ruhaszalon"
                                target="_blank"
                                className="px-5 py-2.5 rounded-md text-sm border transition hover:scale-105 hover:bg-(--color-primary) hover:text-white"
                                style={{
                                    color: "var(--color-primary)",
                                    borderColor: "var(--color-primary)",
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--color-primary)";
                                    (e.currentTarget as HTMLAnchorElement).style.color = "white";
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-primary)";
                                }} >
                                Instagram
                            </a>

                            <a
                                href="https://www.tiktok.com/@odetteeskuvoiruhaszalon"
                                target="_blank"
                                className="px-5 py-2.5 rounded-md text-sm border transition hover:scale-105 hover:bg-(--color-primary) hover:text-white"
                                style={{
                                    color: "var(--color-primary)",
                                    borderColor: "var(--color-primary)",
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--color-primary)";
                                    (e.currentTarget as HTMLAnchorElement).style.color = "white";
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-primary)";
                                }}
                            >
                                TikTok
                            </a>

                        </div>
                    </motion.div>
                </div>

                {/* CONTACT CONTENT */}
                <div className="py-16 px-4 max-w-6xl mx-auto">

                    <motion.h2
                        className="text-2xl md:text-3xl font-serif text-center mb-12"
                        style={{ color: "var(--color-primary)" }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Foglalj időpontot, és látogass el szalonunkba
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                        {/* LEFT */}
                        <motion.div
                            className="space-y-6 text-base md:text-lg"
                            style={{ color: "rgba(0,0,0,0.8)" }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            {/* ADDRESS */}
                            <div>
                                <p className="font-medium text-(--color-primary)">Cím</p>
                                <p>1138 Budapest, Népfürdő utca 21/C</p>

                                <a
                                    href="https://maps.google.com?q=1138+Budapest+Népfürdő+utca+21/C"
                                    target="_blank"
                                    className="inline-block mt-2 text-sm underline hover:opacity-70"
                                >
                                    Útvonalterv megnyitása
                                </a>
                            </div>

                            {/* PHONE */}
                            <div>
                                <p className="font-medium text-(--color-primary)">Telefonszám</p>
                                <a href="tel:+36707880888" className="hover:opacity-70">
                                    +36 70 788 0888
                                </a>
                            </div>

                            {/* HOURS */}
                            <div>
                                <p className="font-medium text-(--color-primary)">Nyitvatartás</p>
                                <p>Időpont egyeztetés alapján</p>
                            </div>

                            {/* CTA */}
                            <div className="pt-4">
                                <a
                                    href="tel:+36707880888"
                                    className="inline-block w-full py-3.5 rounded-md text-center text-base font-medium text-white transition hover:opacity-90"
                                    style={{ backgroundColor: "var(--color-primary)" }}
                                >
                                    Időpontfoglalás telefonon
                                </a>
                            </div>
                        </motion.div>

                        {/* MAP */}
                        <motion.div
                            className="w-full aspect-4/3 rounded-lg overflow-hidden shadow-md"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
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

            </div>
        </section>
    );
}