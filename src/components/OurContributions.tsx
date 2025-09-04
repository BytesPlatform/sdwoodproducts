'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function OurContributions() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <section ref={sectionRef} id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Contributions</h2>
          <p className="text-xl text-gray-600">Companies/People We Serve!</p>
          <div className="w-24 h-1 bg-amber-800 mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Racetracks/Agricultural Supply Stores */}
          <div className={`bg-white rounded-xl shadow-2xl overflow-hidden hover:shadow-3xl hover:scale-105 hover:bg-orange-100 transition-all duration-400 transform group ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            {/* Image Header */}
            <div className="flex justify-center">
              <div className="relative w-72">
                <Image
                  src="/home/cards/race-track.webp"
                  alt="Race track"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:after:w-full after:content-[''] after:block after:h-0.5 after:bg-amber-800 after:transition-all after:duration-400 after:w-0">Racetracks/Agricultural Supply Stores</h3>
              <p className="text-gray-600">
                Wood shavings make stall clean-up easy and they promote animal health by keeping feet dry.
              </p>
            </div>
          </div>

          {/* Zoos and Large Farms */}
          <div className={`bg-white rounded-xl shadow-2xl overflow-hidden hover:shadow-3xl hover:scale-105 hover:bg-orange-100 transition-all duration-400 transform delay-200 group ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            {/* Image Header */}
            <div className="flex justify-center">
              <div className="relative w-72">
                <Image
                  src="/home/cards/zoo-picture-1-1.webp"
                  alt="Zoo animals"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:after:w-full after:content-[''] after:block after:h-0.5 after:bg-amber-800 after:transition-all after:duration-400 after:w-0">Zoos and Large Farms</h3>
              <p className="text-gray-600">
                Our shavings are trusted by some of the largest zoos in the SW region of the US. Ask about their benefits today!
              </p>
            </div>
          </div>

          {/* Post Fire Clean-Up and Construction */}
          <div className={`bg-white rounded-xl shadow-2xl overflow-hidden hover:shadow-3xl hover:scale-105 hover:bg-amber-600/20 transition-all duration-400 transform delay-200 group ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            {/* Image Header */}
            <div className="flex justify-center">
              <div className="relative w-72">
                <Image
                  src="/home/cards/wattle-post-fire-1-1.webp"
                  alt="Post fire clean-up"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:after:w-full after:content-[''] after:block after:h-0.5 after:bg-amber-800 after:transition-all after:duration-400 after:w-0">Post Fire Clean-Up and Construction</h3>
              <p className="text-gray-600">
                Run-off after fires or construction projects can be dangerous and hazardous to water health. Wattles can help!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
