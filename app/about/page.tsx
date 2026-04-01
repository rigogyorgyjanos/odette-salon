import Footer from "../components/Footer";
import Navbar from "../components/Navbar"

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main>
                <section style={{ backgroundColor: "var(--color-background)" }}>

                    {/* HERO IMAGE */}
                    <div className="relative w-full h-[50vh] md:h-[65vh] overflow-hidden">
                        <img
                            src="/banner-img-about.webp"
                            alt="Rólunk banner"
                            className="w-full h-full object-cover"
                        />

                        {/* OVERLAY */}
                        <div className="absolute inset-0 bg-black/60" />

                        {/* HERO TEXT */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h1 className="text-white text-3xl md:text-5xl font-serif tracking-wide">
                                Rólunk
                            </h1>
                        </div>
                    </div>

                    {/* CONTENT */}
                    <div className="px-6 md:px-10 py-20">
                        <div className="max-w-5xl mx-auto">

                            {/* INTRO */}
                            <div className="text-center mb-16">
                                <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-black/70">
                                    Régóta ismert, hogy egy esküvő legmeghatározóbb dísze maga a menyasszony.
                                    A tekintete, a kisugárzása és a ruhája együtt teremtik meg azt az emléket,
                                    amely örökre megmarad minden jelenlévő számára.
                                </p>
                            </div>

                            {/* CONTENT BLOCKS */}
                            <div className="space-y-12 text-base md:text-lg leading-relaxed text-black/80">

                                {/* MISSION */}
                                <div className="text-center">
                                    <p className="italic text-xl" style={{ color: "var(--color-gold)" }}>
                                        „Minőség elérhető áron.”
                                    </p>
                                </div>

                                <div>
                                    <p>
                                        Szalonunk mögött egy elkötelezett, szakértő csapat áll, akik nap mint nap
                                        azon dolgoznak, hogy a menyasszonyok megtalálják álmaik ruháját.
                                        Folyamatosan követjük a legújabb divattrendeket, gondosan válogatjuk ki
                                        az alapanyagokat és a legapróbb részletekre is kiemelt figyelmet fordítunk.
                                    </p>
                                </div>

                                <div>
                                    <p>
                                        Minden egyes ruhánk különleges. Nem csupán egy öltözék, hanem egy élmény,
                                        amely eleganciát, nőiességet és finom kifinomultságot sugároz.
                                        Olyan darabokat kínálunk, amelyek nemcsak szépek, hanem valóban
                                        megragadják a figyelmet és felejthetetlenné teszik a nagy napot.
                                    </p>
                                </div>

                                <div>
                                    <p>
                                        Tudjuk, hogy ma már számos szalon kínál menyasszonyi ruhákat.
                                        Mi mégis abban hiszünk, hogy a minőség és az egyediség nem kell,
                                        hogy elérhetetlen legyen. Nálunk olyan ruhákat találsz,
                                        amelyek sok esetben bérlési ár alatt megvásárolhatók —
                                        kompromisszumok nélkül.
                                    </p>
                                </div>

                                <div>
                                    <p>
                                        Szeretnénk, ha ezt Te magad is megtapasztalnád.
                                        Látogass el bemutató szalonunkba, ismerd meg kínálatunkat,
                                        és találd meg azt a ruhát, amelyben igazán önmagad lehetsz.
                                    </p>
                                </div>

                            </div>

                            {/* CTA */}
                            <div className="text-center mt-16">
                                <a
                                    href="/contact"
                                    className="inline-block px-8 py-4 text-sm tracking-wide rounded-md transition text-white hover:opacity-90"
                                    style={{ backgroundColor: "var(--color-primary)" }}
                                >
                                    Időpontfoglalás
                                </a>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}