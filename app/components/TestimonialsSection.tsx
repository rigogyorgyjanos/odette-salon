"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const reviews = [
    {
        name: "Anett Potornai",
        text: "Nagyon jó élmény volt a ruhapróba, minden percét élveztem! Délia rendkívül kedves, türelmes és segítőkész volt, végig figyelt az elképzeléseimre. Ennek köszönhetően sikeresen meg is találtam A ruhámat. 🙌Szívből ajánlom az üzletet minden menyasszonynak!❤️",
        rating: 5,
    },
    {
        name: "Hegedűs Szilvia",
        text: "Nagyon köszönöm a csodaszép ruhát és a kedves kiszolgálást. Igazi élményt adtok ami sokat levesz a készülődés miatti stresszből. Délia nagyon figyelmes és kedves volt, látta milyen ruhában érzem jól magam és mindenben segített, nem siettetett. Fel tudtam próbálni amiket kinéztem, könnyen ki is zártuk ami nem illett hozzám és az utolsó két esélyes ruhát is többször felvehettem. IGEN-t mondtam a ruhára, és nagyon örülök, hogy ide jöttem először és nem kell tovább keresnem 🤍",
        rating: 5,
    },
    {
        name: "Lili Tárnyik",
        text: "Az első ruhaszalon ahol jártam, és meg is találtam az álomruhámat! 😍 A kiszolgálás már az időpontfoglalástól kezdve profi volt, a próba jó hangulatához pedig Délia segítőkészsége és szakértelme nagyon sokat hozzátett! Minden menyasszonynak csak ajánlani tudom, ár-érték arányban, minőségben 10/10!",
        rating: 5,
    },
    {
        name: "Sz. Dominika",
        text: "Csodálatos élmény volt a szalonban! A ruhák gyönyörűek és minden apró részletre figyelnek. Hajni és Orsi rendkívül kedvesek, segítőkészek és türelmesek, végig támogattak a választásban. A próba hangulata stresszmentes és örömteli volt, a ruha pedig egyszerűen tökéletes lett 🥰",
        rating: 5,
    },
    {
        name: "Barbara Berko",
        text: "**boldogság** Hajni szuper munkát végzett Negatívan, tele önkritikával mentem be - azt hittem, hogy semmi nem fog jól állni. De Hajni segítségével boldogan és a megfelelő ruhával távoztam. Rögtön tudta, mi előnyös és kényelmes is egyben. Ezer köszönet neked 🩷",
        rating: 5,
    },
    {
        name: "Edina Barandi",
        text: "A szalon szép és elegáns, már belépve kellemes érzés tölti el az embert. Óriási segítőkészséget, szakértelmet és figyelmet kaptam végig a próba során. Bár volt konkrét elképzelésem, mégis minden egyes ajánlott ruha csodaszép volt. Az első és utolsó szalon volt ahol jártam, és egy gyönyörű ruhával jöttem haza. Mindenkinek csak ajánlani tudom Őket!🥰",
        rating: 5,
    },
];

export default function TestimonialsSection() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    return (
        <section id="testimonials" className="py-16 px-4 bg-white">
            <div className="max-w-5xl mx-auto text-center">

                {/* TITLE */}
                <motion.h2
                    className="text-2xl md:text-4xl font-serif mb-12"
                    style={{ color: "var(--color-primary)" }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Rólunk mondták
                </motion.h2>

                {/* SLIDER */}
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {reviews.map((review, i) => {
                        const isExpanded = expandedIndex === i;
                        const isLong = review.text.length > 220;

                        return (
                            <SwiperSlide key={i} className="h-auto">
                                <motion.div
                                    className="h-full flex flex-col p-6 rounded-xl shadow-sm text-left transition hover:shadow-md"
                                    style={{ backgroundColor: "var(--color-background)" }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    {/* STARS */}
                                    <div className="mb-3 text-(--color-gold)">
                                        {"★".repeat(review.rating)}
                                    </div>

                                    {/* TEXT */}
                                    <div className="relative grow mb-4">
                                        <p className="text-sm italic">
                                            “
                                            {isExpanded || !isLong
                                                ? review.text
                                                : review.text.slice(0, 220)}
                                            ”
                                        </p>

                                        {/* FADE EFFECT */}
                                        {!isExpanded && isLong && (
                                            <div
                                                className="absolute bottom-0 left-0 w-full h-12"
                                                style={{
                                                    background:
                                                        "linear-gradient(to top, var(--color-background), transparent)",
                                                }}
                                            />
                                        )}
                                    </div>

                                    {/* BUTTON */}
                                    {isLong && (
                                        <button
                                            onClick={() =>
                                                setExpandedIndex(isExpanded ? null : i)
                                            }
                                            className="text-xs mb-3 underline"
                                            style={{ color: "var(--color-primary)" }}
                                        >
                                            {isExpanded ? "Kevesebb" : "Bővebben"}
                                        </button>
                                    )}

                                    {/* NAME */}
                                    <p
                                        className="font-medium text-sm mt-auto"
                                        style={{ color: "var(--color-primary)" }}
                                    >
                                        – {review.name}
                                    </p>

                                    {/* SOURCE */}
                                    <p className="text-xs opacity-60 mt-2">
                                        Google értékelés
                                    </p>
                                </motion.div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>

                {/* CTA */}
                {/* <div className="mt-10">
                    <a
                        href="#"
                        target="_blank"
                        className="inline-block px-6 py-3 rounded-md text-sm transition hover:opacity-90"
                        style={{
                            backgroundColor: "var(--color-primary)",
                            color: "white",
                        }}
                    >
                        További vélemények Google-on
                    </a>
                </div> */}

            </div>
        </section>
    );
}