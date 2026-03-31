"use client"

export default function ContactSection() {
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
                        Kapcsolat
                    </h2>
                    <p className="text-sm md:text-base" style={{ color: "rgba(0,0,0,0.7)" }}>
                        Foglalj időpontot, és látogass el bemutató szalonunkba.
                    </p>
                </div>

                {/* CONTENT */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    {/* LEFT SIDE */}
                    <div className="space-y-6 text-sm md:text-base" style={{ color: "rgba(0,0,0,0.8)" }}>

                        <div>
                            <p style={{ color: "var(--color-primary)", fontWeight: 500 }}>Cím</p>
                            <p>1138, Budapest Népfürdő utca 21/C</p>
                        </div>

                        <div>
                            <p style={{ color: "var(--color-primary)", fontWeight: 500 }}>Telefonszám</p>
                            <a
                                href="tel:+36707880888"
                                style={{ color: "inherit" }}
                                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-primary)"; }}
                                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "inherit"; }}
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
                                className="py-3 rounded-md text-center text-sm transition"
                                style={{ backgroundColor: "var(--color-primary)", color: "white" }}
                                onMouseEnter={(e) => {
                                    const el = e.currentTarget as HTMLAnchorElement;
                                    el.style.backgroundColor = "var(--color-primary-hover)";
                                    el.style.color = "var(--color-gold)";
                                }}
                                onMouseLeave={(e) => {
                                    const el = e.currentTarget as HTMLAnchorElement;
                                    el.style.backgroundColor = "var(--color-primary)";
                                    el.style.color = "var(--color-white)";
                                }}
                            >
                                Időpontfoglalás telefonon
                            </a>

                            <a
                                href="https://www.facebook.com/odetteszalon"
                                target="_blank"
                                className="py-3 rounded-md text-center text-sm border transition"
                                style={{ borderColor: "var(--color-gold)", color: "var(--color-gold)" }}
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
                                Facebook oldal megtekintése
                            </a>

                        </div>
                    </div>

                    {/* RIGHT SIDE - MAP */}
                    <div className="w-full h-75 md:h-100 rounded-lg overflow-hidden shadow-md">
                        <iframe
                            src="https://www.google.com/maps?q=1138+Budapest+Népfürdő+utca+21/C&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}