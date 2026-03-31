"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav
            className="w-full shadow-sm fixed top-0 left-0 z-50"
            style={{ backgroundColor: "var(--color-background)" }}
        >
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">


                {/* LOGO */}
                <div className="flex flex-row gap-2 justify-items-center align-middle ">
                    {/* <img src="/logo.png" alt="logo" width={"30px"} /> */}
                    <Link
                        href="/"
                        className="font-serif text-xl tracking-wide"
                        style={{ color: "var(--color-primary)" }}
                    >
                        ODETTE
                    </Link>

                </div>

                {/* MOBILE MENU BUTTON */}
                <button
                    className="md:hidden font-bold text-2xl"
                    style={{ color: "var(--color-primary)" }}
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>

                {/* DESKTOP MENU */}
                <div className="hidden md:flex gap-8 text-sm font-medium">
                    <Link href="/collections" style={{ color: "var(--color-primary)" }}>Kollekciók</Link>
                    <Link href="/about" style={{ color: "var(--color-primary)" }}>Rólunk</Link>
                    <Link href="/contact" style={{ color: "var(--color-primary)" }}>Kapcsolat</Link>
                </div>
            </div>

            {/* MOBILE MENU */}
            {open && (
                <div
                    className="md:hidden px-4 pb-4 flex flex-col gap-4"
                    style={{ backgroundColor: "var(--color-background)" }}
                >
                    <Link href="/collections" style={{ color: "var(--color-primary)" }}>Kollekciók</Link>
                    <Link href="/about" style={{ color: "var(--color-primary)" }}>Rólunk</Link>
                    <Link href="/contact" style={{ color: "var(--color-primary)" }}>Kapcsolat</Link>
                </div>
            )}
        </nav>
    );
}