"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const collections = [
    {
        title: "Klasszikus elegancia",
        image: "/classic.webp",
    },
    {
        title: "Modern minimalizmus",
        image: "/modern.webp",
    },
    {
        title: "Plus size",
        image: "/plus_size.webp",
    },
];

export default function CollectionsPage() {
    return (
        <>
            <Navbar />
            <main style={{ backgroundColor: "var(--color-background)" }}>

                {/* HERO */}
                <div className="relative w-full h-[50vh] md:h-[60vh]">
                    <Image
                        src="/collection-banner.jpg"
                        alt="Kollekciók"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-white text-3xl md:text-5xl font-serif">
                            Kollekciók
                        </h1>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto px-6">

                    {/* TEXT 1 */}
                    <div className="py-20 text-center max-w-3xl mx-auto space-y-6 text-black/70 text-lg leading-relaxed">
                        <p>
                            Ahogy megérkezel szalonunkba, kitárul előtted az Odette
                            menyasszonyi világa – egy meghitt, elegáns tér,
                            ahol minden részlet a tökéletességet szolgálja.
                        </p>
                    </div>

                    {/* COLLECTION 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                        {collections.map((item, index) => (
                            <div
                                key={index}
                                className="group relative w-full h-80 overflow-hidden rounded-lg"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h3 className="text-white text-lg md:text-xl font-serif text-center px-4">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* TEXT 2 */}
                    <div className="py-20 max-w-3xl mx-auto text-center text-black/70 text-lg leading-relaxed space-y-6">
                        <p>
                            Kollekciónk rendkívül gazdag: vintage, tüll, szatén és csipke
                            ruhák, különleges nyakkivágásokkal, áttört hátmegoldásokkal,
                            finom részletekkel és egyedi díszítésekkel.
                        </p>

                        <p>
                            Minden darab azért született, hogy megtaláld azt az egyetlen ruhát,
                            amely igazán rólad szól.
                        </p>
                    </div>

                    {/* FEATURED IMAGE BLOCK (prémium érzet!!)
                    <div className="relative w-full h-100 md:h-125 mb-20 rounded-lg overflow-hidden">
                        <Image
                            src="/classic.jpg"
                            alt="Kiemelt kollekció"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30" />
                    </div> */}
                </div >
                <div className=" bg-pink-50 w-full">

                    {/* TEXT 3 */}
                    <div className="py-20  mx-auto text-center text-black/70 text-lg leading-relaxed space-y-6">
                        <p>
                            Csapatunk elkötelezetten segít abban, hogy a választás élmény legyen.
                            Szakértő tanácsadóink egy barátságos, családias környezetben
                            kísérnek végig a ruhapróba minden pillanatán.
                        </p>

                        <p>
                            A menyasszonyi ruha több mint egy öltözék – egy szimbólum.
                            Egy pillanat, amely örökre megmarad.
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="text-center pb-20 space-y-6">
                        <p className="text-black/70">
                            Tekintsd meg teljes kínálatunkat, és inspirálódj további modelljeinkből.
                        </p>

                        <Link
                            href="https://www.facebook.com/odetteszalon/photos"
                            target="_blank"
                            className="inline-block px-8 py-4 rounded-md text-sm border transition"
                            style={{
                                borderColor: "var(--color-gold)",
                                color: "var(--color-gold)",
                            }}
                            onMouseEnter={(e) => {
                                const el = e.currentTarget as HTMLAnchorElement;
                                el.style.backgroundColor = "var(--color-gold)";
                                el.style.color = "white";
                            }}
                            onMouseLeave={(e) => {
                                const el = e.currentTarget as HTMLAnchorElement;
                                el.style.backgroundColor = "transparent";
                                el.style.color = "var(--color-gold)";
                            }}
                        >
                            Facebook katalógus megtekintése
                        </Link>
                    </div>

                </div>
            </main>
            <Footer />
        </>
    );
}