'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Products() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
      image: "/home/hero/slide1.png",
      status: "available",
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
      status: "coming-soon",
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
      image: "/home/hero/slide3.jpg",
      status: "available",
      color: "amber"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'green':
        return {
          bg: 'from-green-100 to-green-200',
          icon: 'bg-green-600',
          accent: 'text-green-600',
          border: 'border-green-200'
        };
      case 'blue':
        return {
          bg: 'from-blue-100 to-blue-200',
          icon: 'bg-blue-600',
          accent: 'text-blue-600',
          border: 'border-blue-200'
        };
      case 'amber':
        return {
          bg: 'from-amber-100 to-amber-200',
          icon: 'bg-amber-600',
          accent: 'text-amber-600',
          border: 'border-amber-200'
        };
      default:
        return {
          bg: 'from-gray-100 to-gray-200',
          icon: 'bg-gray-600',
          accent: 'text-gray-600',
          border: 'border-gray-200'
        };
    }
  };

  return (
    <section ref={sectionRef} id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
            Our Trusted Products!
          </h2>
          <div className={`h-1 bg-amber-800 mx-auto transition-all duration-1000 ease-out ${
            isVisible ? 'w-24' : 'w-0'
          }`}></div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {products.map((product, index) => {
            const colors = getColorClasses(product.color);
            return (
              <div
                key={product.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Product Image */}
                <div className="h-64 relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Product Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
                    {product.title}
                  </h3>

                  {/* Features */}
                  <div className="mb-4 flex-grow">
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    {/* Coming Soon text for Aspen Shavings */}
                    {product.status === "coming-soon" && (
                      <div className="mt-4 text-center">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          Coming Soon
                        </span>
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <div className="mt-4">
                    {product.status === "available" ? (
                      <a
                        href="#contact"
                        className={`group relative inline-block ${colors.icon} text-white px-6 py-3 rounded-lg overflow-hidden font-medium transition-all duration-500 border-2 ${colors.border}`}
                        style={{ fontFamily: 'var(--font-poppins)' }}
                      >
                        <span className="relative z-10 group-hover:text-gray-900 transition-colors duration-500">
                          Learn More
                        </span>
                        <div className="absolute inset-0 bg-white transform scale-0 rounded-full origin-top-left group-hover:scale-150 transition-transform duration-500 ease-out"></div>
                      </a>
                    ) : (
                      <button
                        disabled
                        className="bg-gray-300 text-gray-500 px-6 py-3 rounded-lg font-medium cursor-not-allowed"
                        style={{ fontFamily: 'var(--font-poppins)' }}
                      >
                        Contact for Sample
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6" style={{ fontFamily: 'var(--font-poppins)' }}>
            Still have questions about our products?
          </p>
          <a
            href="#contact"
            className="group relative inline-block bg-amber-800 text-white px-8 py-3 rounded-lg overflow-hidden font-medium transition-all duration-500 border-2 border-amber-800"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            <span className="relative z-10 group-hover:text-amber-800 transition-colors duration-500">Contact Us</span>
            <div className="absolute inset-0 bg-white transform scale-0 rounded-full origin-top-left group-hover:scale-150 transition-transform duration-500 ease-out"></div>
          </a>
        </div>
      </div>
    </section>
  );
}
