import Header from "./components/Header";
import Hero from "./components/Hero";
import Masters from "./components/Masters";
import WhyUs from "./components/WhyUs";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Interior from "./components/Interior";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Masters />
        <WhyUs />
        <Services />
        <Portfolio />
        <Interior />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
