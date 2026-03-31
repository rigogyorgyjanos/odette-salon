"use client"

import Image from "next/image";
import Link from "next/link";

const collections = [
    {
        title: "Klasszikus elegancia",
        image: "/classic.jpg",
    },
    {
        title: "Modern minimalizmus",
        image: "/modern.jpg",
    },
    {
        title: "Plus size ",
        image: "/plus_size.jpg",
    },
];

export default function CollectionPreview() {
    return (
        <section
            className="py-16 px-4"
            style={{ backgroundColor: "var(--color-background)" }}
        >
            <div className="max-w-6xl mx-auto">

                {/* TITLE */}
                <div className="text-center mb-10">
                    <h2
                        className="text-2xl md:text-4xl font-serif mb-4"
                        style={{ color: "var(--color-primary)" }}
                    >
                        Kollekciók
                    </h2>
                    <p className="text-sm md:text-base" style={{ color: "rgba(0,0,0,0.6)" }}>
                        Fedezd fel különböző stílusainkat, és találd meg a hozzád illőt.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {collections.map((item, index) => (
                        <div
                            key={index}
                            className="group relative w-full h-75 overflow-hidden rounded-lg"
                        >
                            {/* IMAGE */}
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition duration-500 group-hover:scale-105"
                            />

                            {/* OVERLAY */}
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />

                            {/* TEXT */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h3
                                    className="text-lg font-serif text-center px-2"
                                    style={{ color: "white" }}
                                >
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-10">
                    <Link
                        href="https://www.facebook.com/odetteszalon/photos"
                        className="inline-block px-6 py-3 rounded-md text-sm border transition"
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
        </section>
    );
}