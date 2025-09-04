'use client';

import dynamic from 'next/dynamic';

// Dynamically import MapSection to avoid SSR issues
const MapSection = dynamic(() => import('@/components/MapSection'), {
  ssr: false,
  loading: () => (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
          <p className="text-xl text-gray-600">Visit our location or get directions</p>
          <div className="w-24 h-1 bg-amber-800 mx-auto mt-4"></div>
        </div>
        <div className="relative w-full rounded-2xl overflow-hidden shadow-xl bg-[#0b0e1a] border border-white/10">
          <div className="w-full h-[250px] flex items-center justify-center">
            <div className="text-white">Loading map...</div>
          </div>
        </div>
      </div>
    </section>
  )
});

export default function MapSectionWrapper() {
  return <MapSection />;
}
