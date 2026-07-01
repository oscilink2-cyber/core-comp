import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutCompany from './components/AboutCompany';
import WhyChooseUs from './components/WhyChooseUs';
import Projects from './components/Projects';
import Capabilities from './components/Capabilities';
import Features from './components/Features';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutCompany />
        <WhyChooseUs />
        <Projects />
        <Capabilities />
        <Features />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
