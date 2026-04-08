"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
    return (
        <section
            className=""
            style={{ backgroundColor: "var(--color-background)" }}
        >
            <div className="w-full mx-auto">

                {/* TITLE */}
                <motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* SOCIAL SECTION */}
                    <div className=" mt-6 mb-6 py-16 px-4 w-full justify-items-center"
                        style={{ backgroundColor: "var(--color-blush)" }}
                    >
                        <h2
                            className="text-2xl md:text-4xl font-serif mb-4"
                            style={{ color: "var(--color-primary)" }}
                        >
                            Kapcsolat
                        </h2>
                        <div className="py-4 text-center justify-items-center line">
                            <p
                                className="text-lg mb-4 text-center md:text-left"
                                style={{ color: "rgba(0,0,0,0.7)" }}
                            >
                                Kövess minket inspirációkért és valódi menyasszonyi pillanatokért
                            </p>
                            <p
                                className="text-sm mb-4 text-center md:text-left"
                                style={{ color: "var(--color-primary-hover)" }}
                            >
                                Valódi menyasszonyok. Valódi pillanatok. Inspiráció minden nap
                            </p>

                        </div>

                        <div className="grid grid-cols-2 gap-4 w-full max-w-md">

                            {/* FACEBOOK */}
                            <a
                                href="https://www.facebook.com/odetteszalon"
                                target="_blank"
                                className="flex items-center justify-center justify-self-center w-32 md:w-48 gap-2 px-4 py-2 rounded-md text-sm border transition hover:scale-105"
                                style={{
                                    color: "var(--color-primary)",
                                    borderColor: "var(--color-primary)"
                                }}
                                onMouseEnter={(e) => {
                                    const el = e.currentTarget;
                                    el.style.backgroundColor = "var(--color-primary)";
                                    el.style.color = "white";
                                }}
                                onMouseLeave={(e) => {
                                    const el = e.currentTarget;
                                    el.style.backgroundColor = "transparent";
                                    el.style.color = "var(--color-primary)";
                                }}
                            >
                                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6v2h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12z" />
                                </svg>
                                Facebook
                            </a>

                            {/* INSTAGRAM */}
                            <a
                                href="https://www.instagram.com/odette_menyasszonyi_ruhaszalon"
                                target="_blank"
                                className="flex items-center w-32 md:w-48 justify-center justify-self-center gap-2 px-4 py-2 rounded-md text-sm border transition hover:scale-105"
                                style={{
                                    color: "var(--color-primary)",
                                    borderColor: "var(--color-primary)"
                                }}
                                onMouseEnter={(e) => {
                                    const el = e.currentTarget;
                                    el.style.backgroundColor = "var(--color-primary)";
                                    el.style.color = "white";
                                }}
                                onMouseLeave={(e) => {
                                    const el = e.currentTarget;
                                    el.style.backgroundColor = "transparent";
                                    el.style.color = "var(--color-primary)";
                                }}
                            >
                                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 
            5-5V7c0-2.8-2.2-5-5-5H7zm5 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.9a1.1 
            1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
                                </svg>
                                Instagram
                            </a>

                            {/* TIKTOK */}
                            <a
                                href="https://www.tiktok.com/@odetteeskuvoiruhaszalon"
                                target="_blank"
                                className="col-span-2 justify-self-center w-32 md:w-48 flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm border transition hover:scale-105"
                                style={{
                                    color: "var(--color-primary)",
                                    borderColor: "var(--color-primary)"
                                }}
                                onMouseEnter={(e) => {
                                    const el = e.currentTarget;
                                    el.style.backgroundColor = "var(--color-primary)";
                                    el.style.color = "white";
                                }}
                                onMouseLeave={(e) => {
                                    const el = e.currentTarget;
                                    el.style.backgroundColor = "transparent";
                                    el.style.color = "var(--color-primary)";
                                }}
                            >
                                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M16 3c.3 2.3 1.9 4.1 4 4.4v3a7.7 7.7 0 0 1-4-1.2v6.2a5.2 
            5.2 0 1 1-5.2-5.2c.3 0 .6 0 .9.1v3.1a2.2 2.2 0 1 0 1.3 2V3h3z"/>
                                </svg>
                                TikTok
                            </a>

                        </div>
                    </div>

                </motion.div>


                {/* CONTENT */}
                <div className="py-2 px-4 max-w-6xl mx-auto ">
                    <h2
                        className="text-xl md:text-2xl font-serif py-10 text-center"
                        style={{ color: "var(--color-primary)" }}
                    >
                        Foglalj időpontot, és látogass el bemutató szalonunkba.
                    </h2>
                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 items-center ">

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
                                    Útvonalterv
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

            </div>
        </section>
    );
}