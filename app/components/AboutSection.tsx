export default function AboutSection() {
    return (
        <section
            className="py-16 px-4"
            style={{ backgroundColor: "var(--color-blush)" }}
        >
            <div className="max-w-4xl mx-auto text-center">

                {/* TITLE */}
                <h2
                    className="text-2xl md:text-4xl font-serif mb-8"
                    style={{ color: "var(--color-primary)" }}
                >
                    Rólunk
                </h2>

                {/* TEXT */}
                <div
                    className="space-y-6 text-sm md:text-base leading-relaxed"
                    style={{ color: "rgba(0,0,0,0.7)" }}
                >
                    <p>
                        Régóta ismert, hogy az esküvő fő dekorációja a menyasszony.
                        Az ő szerelmes szemei sugároznak boldogságot, és egy minőségi
                        esküvői ruha, amelyre minden jelenlévő emlékezni fog ezen az ünnepen.
                    </p>

                    <p style={{ color: "var(--color-primary)", fontWeight: 500 }}>
                        Fő küldetésünk: minőség elérhető áron!
                    </p>

                    <p>
                        Profi csapat dolgozik a tökéletes menyasszonyi ruhák megalkotásán,
                        akik folyamatosan követik a legújabb divattrendeket, a legjobb ötleteket,
                        minőségi anyagokat és kiegészítőket használnak fel a gyártás során.
                        Ezért minden ruha exkluzív, egyedi, tökéletes.
                    </p>

                    <p>
                        A menyasszonyi ruha ne csak szép legyen, hanem el is kell varázsolnia
                        és lekötni a férj és vendégek figyelmét. Ruháink tele vannak eleganciával,
                        nőiességgel és gyengédséggel.
                    </p>

                    <p>
                        Manapság számos szalon kínál gyönyörű esküvői ruhákat. Ennek ellenére
                        biztosak vagyunk abban, hogy nálunk bérlési ár alatt vásárolhatsz
                        minőségi, egyedi menyasszonyi ruhát, és nem fogsz csalódni.
                    </p>

                    <p>
                        Annak érdekében, hogy megismerkedj kínálatunkkal és meggyőződhess a ruhák
                        minőségéről és rendkívül kedvező árukról, javasoljuk, hogy látogass el
                        bemutató szalonunkba. Kérj időpontot ruhapróbára. Szeretettel várunk!
                    </p>
                </div>

                {/* CTA */}
                <div className="mt-10">
                    <a
                        href="tel:+36707880888"
                        className="inline-block px-6 py-3 rounded-md text-sm transition"
                        style={{
                            backgroundColor: "var(--color-primary)",
                            color: "white",
                        }}
                    >
                        Időpontfoglalás telefonon
                    </a>
                </div>

            </div>
        </section>
    );
}