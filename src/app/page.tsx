import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import { AnimatedProducts } from '@/components/AnimatedProducts';
import OurContributions from '@/components/OurContributions';
import ContactForm from '@/components/ContactForm';
import MapSection from '@/components/MapSection';
import Footer from '@/components/Footer';

export default function Home() {
  const products = [
    {
      id: 1,
      title: "Pine Shavings",
      features: [
        "15-20% more shavings per bag",
        "Clean, low-dust bedding",
        "Excellent absorbency",
        "Fresh, natural pine scent",
        "Flakes range from 1/8\" to 3/4\"",
        "Screened to remove dust"
      ],
      image: "/home/product1.webp",
      status: "available" as const,
      color: "green"
    },
    {
      id: 2,
      title: "Aspen Shavings",
      features: [
        "Softer, low-aromatic wood",
        "Excellent for horses and small animals",
        "Superior absorbency",
        "Enhanced comfort",
        "Sample available upon request"
      ],
      image: "/home/hero/slide2.jpg",
      status: "coming-soon" as const,
      color: "blue"
    },
    {
      id: 3,
      title: "Wood Wattles",
      features: [
        "Premium large-flake shavings",
        "Significantly lighter than straw wattles",
        "Eco-friendly solution",
        "Zero risk of invasive seeds",
        "Kiln-dried at 1000°F+",
        "Available in multiple sizes"
      ],
      image: "/home/product2.webp",
      status: "available" as const,
      color: "amber"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <AboutUs />
      <AnimatedProducts products={products} autoplay={true} className="bg-gray-50" />
      <OurContributions />
      <ContactForm />
      <MapSection />
      <Footer />
    </div>
  );
}