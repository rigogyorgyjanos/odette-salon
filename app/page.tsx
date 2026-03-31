import Navbar from "@/app/components/Navbar";
import Hero from "./components/Hero";
import CollectionPreview from "./components/CollectionPreview";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <CollectionPreview />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}