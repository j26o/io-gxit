import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import FeaturedWork from './components/FeaturedWork';
import ERPSpotlight from './components/ERPSpotlight';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <FeaturedWork />
        <ERPSpotlight />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
