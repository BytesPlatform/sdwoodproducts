'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function OurContributions() {
  const [isVisible, setIsVisible] = useState(false);
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});
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

  const handleCardFlip = (cardIndex: number) => {
    setFlippedCards(prev => ({
      ...prev,
      [cardIndex]: !prev[cardIndex]
    }));
  };
  return (
    <section ref={sectionRef} id="contributions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Contributions</h2>
          <p className="text-xl text-gray-600">Companies/People We Serve!</p>
          <div className="w-24 h-1 bg-amber-800 mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Racetracks/Agricultural Supply Stores */}
          <div className={`perspective-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} transition-all duration-500`}>
            <div 
              className="relative w-full h-96 cursor-pointer transform-gpu transition-transform duration-700"
              onClick={() => handleCardFlip(0)}
              style={{ 
                transformStyle: 'preserve-3d',
                transform: flippedCards[0] ? 'rotateY(180deg)' : 'rotateY(0deg)'
              }}
            >
              {/* Front Side - Text */}
              <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-xl shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-400">
                <div className="p-6 h-full flex flex-col justify-center relative overflow-hidden">
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7a360f] from-0% to-transparent to-100% opacity-0 group-hover:opacity-50 transition-all duration-500 ease-out"></div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10 group-hover:after:w-full after:content-[''] after:block after:h-0.5 after:bg-amber-800 after:transition-all after:duration-400 after:w-0">Racetracks/Agricultural Supply Stores</h3>
                  <p className="text-gray-600 relative z-10">
                    Wood shavings make stall clean-up easy and they promote animal health by keeping feet dry.
                  </p>
                  
                  {/* Click hint */}
                  <div className="mt-4 text-sm text-amber-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10">
                    Click to see image
                  </div>
                </div>
              </div>
              
              {/* Back Side - Image */}
              <div 
                className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-xl shadow-2xl overflow-hidden"
                style={{ transform: 'rotateY(180deg)' }}
              >
                <div className="flex justify-center items-center h-full p-4">
                  <div className="relative w-full h-full">
                    <Image
                      src="/home/cards/race-track.webp"
                      alt="Race track"
                      width={400}
                      height={300}
                      className="w-full h-full object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Zoos and Large Farms */}
          <div className={`perspective-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} transition-all duration-500 delay-200`}>
            <div 
              className="relative w-full h-96 cursor-pointer transform-gpu transition-transform duration-700"
              onClick={() => handleCardFlip(1)}
              style={{ 
                transformStyle: 'preserve-3d',
                transform: flippedCards[1] ? 'rotateY(180deg)' : 'rotateY(0deg)'
              }}
            >
              {/* Front Side - Text */}
              <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-xl shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-400">
                <div className="p-6 h-full flex flex-col justify-center relative overflow-hidden">
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7a360f] from-0% to-transparent to-100% opacity-0 group-hover:opacity-50 transition-all duration-500 ease-out"></div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10 group-hover:after:w-full after:content-[''] after:block after:h-0.5 after:bg-amber-800 after:transition-all after:duration-400 after:w-0">Zoos and Large Farms</h3>
                  <p className="text-gray-600 relative z-10">
                    Our shavings are trusted by some of the largest zoos in the SW region of the US. Ask about their benefits today!
                  </p>
                  
                  {/* Click hint */}
                  <div className="mt-4 text-sm text-amber-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10">
                    Click to see image
                  </div>
                </div>
              </div>
              
              {/* Back Side - Image */}
              <div 
                className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-xl shadow-2xl overflow-hidden"
                style={{ transform: 'rotateY(180deg)' }}
              >
                <div className="flex justify-center items-center h-full p-4">
                  <div className="relative w-full h-full">
                    <Image
                      src="/home/cards/zoo-picture-1-1.webp"
                      alt="Zoo animals"
                      width={400}
                      height={300}
                      className="w-full h-full object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Post Fire Clean-Up and Construction */}
          <div className={`perspective-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} transition-all duration-500 delay-400`}>
            <div 
              className="relative w-full h-96 cursor-pointer transform-gpu transition-transform duration-700"
              onClick={() => handleCardFlip(2)}
              style={{ 
                transformStyle: 'preserve-3d',
                transform: flippedCards[2] ? 'rotateY(180deg)' : 'rotateY(0deg)'
              }}
            >
              {/* Front Side - Text */}
              <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-xl shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-400">
                <div className="p-6 h-full flex flex-col justify-center relative overflow-hidden">
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7a360f] from-0% to-transparent to-100% opacity-0 group-hover:opacity-50 transition-all duration-500 ease-out"></div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10 group-hover:after:w-full after:content-[''] after:block after:h-0.5 after:bg-amber-800 after:transition-all after:duration-400 after:w-0">Post Fire Clean-Up and Construction</h3>
                  <p className="text-gray-600 relative z-10">
                    Run-off after fires or construction projects can be dangerous and hazardous to water health. Wattles can help!
                  </p>
                  
                  {/* Click hint */}
                  <div className="mt-4 text-sm text-amber-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10">
                    Click to see image
                  </div>
                </div>
              </div>
              
              {/* Back Side - Image */}
              <div 
                className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-xl shadow-2xl overflow-hidden"
                style={{ transform: 'rotateY(180deg)' }}
              >
                <div className="flex justify-center items-center h-full p-4">
                  <div className="relative w-full h-full">
                    <Image
                      src="/home/cards/wattle-post-fire-1-1.webp"
                      alt="Post fire clean-up"
                      width={400}
                      height={300}
                      className="w-full h-full object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
