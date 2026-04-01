export default function Footer() {
    return (
        <footer
            className=" border-t"
            style={{ borderColor: "rgba(0,0,0,0.08)", backgroundColor: "var(--color-background)" }}
        >
            <div className="max-w-6xl mx-auto px-6 py-12">

                {/* TOP */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                    {/* LOGO */}
                    <div className="flex flex-col items-center md:items-start gap-3">
                        <img
                            src="/logo.png"
                            alt="Odette Szalon"
                            className="h-30 "
                        />
                        
                    </div>

                    {/* NAV */}
                    <div className="flex gap-6 text-sm text-black/70 underline underline-offset-2">
                        <a href="/" className="hover:text-black transition">Főoldal</a>
                        <a href="/about" className="hover:text-black transition">Rólunk</a>
                        <a href="/collections" className="hover:text-black transition">Kollekció</a>
                        <a href="/contact" className="hover:text-black transition">Kapcsolat</a>
                    </div>

                    {/* CONTACT */}
                    <div className="text-sm text-black/70 text-center md:text-right space-y-1">
                        <p>1138 Budapest, Népfürdő utca 21/C</p>
                        <a href="tel:+36707880888" className="block hover:text-black transition">
                            +36 70 788 0888
                        </a>
                    </div>

                </div>

                {/* DIVIDER */}
                <div className="my-10 h-px bg-black/10" />

                {/* BOTTOM */}
                <div className="flex flex-col md:flex-row items-center justify-between text-xs text-black/50 gap-4">

                    <p>© {new Date().getFullYear()} Odette Menyasszonyi Ruhaszalon. Minden jog fenntartva.</p>

                    <div className="flex gap-4">
                        <a
                            href="https://www.facebook.com/odetteszalon"
                            target="_blank"
                            className="hover:text-black transition"
                        >
                            Facebook
                        </a>
                    </div>

                </div>

            </div>
        </footer>
    );
}