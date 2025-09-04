"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  features: string[];
  image: string;
  status: "available" | "coming-soon";
  color: string;
};

export const AnimatedProducts = ({
  products,
  autoplay = true,
  className,
}: {
  products: Product[];
  autoplay?: boolean;
  className?: string;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % products.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + products.length) % products.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'green':
        return {
          icon: 'bg-green-600',
          accent: 'text-green-600',
          border: 'border-green-200'
        };
      case 'blue':
        return {
          icon: 'bg-blue-600',
          accent: 'text-blue-600',
          border: 'border-blue-200'
        };
      case 'amber':
        return {
          icon: 'bg-amber-600',
          accent: 'text-amber-600',
          border: 'border-amber-200'
        };
      default:
        return {
          icon: 'bg-gray-600',
          accent: 'text-gray-600',
          border: 'border-gray-200'
        };
    }
  };

  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ${className}`}>
             <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
          Our Trusted Products!
        </h2>
        <div className="h-1 bg-amber-800 mx-auto w-24"></div>
      </div>

             <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="flex items-start pt-4">
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {products.map((product, index) => {
                const colors = getColorClasses(product.color);
                return (
                  <motion.div
                    key={product.id}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: randomRotateY(),
                    }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.7,
                      scale: isActive(index) ? 1 : 0.95,
                      z: isActive(index) ? 0 : -100,
                      rotate: isActive(index) ? 0 : randomRotateY(),
                      zIndex: isActive(index)
                        ? 999
                        : products.length + 2 - index,
                      y: isActive(index) ? [0, -20, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 100,
                      rotate: randomRotateY(),
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 origin-bottom"
                  >
                    <div className="h-full w-full rounded-xl shadow-lg overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
        
        <div className="flex flex-col">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
            className="flex-grow"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
              {products[active].title}
            </h3>
            <p className="text-base text-gray-600 mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
              {products[active].status === "coming-soon" ? "Coming Soon" : "Available Now"}
            </p>
            <motion.div className="text-sm text-gray-600 mb-4">
              {products[active].features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.1 * index,
                  }}
                  className="flex items-start mb-2"
                >
                  <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span style={{ fontFamily: 'var(--font-poppins)' }}>{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Coming Soon Badge */}
            {products[active].status === "coming-soon" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="mb-4"
              >
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                  Coming Soon
                </span>
              </motion.div>
            )}

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              {products[active].status === "available" ? (
                <a
                  href="#contact"
                  className={`group relative inline-block ${getColorClasses(products[active].color).icon} text-white px-6 py-3 rounded-lg overflow-hidden font-medium transition-all duration-500 border-2 ${getColorClasses(products[active].color).border}`}
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
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-4">
              <button
                onClick={handlePrev}
                className="h-10 w-10 rounded-full bg-amber-800 flex items-center justify-center group/button hover:bg-amber-700 transition-colors duration-300"
              >
                <IconArrowLeft className="h-5 w-5 text-white group-hover/button:rotate-12 transition-transform duration-300" />
              </button>
              <button
                onClick={handleNext}
                className="h-10 w-10 rounded-full bg-amber-800 flex items-center justify-center group/button hover:bg-amber-700 transition-colors duration-300"
              >
                <IconArrowRight className="h-5 w-5 text-white group-hover/button:-rotate-12 transition-transform duration-300" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

             {/* Bottom CTA */}
       <div className="text-center mt-6">
         <p className="text-sm text-gray-600 mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
           Still have questions about our products?
         </p>
         <a
           href="#contact"
           className="group relative inline-block bg-amber-800 text-white px-5 py-2 rounded-lg overflow-hidden font-medium transition-all duration-500 border-2 border-amber-800"
           style={{ fontFamily: 'var(--font-poppins)' }}
         >
           <span className="relative z-10 group-hover:text-amber-800 transition-colors duration-500">Contact Us</span>
           <div className="absolute inset-0 bg-white transform scale-0 rounded-full origin-top-left group-hover:scale-150 transition-transform duration-500 ease-out"></div>
         </a>
       </div>
    </div>
  );
};
