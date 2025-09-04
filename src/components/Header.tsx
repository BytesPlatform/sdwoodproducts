'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 relative">
              <Image
                src="/home/logo.webp"
                alt="Silver Dollar Wood Products Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <h1 className={`text-lg font-bold transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Silver Dollar
              </h1>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className={`transition-colors hover:text-amber-800 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className={`transition-colors hover:text-amber-800 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`transition-colors hover:text-amber-800 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`transition-colors hover:text-amber-800 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <a
            href="https://www.google.com/maps/place/Silver+Dollar+Wood+Products+LLC/@36.5582938,-104.6517324,13z/data=!4m6!3m5!1s0x871090e03d7f2167:0xb8a78035f6992b35!8m2!3d36.5469676!4d-104.5399327!16s%2Fg%2F1thvt4g6?entry=ttu&g_ep=EgoyMDI1MDgzMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative px-4 py-2 rounded-lg overflow-hidden transition-all duration-500 text-sm font-medium border-2 ${
              isScrolled 
                ? 'bg-amber-800 text-white border-amber-800' 
                : 'bg-white/20 text-white border-white/30 backdrop-blur-sm'
            }`}
          >
            <span className={`relative z-10 transition-colors duration-500 ${
              isScrolled ? 'group-hover:text-amber-800' : 'group-hover:text-amber-800'
            }`}>
              Google Location
            </span>
            <div className={`absolute inset-0 transform scale-0 rounded-full origin-top-left group-hover:scale-150 transition-transform duration-500 ease-out ${
              isScrolled ? 'bg-white' : 'bg-white'
            }`}></div>
          </a>
        </div>
      </div>
    </header>
  );
}
