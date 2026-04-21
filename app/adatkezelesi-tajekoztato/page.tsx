"use client";

import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const sections = [
    {
        title: "1. Adatkezelő adatai",
        content: `Név: Szőllősi Hajnalka egyéni vállalkozó
Székhely: 1138 Budapest, Népfürdő utca 19/B
Email: info@odetteszalon.hu`,
    },
    {
        title: "2. Kezelt adatok köre",
        content: `A weboldal nem tartalmaz kapcsolatfelvételi űrlapot és nem gyűjt aktívan személyes adatokat.

A látogatók az alábbi módokon léphetnek kapcsolatba:
- telefonhívás
- Facebook oldal
- e-mail küldése

E-mailes kapcsolatfelvétel esetén a feladó által megadott adatok (név, e-mail cím, üzenet tartalma) kerülnek kezelésre.`,
    },
    {
        title: "3. Adatkezelés célja és jogalapja",
        content: `Az adatkezelés célja:
- kapcsolatfelvétel
- kommunikáció

Az adatkezelés jogalapja az érintett önkéntes hozzájárulása.`,
    },
    {
        title: "4. Adatmegőrzés ideje",
        content: `A beérkező e-maileket a szolgáltató legfeljebb 1 évig tárolja.

A weboldal működéséhez szükséges technikai adatok megőrzési ideje legfeljebb 30 nap.`,
    },
    {
        title: "5. Adatfeldolgozó",
        content: `Tárhelyszolgáltató:

Név: ALINF BT
Székhely: 2131 Göd, Köztársaság út 26
Weboldal: https://www.alinf.hu/

Az adatfeldolgozó a weboldal működéséhez szükséges technikai műveleteket végzi.`,
    },
    {
        title: "6. Külső szolgáltatás (Google Maps)",
        content: `A weboldal Google Maps térképet használ.

A térkép megjelenítése során a Google – mint külső szolgáltató – személyes adatokat (például IP cím) kezelhet.

Ezen adatkezelés a Google saját adatkezelési szabályzata szerint történik:
https://policies.google.com/privacy`,
    },
    {
        title: "7. Sütik (cookie-k)",
        content: `A weboldal nem használ saját sütiket és nem végez látogatói elemzést.

A beágyazott külső szolgáltatás (Google Maps) azonban elhelyezhet sütiket a látogató eszközén.`,
    },
    {
        title: "8. Érintetti jogok",
        content: `Az érintett jogosult:
- tájékoztatást kérni az adatkezelésről
- kérni adatai helyesbítését
- kérni adatai törlését
- tiltakozni az adatkezelés ellen

A szolgáltató a kérelmekre legkésőbb 30 napon belül válaszol.`,
    },
    {
        title: "9. Jogorvoslati lehetőségek",
        content: `Az érintett panasszal élhet a Nemzeti Adatvédelmi és Információszabadság Hatóságnál (NAIH).

Weboldal: https://naih.hu`,
    },
];

export default function AdatvedelemPage() {
    return (
        <>
            <Navbar />
            <div className="mt-5 bg-[var(--color-background)] text-gray-800">
                <div className="max-w-4xl mx-auto px-6 py-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-4xl text-[var(--color-primary)] mb-4"
                    >
                        Adatkezelési tájékoztató
                    </motion.h1>

                    <p className="text-sm text-gray-500 border-l-2 pl-4 border-[var(--color-gold)]">
                        Hatályos: visszavonásig
                    </p>
                </div>

                <div className="max-w-4xl mx-auto px-6 pb-20 space-y-8">
                    {sections.map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="rounded-2xl p-6 md:p-8 bg-white border border-gray-100 hover:border-[var(--color-gold)] transition"
                        >
                            <h2 className="text-xl md:text-2xl text-[var(--color-primary)] mb-4">
                                {section.title}
                            </h2>

                            <p className="whitespace-pre-line leading-relaxed text-gray-700">
                                {section.content}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}
