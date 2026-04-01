import ContactSection from "@/app/components/ContactSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <main className="pt-10">
                <ContactSection />
            </main>
            <Footer />
        </>
    );
}