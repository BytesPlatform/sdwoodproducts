import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import OurContributions from '@/components/OurContributions';
import ContactForm from '@/components/ContactForm';
import MapSection from '@/components/MapSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <AboutUs />
      <OurContributions />
      <ContactForm />
      <MapSection />
      <Footer />
    </div>
  );
}