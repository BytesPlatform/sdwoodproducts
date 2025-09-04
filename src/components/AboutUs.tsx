'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    years: 0,
    customers: 0,
    support: 0,
    eco: 0
  });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate numbers
          animateNumbers();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateNumbers = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    // Years animation (0 to 30)
    let yearsStep = 0;
    const yearsInterval = setInterval(() => {
      yearsStep++;
      const progress = yearsStep / steps;
      const value = Math.floor(30 * progress);
      setAnimatedNumbers(prev => ({ ...prev, years: value }));
      
      if (yearsStep >= steps) {
        clearInterval(yearsInterval);
        setAnimatedNumbers(prev => ({ ...prev, years: 30 }));
      }
    }, stepDuration);

    // Customers animation (0 to 1000)
    let customersStep = 0;
    const customersInterval = setInterval(() => {
      customersStep++;
      const progress = customersStep / steps;
      const value = Math.floor(1000 * progress);
      setAnimatedNumbers(prev => ({ ...prev, customers: value }));
      
      if (customersStep >= steps) {
        clearInterval(customersInterval);
        setAnimatedNumbers(prev => ({ ...prev, customers: 1000 }));
      }
    }, stepDuration);

    // Support animation (0 to 24)
    let supportStep = 0;
    const supportInterval = setInterval(() => {
      supportStep++;
      const progress = supportStep / steps;
      const value = Math.floor(24 * progress);
      setAnimatedNumbers(prev => ({ ...prev, support: value }));
      
      if (supportStep >= steps) {
        clearInterval(supportInterval);
        setAnimatedNumbers(prev => ({ ...prev, support: 24 }));
      }
    }, stepDuration);

    // Eco animation (0 to 100)
    let ecoStep = 0;
    const ecoInterval = setInterval(() => {
      ecoStep++;
      const progress = ecoStep / steps;
      const value = Math.floor(100 * progress);
      setAnimatedNumbers(prev => ({ ...prev, eco: value }));
      
      if (ecoStep >= steps) {
        clearInterval(ecoInterval);
        setAnimatedNumbers(prev => ({ ...prev, eco: 100 }));
      }
    }, stepDuration);
  };

  return (
    <section ref={sectionRef} id="about" className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home/about-bg.png"
          alt="About Us Background"
          fill
          className="object-cover opacity-10"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>About Us</h2>
          <div className={`h-1 bg-amber-800 mx-auto transition-all duration-1000 ease-out ${
            isVisible ? 'w-24' : 'w-0'
          }`}></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ease-out ${
            isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-10'
          }`}>
            <h3 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-poppins)' }}>
              Over 30 years of experience serving agricultural customers
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed" style={{ fontFamily: 'var(--font-poppins)' }}>
              We are a leader in the manufacturing and distribution of quality wood shavings and wood-filled erosion control wattles. We utilize environmentally friendly harvesting procedures to protect our forests from fire and unhealthy run-off by working closely with local forest agencies during harvesting.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed" style={{ fontFamily: 'var(--font-poppins)' }}>
              We look forward to doing business with you! Fill out a new customer form below to get started.
            </p>
            <a
              href="#contact"
              className="group relative inline-block bg-amber-800 text-white px-8 py-3 rounded-lg overflow-hidden font-medium transition-all duration-500 border-2 border-amber-800"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              <span className="relative z-10 group-hover:text-amber-800 transition-colors duration-500">New Customer Form</span>
              <div className="absolute inset-0 bg-white transform scale-0 rounded-full origin-top-left group-hover:scale-150 transition-transform duration-500 ease-out"></div>
            </a>
          </div>
          
          <div className={`grid grid-cols-2 gap-4 transition-all duration-1000 ease-out delay-300 ${
            isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative p-6 rounded-lg shadow-lg overflow-hidden">
              <div className="absolute inset-0 z-0">
                <Image
                  src="/home/box-bg.jpg"
                  alt="Box Background"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative z-10 text-center">
                <div className="text-3xl font-bold text-amber-800 mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                  {animatedNumbers.years}+
                </div>
                <div className="text-amber-800" style={{ fontFamily: 'var(--font-poppins)' }}>Years Experience</div>
              </div>
            </div>
            <div className="relative p-6 rounded-lg shadow-lg overflow-hidden">
              <div className="absolute inset-0 z-0">
                <Image
                  src="/home/box-bg.jpg"
                  alt="Box Background"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative z-10 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                  {animatedNumbers.customers}+
                </div>
                <div className="text-green-600" style={{ fontFamily: 'var(--font-poppins)' }}>Happy Customers</div>
              </div>
            </div>
            <div className="relative p-6 rounded-lg shadow-lg overflow-hidden">
              <div className="absolute inset-0 z-0">
                <Image
                  src="/home/box-bg.jpg"
                  alt="Box Background"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative z-10 text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                  {animatedNumbers.support}/7
                </div>
                <div className="text-yellow-600" style={{ fontFamily: 'var(--font-poppins)' }}>Support</div>
              </div>
            </div>
            <div className="relative p-6 rounded-lg shadow-lg overflow-hidden">
              <div className="absolute inset-0 z-0">
                <Image
                  src="/home/box-bg.jpg"
                  alt="Box Background"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative z-10 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                  {animatedNumbers.eco}%
                </div>
                <div className="text-purple-600" style={{ fontFamily: 'var(--font-poppins)' }}>Eco Friendly</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
