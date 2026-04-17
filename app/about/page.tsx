"use client"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function AboutPage() {
    // Variants a tartalmi blokkokhoz (stagger)
    const contentVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
    };
    const MotionImage = motion(Image);

    return (
        <>
            <Navbar />
            <main>
                <section style={{ backgroundColor: "var(--color-background)" }}>


                    {/* HERO */}
                    <div className="relative w-full h-[50vh] md:h-[70vh]">
                        <MotionImage
                            src="/banner_about.webp"
                            loading="eager"
                            alt="Kollekciók"
                            priority
                            fill
                            className="object-cover"
                            initial={{ scale: 1.05 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}

                        />
                        <div className="absolute inset-0 bg-black/40" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h1 className="text-white text-3xl md:text-5xl font-serif">Rólunk</h1>
                        </div>
                    </div>

                    {/* CONTENT */}
                    <div className="px-6 md:px-10 py-20">
                        <div className="max-w-5xl mx-auto">

                            {/* INTRO */}
                            <motion.div
                                className="text-center mb-16"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={contentVariants}
                            >
                                <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-black/70">
                                    Régóta ismert, hogy egy esküvő legmeghatározóbb dísze maga a menyasszony.
                                    A tekintete, a kisugárzása és a ruhája együtt teremtik meg azt az emléket,
                                    amely örökre megmarad minden jelenlévő számára.
                                </p>
                            </motion.div>

                            {/* CONTENT BLOCKS */}
                            <motion.div
                                className="space-y-12 text-base md:text-lg leading-relaxed text-black/80"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={{
                                    hidden: {},
                                    visible: {
                                        transition: { staggerChildren: 0.2 }
                                    }
                                }}
                            >
                                {[
                                    "„Minőség elérhető áron.”",
                                    "Szalonunk mögött egy elkötelezett, szakértő csapat áll, akik nap mint nap azon dolgoznak, hogy a menyasszonyok megtalálják álmaik ruháját. Folyamatosan követjük a legújabb divattrendeket, gondosan válogatjuk ki az alapanyagokat és a legapróbb részletekre is kiemelt figyelmet fordítunk.",
                                    "Minden egyes ruhánk különleges. Nem csupán egy öltözék, hanem egy élmény, amely eleganciát, nőiességet és finom kifinomultságot sugároz. Olyan darabokat kínálunk, amelyek nemcsak szépek, hanem valóban megragadják a figyelmet és felejthetetlenné teszik a nagy napot.",
                                    "Tudjuk, hogy ma már számos szalon kínál menyasszonyi ruhákat. Mi mégis abban hiszünk, hogy a minőség és az egyediség nem kell, hogy elérhetetlen legyen. Nálunk olyan ruhákat találsz, amelyek sok esetben bérlési ár alatt megvásárolhatók — kompromisszumok nélkül.",
                                    "Szeretnénk, ha ezt Te magad is megtapasztalnád. Látogass el bemutató szalonunkba, ismerd meg kínálatunkat, és találd meg azt a ruhát, amelyben igazán önmagad lehetsz."
                                ].map((text, i) => (
                                    <motion.div
                                        key={i}
                                        variants={contentVariants}
                                        className={i === 0 ? "text-center italic text-xl" : ""}
                                        style={i === 0 ? { color: "var(--color-gold)" } : {}}
                                    >
                                        <p>{text}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                            {/* CTA */}
                            <motion.div
                                className="text-center mt-16"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            >
                                <a
                                    href="/contact"
                                    className="inline-block px-8 py-4 text-sm tracking-wide rounded-md transition text-white hover:opacity-90"
                                    style={{ backgroundColor: "var(--color-primary)" }}
                                >
                                    Időpontfoglalás
                                </a>
                            </motion.div>


                            {/* AWARD SECTION */}
                            <motion.div
                                className=" w-full mt-20 mb-10"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                style={{ backgroundColor: "var(--color-blush)" }}
                            >
                                <div
                                    className=" overflow-hidden shadow-sm md:flex"

                                >
                                    {/* IMAGE */}
                                    <div className="md:w-1/2 w-full">
                                        <img
                                            src="/turul_eskuvo_.png" // <-- ide tedd a képed
                                            alt="Turul Esküvő Díj 2024"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* TEXT */}
                                    <div className="md:w-1/2 w-full p-6 md:p-10 flex flex-col justify-center text-center md:text-left">

                                        {/* TITLE */}
                                        <h3
                                            className="text-xl md:text-2xl font-serif mb-4"
                                            style={{ color: "var(--color-primary)" }}
                                        >
                                            Turul Esküvő Díj 2024
                                        </h3>

                                        {/* TEXT */}
                                        <p className="text-sm md:text-base text-black/70 leading-relaxed mb-4">
                                            Büszkék vagyunk rá, hogy szalonunk elnyerte a{" "}
                                            <span style={{ color: "var(--color-primary)", fontWeight: 500 }}>
                                                2024-es Turul Esküvő Díjat
                                            </span>.
                                        </p>

                                        <p className="text-sm md:text-base text-black/70 leading-relaxed">
                                            Ez a szakmai elismerés visszaigazolja mindazt az elhivatottságot,
                                            figyelmet és minőséget, amit minden menyasszonyunknak nyújtunk.
                                        </p>

                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}