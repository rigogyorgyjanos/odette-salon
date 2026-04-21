"use client";

import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

type Section = {
    title: string;
    content: string;
    highlight?: boolean;
};

const sections: Section[] = [
    {
        title: "1. Általános rendelkezések",
        content: `Jelen Általános Szerződési Feltételek (továbbiakban: ÁSZF) az Odette Menyasszonyi Ruhaszalon (továbbiakban: Szolgáltató) és a vele szerződéses jogviszonyba lépő természetes személy (továbbiakban: Vásárló) között jönnek létre.

A Vásárló a termék megvásárlásával elfogadja a jelen ÁSZF-ben foglalt feltételeket.`,
    },
    {
        title: "2. Szolgáltatás tárgya",
        content: `A Szolgáltató kizárólag menyasszonyi ruhákat és azok kiegészítőit (például: fátyol, öv, ékszer stb.) értékesít.

Bérbeadás, foglalás vagy részletfizetés nem lehetséges.

A vásárlás személyesen, a szalonban történik, a teljes vételár egyösszegű megfizetésével.`,
    },
    {
        title: "3. Fizetés és átvétel",
        content: `A ruhák és kiegészítők vételára a vásárláskor, az átvétellel egyidejűleg fizetendő.

A vásárlás végleges, a fizetés megtörténtével a termék a Vásárló tulajdonába kerül.`,
    },
    {
        title: "4. Visszavásárlás és elállás",
        content: `A Szolgáltató semmilyen körülmények között nem vásárol vissza eladott ruhát, kiegészítőt vagy bármely terméket.

Ez alól nincs kivétel, függetlenül attól, hogy a ruha mérete, stílusa, színe, vagy bármely más tulajdonsága a későbbiekben nem felel meg a Vásárló igényeinek, vagy az esküvő bármilyen okból elmarad.

Személyes vásárlás esetén – a hatályos jogszabályok alapján – nem illeti meg a Vásárlót az elállás vagy a visszavásárlás joga.

A ruhák kipróbálására és megtekintésére vásárlás előtt lehetőség van, így a döntés minden esetben tudatosan történik.`,
        highlight: true,
    },
    {
        title: "5. Adatkezelés",
        content: `A Szolgáltató a Vásárló személyes adatait kizárólag a vásárlás teljesítése és számlázás céljából kezeli, a vonatkozó adatvédelmi előírásoknak megfelelően.`,
    },
    {
        title: "6. Záró rendelkezések",
        content: `A jelen ÁSZF-ben nem szabályozott kérdésekben a Polgári Törvénykönyv rendelkezései az irányadóak.

A Szolgáltató fenntartja a jogot jelen ÁSZF módosítására, amely a közzététel napjától érvényes.`,
    },
];

export default function ASZFPage() {
    return (
        <>
            <Navbar />
            <div className="mt-5 bg-(--color-background) text-gray-800">
                {/* HEADER */}
                <div className="max-w-4xl mx-auto px-6 py-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl text-(--color-primary) mb-4"
                    >
                        Általános Szerződési Feltételek
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-sm text-gray-500 space-y-1 border-l-2 pl-4 border-(--color-gold)"
                    >
                        <p>Érvényes: 2022. február 22-től visszavonásig</p>
                        <p>Kibocsátó: Odette Menyasszonyi Ruhaszalon</p>
                        <p>Email: odetteszalon@gmail.com</p>
                    </motion.div>
                </div>

                {/* CONTENT */}
                <div className="max-w-4xl mx-auto px-6 pb-20 space-y-8">
                    {sections.map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className={`rounded-2xl p-6 md:p-8 border transition-all ${section.highlight
                                ? "bg-(--color-blush) border-(--color-gold)"
                                : "bg-white border-gray-100 hover:border-(--color-gold)"
                                }`}
                        >
                            <h2 className="text-xl md:text-2xl text-(--color-primary) mb-4">
                                {section.title}
                            </h2>

                            <p className="leading-relaxed whitespace-pre-line text-gray-700">
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