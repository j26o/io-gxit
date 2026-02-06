import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import FeaturedWork from './components/FeaturedWork';
import ERPSpotlight from './components/ERPSpotlight';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Admin from './pages/Admin';

function HomePage() {
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

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}
