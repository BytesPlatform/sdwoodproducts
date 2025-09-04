'use client';

import { useState, useEffect, useRef } from 'react';

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    years: 0,
    customers: 0,
    support: 0,
    eco: 0
  });
  const sectionRef = useRef(null);

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

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

  const StatCard = ({ number, suffix = "", label, numberColor, hoverTransform }: { number: number; suffix?: string; label: string; numberColor: string; hoverTransform: string }) => (
    <div className="group relative p-6 rounded-xl bg-white cursor-pointer overflow-hidden transform-gpu perspective-1000"
         style={{
           boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15), 0 4px 15px rgba(0, 0, 0, 0.1)',
           transform: 'translateZ(0)',
           transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
         }}
         onMouseEnter={(e) => {
           e.currentTarget.style.transform = `translateZ(0) ${hoverTransform} translateY(-5px)`;
           e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2), 0 8px 25px rgba(0, 0, 0, 0.15)';
         }}
         onMouseLeave={(e) => {
           e.currentTarget.style.transform = 'translateZ(0) rotateX(0deg) rotateY(0deg) translateY(0px)';
           e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15), 0 4px 15px rgba(0, 0, 0, 0.1)';
         }}>
      
      {/* Animated background fill */}
      <div className="absolute inset-0 bg-amber-800 rounded-xl transform origin-top-left scale-0 group-hover:scale-[2] transition-transform duration-700 ease-out"
           style={{
             background: 'linear-gradient(135deg, #92400e 0%, #b45309 100%)'
           }}>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center">
        <div className={`text-4xl font-bold mb-3 transition-all duration-500 ${numberColor} group-hover:text-white group-hover:scale-110`}
             style={{ 
               fontFamily: 'var(--font-poppins, "Arial", sans-serif)',
               textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
             }}>
          {number}{suffix}
        </div>
        <div className={`font-medium transition-all duration-500 ${numberColor.replace('text-', 'text-').split('-')[1] === 'amber' ? 'text-amber-700' : numberColor.replace(/text-\w+-/, 'text-gray-')}600 group-hover:text-white`}
             style={{ fontFamily: 'var(--font-poppins, "Arial", sans-serif)' }}>
          {label}
        </div>
      </div>
      
      {/* 3D border effect */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-amber-700/30 transition-all duration-400"></div>
    </div>
  );

  return (
    <section ref={sectionRef} id="about" className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: 'url(/home/about-bg.png)',
          opacity: 0.1
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-poppins, "Arial", sans-serif)' }}>About Us</h2>
                      <div className={`h-2 bg-amber-800 mx-auto transition-all duration-1000 ease-out ${
              isVisible ? 'w-40' : 'w-0'
            }`}></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ease-out ${
            isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-10'
          }`}>
            <h3 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-poppins, "Arial", sans-serif)' }}>
              Over 30 years of experience serving agricultural customers
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed" style={{ fontFamily: 'var(--font-poppins, "Arial", sans-serif)' }}>
              We are a leader in the manufacturing and distribution of quality wood shavings and wood-filled erosion control wattles. We utilize environmentally friendly harvesting procedures to protect our forests from fire and unhealthy run-off by working closely with local forest agencies during harvesting.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed" style={{ fontFamily: 'var(--font-poppins, "Arial", sans-serif)' }}>
              We look forward to doing business with you! Fill out a new customer form below to get started.
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative inline-block bg-amber-800 text-white px-8 py-3 rounded-lg overflow-hidden font-medium transition-all duration-500 border-2 border-amber-800"
              style={{ fontFamily: 'var(--font-poppins, "Arial", sans-serif)' }}
            >
              <span className="relative z-10 group-hover:text-amber-800 transition-colors duration-500">New Customer Form</span>
              <div className="absolute inset-0 bg-white transform scale-0 rounded-full origin-top-left group-hover:scale-150 transition-transform duration-500 ease-out"></div>
            </button>
          </div>
          
          <div className={`grid grid-cols-2 gap-6 transition-all duration-1000 ease-out delay-300 ${
            isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-10'
          }`}>
            <StatCard 
              number={animatedNumbers.years}
              suffix="+"
              label="Years Experience"
              numberColor="text-amber-800"
              hoverTransform="rotateX(-10deg) rotateY(5deg)"
            />
            <StatCard 
              number={animatedNumbers.customers}
              suffix="+"
              label="Happy Customers"
              numberColor="text-green-600"
              hoverTransform="rotateX(-10deg) rotateY(-5deg)"
            />
            <StatCard 
              number={animatedNumbers.support}
              suffix="/7"
              label="Support"
              numberColor="text-yellow-600"
              hoverTransform="rotateX(10deg) rotateY(5deg)"
            />
            <StatCard 
              number={animatedNumbers.eco}
              suffix="%"
              label="Eco Friendly"
              numberColor="text-purple-600"
              hoverTransform="rotateX(10deg) rotateY(-5deg)"
            />
          </div>
        </div>
      </div>
    </section>
  );
}