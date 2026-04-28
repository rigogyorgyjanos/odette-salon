import Footer from "../components/Footer";
import Navbar from "../components/Navbar"

export default function Inside() {
  return (
    <>

      <Navbar />

      <iframe
        src="/inside/index.htm"
        className="mt-16"
        style={{ width: "100%", height: "93vh", border: "none" }}
      />
      <Footer />
    </>
  );
}