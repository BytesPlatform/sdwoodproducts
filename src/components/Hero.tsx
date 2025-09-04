'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const slides = [
    {
      src: '/home/hero/slide1.png',
      alt: 'Silver Dollar Wood Products - Industrial Wood Processing'
    },
    {
      src: '/home/hero/slide2.jpg',
      alt: 'Quality Wood Shavings Manufacturing'
    },
    {
      src: '/home/hero/slide3.jpg',
      alt: 'Erosion Control Solutions'
    },
    {
      src: '/home/hero/slide4.jpg',
      alt: 'Environmental Wood Products'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const handleClick = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide(index);
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  };

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden cursor-pointer group"
      onClick={handleClick}
    >
      {/* Background Images Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Gradient Overlay with subtle animation */}
      <div className={`absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-800/60 z-10 transition-opacity duration-500 ${
        isTransitioning ? 'opacity-90' : 'opacity-100'
      }`}></div>

      
      {/* Content with subtle hover effect */}
      <div className="relative z-20 text-center text-white px-4 transition-transform duration-300 group-hover:scale-105">
        <h1 className="text-5xl md:text-7xl font-semibold mb-6 leading-tight" style={{ fontFamily: 'var(--font-poppins)' }}>
          Silver Dollar Wood<br />
          Products LLC
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200" style={{ fontFamily: 'var(--font-poppins)' }}>
          Family Owned and operated since 1993!
        </p>
        <div className="flex justify-center">
          <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center animate-bounce">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
