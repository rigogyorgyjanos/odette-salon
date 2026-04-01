"use client";

export default function Hero() {
    return (
        <section className="relative w-full h-[90vh] flex items-center justify-center text-center">

            {/* BACKGROUND IMAGE */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/hero.jpg')",
                }}
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/60 to-black/80" />

            {/* CONTENT */}
            <div className="relative z-10 px-6 max-w-xl">

                <h1
                    className="text-3xl md:text-5xl font-serif leading-tight mb-6"
                    style={{ color: "var(--color-primary)" }}
                >
                    Találd meg álmaid ruháját
                </h1>

                <p
                    className="text-sm md:text-base mb-8"
                    style={{ color: "rgba(255,255,255,0.9)" }}
                >
                    Prémium menyasszonyi ruhák, folyamatosan megújuló kollekcióval.
                </p>

                {/* CTA BUTTONS */}
                <div className="flex flex-col gap-4 backdrop-blur-2xl">

                    {/* PHONE CTA */}
                    <a
                        href="tel:+36707880888"
                        className="py-3 rounded-md text-sm tracking-wide transition"
                        style={{
                            backgroundColor: "var(--color-primary)",
                            color: "white",
                        }}
                    >
                        Időpontfoglalás telefonon
                    </a>

                    {/* FACEBOOK CTA */}
                    <a
                        href="https://www.facebook.com/odetteszalon"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3 rounded-md text-sm tracking-wide transition border"
                        style={{
                            borderColor: "var(--color-gold)",
                            color: "var(--color-gold)",
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                                "var(--color-gold)";
                            (e.currentTarget as HTMLAnchorElement).style.color = "white";
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                                "transparent";
                            (e.currentTarget as HTMLAnchorElement).style.color =
                                "var(--color-gold)";
                        }}
                    >
                        Facebook oldal megtekintése
                    </a>

                </div>
            </div>
        </section>
    );
}