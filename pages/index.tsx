import Header from '../components/Header';
import Hero from '../components/Hero';
import AppPreview from '../components/AppPreview';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <AppPreview />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Contact />
      <CTA />
      <Footer />
    </div>
  );
}