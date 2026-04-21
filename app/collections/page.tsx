"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion, Variants } from "framer-motion";

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

// Visszafogott animáció variáns
const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

const MotionImage = motion.create(Image);

export default function CollectionsPage() {
    return (
        <>
            <Navbar />
            <main style={{ backgroundColor: "var(--color-background)" }}>

                {/* HERO */}
                <div className="relative w-full h-[50vh] md:h-[75vh] overflow-hidden">
                    <MotionImage
                        src="/collection-banner.webp"
                        loading="eager"
                        alt="Kollekciók"
                        priority
                        fill
                        className=" object-cover lg:object-[5%_30%] "
                        initial={{ scale: 1.05 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}

                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-white text-3xl md:text-5xl font-serif">Kollekciók</h1>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto px-6">

                    {/* TEXT 1 */}
                    <div className="py-20 text-center max-w-3xl mx-auto space-y-6 text-black/70 text-lg leading-relaxed">
                        <p>
                            Ahogy megérkezel szalonunkba, kitárul előtted az Odette menyasszonyi világa – egy
                            meghitt, elegáns tér, ahol minden részlet a tökéletességet szolgálja.
                        </p>
                    </div>

                    {/* COLLECTION GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-6 mb-20">
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
                    </div>

                    {/* TEXT 2 */}
                    <div className="py-20 max-w-3xl mx-auto text-center text-black/70 text-lg leading-relaxed space-y-6">
                        <p>
                            Kollekciónk rendkívül gazdag: vintage, tüll, szatén és csipke ruhák, különleges nyakkivágásokkal,
                            áttört hátmegoldásokkal, finom részletekkel és egyedi díszítésekkel.
                        </p>
                        <p>
                            Minden darab azért született, hogy megtaláld azt az egyetlen ruhát, amely igazán rólad szól.
                        </p>
                    </div>

                </div>
            </main >
            <Footer />
        </>
    );
}