import BeforeAfter from "./components/BeforeAfter";
import Contact from "./components/Contact";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Services from "./components/Services";
import StickyCTA from "./components/StickyCTA";
import Testimonials from "./components/Testimonials";
import TrustBar from "./components/TrustBar";
import WhyUs from "./components/WhyUs";

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink-950 text-bone selection:bg-flame-500">
      <Header />

      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyUs />
        <Process />
        <BeforeAfter />
        <Gallery />
        <Testimonials />
        <Contact />
        <FinalCTA />
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
}
